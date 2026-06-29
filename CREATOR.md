# Creator Profile — Manny | BuyersKey

Your identity, positioning, and workflow for video work in this workspace. **Read this before every video task** (alongside `PREFERENCES.md`). Use it for on-screen text, niche framing, and workflow assumptions.

## Identity

- **Name on-screen**: Manny | BuyersKey
- **Instagram**: @propertywithmanny
- **TikTok**: —
- **YouTube**: —
- **X / other**: —

When putting handles on-screen (lower-thirds, outros, end-cards), use the platform-appropriate handle.

## Platform priority

Cross-post all (Instagram Reels + TikTok + YouTube Shorts). Default aspect ratio: **9:16 vertical, 1080×1920**.

## Content niche

Real estate / property buying — buyer's agent, Australian property market, home buying tips, and property strategy.

## On-camera mix

Both — face-cam videos and faceless motion-graphic videos depending on the project.

- **Face-cam** → use `/short-form-video` face-mode choreography (BOTTOM / FULLSCREEN modes).
- **Faceless** → motion graphics + AI TTS narration (`npx hyperframes tts`) or screen-recordings.

## Workflow — division of labor

Mixed workflow depending on the video:

- **When Manny records + pre-edits his own speaking video** → it's the source of truth; the assistant builds the visual layer on top and does NOT cut audio, remove pauses, or change pacing.
- **When building from scratch** → motion graphics, TTS narration, and screen-recordings assembled together.

## Brand identity

_(Colors, fonts, logo. Often a blank slate at the start — `assets/brand-tokens.css` fills in over time. Set initial values during /setup.)_

## Inspiration creators

_(Studied creators live in [`_reference/creator-library/`](_reference/creator-library/). Paste a TikTok / Instagram Reel / YouTube Short URL and run `/study-creator <url>` to add one. At build time, name a creator — "build this like @handle" — to apply their style fingerprint to the visual layer. /setup seeds your first few here.)_

## Posting cadence & length defaults

- _Cadence_: _(TBD — set during /setup)_
- _Default length_: 15–45s short-form vertical is a common sweet spot. Adjust per video.
- _Default fps_: 30 (matches TikTok + Instagram defaults).

## Project slug convention

**Topic-only, kebab-case.** Each video gets a new subfolder under `video-projects/<topic-slug>/`. Examples: `ai-agents-intro`, `prompting-101`, `tool-of-the-week`. Keep slugs short and descriptive — scannable at a glance in `ls video-projects/`.

---

*This file is updated as your creator profile evolves. Major changes (new handles, platform shifts, workflow changes) can be edited here directly.*
