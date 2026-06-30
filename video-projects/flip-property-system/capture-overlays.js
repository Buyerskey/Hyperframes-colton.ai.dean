const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = '/home/user/Hyperframes-colton.ai.dean/video-projects/flip-property-system';
const FRAMES_DIR = '/tmp/oframes';
const FPS = 30;
const DURATION = 42.17;
const TOTAL_FRAMES = Math.ceil(DURATION * FPS);

function startServer(dir, port) {
  const mimes = {
    '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
    '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ttf': 'font/ttf',
  };
  return http.createServer((req, res) => {
    const filePath = path.join(dir, req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0]);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404); res.end(); return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const stat = fs.statSync(filePath);
    const range = req.headers.range;
    if (range) {
      const [s, e] = range.replace(/bytes=/, '').split('-');
      const start = parseInt(s, 10), end = e ? parseInt(e, 10) : stat.size - 1;
      res.writeHead(206, { 'Content-Range': `bytes ${start}-${end}/${stat.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Content-Type': mimes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream', 'Content-Length': stat.size });
      fs.createReadStream(filePath).pipe(res);
    }
  }).listen(port);
}

async function main() {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
  const server = startServer(PROJECT_DIR, 8767);
  console.log(`Capturing ${TOTAL_FRAMES} overlay frames (transparent background)...`);

  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });

  const ctx = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
  });
  const page = await ctx.newPage();

  await page.goto('http://localhost:8767/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Make backgrounds transparent, hide video/audio/grain
  await page.evaluate(() => {
    // Hide non-visual elements
    const video = document.getElementById('face-cam');
    if (video) video.style.display = 'none';
    document.querySelectorAll('audio').forEach(a => a.style.display = 'none');

    // Hide grain (it doesn't render correctly in headless + will be added by ffmpeg)
    const grain = document.getElementById('grain');
    if (grain) grain.style.display = 'none';

    // Make backgrounds transparent for true alpha compositing
    document.documentElement.style.background = 'transparent';
    document.body.style.background = 'transparent';
    const root = document.getElementById('flip-system');
    if (root) root.style.background = 'transparent';
  });

  const start = Date.now();

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const t = i / FPS;

    await page.evaluate((time) => {
      window.__timelines['flip-system'].seek(time, false);
      // Keep grain hidden after each seek (GSAP might set its opacity)
      const grain = document.getElementById('grain');
      if (grain) grain.style.display = 'none';
    }, t);

    const frameNum = String(i + 1).padStart(5, '0');
    await page.screenshot({
      path: `${FRAMES_DIR}/o_${frameNum}.png`,
      type: 'png',
      omitBackground: true,  // true alpha channel
    });

    if (i % 300 === 0 && i > 0) {
      const elapsed = (Date.now() - start) / 1000;
      const rate = i / elapsed;
      const rem = Math.ceil((TOTAL_FRAMES - i) / rate);
      console.log(`Frame ${i}/${TOTAL_FRAMES} | ${rate.toFixed(1)}/s | ~${rem}s left`);
    }
  }

  console.log(`Done in ${((Date.now()-start)/1000).toFixed(1)}s`);
  await browser.close();
  server.close();
}

main().catch(err => { console.error(err); process.exit(1); });
