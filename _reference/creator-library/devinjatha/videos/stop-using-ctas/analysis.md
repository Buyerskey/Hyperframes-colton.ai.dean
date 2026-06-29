# stop-using-ctas — @devinjatha

**Source:** https://www.instagram.com/reel/DHWKG6AxhpU/
**Duration:** 82.88s
**Aspect:** 4:3 (screen recording — source is 9:16 vertical content)
**Resolution:** 480×360 (screen recording)
**Studied:** 2026-06-29
**Engagement (at time of study):** Not available (screen recording)
**Sample rate:** 1fps across 83 frames

## Hook (0–2s)
Fullscreen face-cam — creator dead centre, dark background, red backlight halo. Large bold white text slammed over chest: "EVERY SINGLE CTA". High contrast, slightly aggressive energy. No graphic insert — pure talking-head with kinetic text.

## Pacing
- Total scenes: ~15
- Average scene length: ~5.5s
- Shortest / longest scene: 2s / 10s
- Distribution feel: medium-sustained — longer form than video 1, more explanation time per point
- Pace shifts: accelerates at ~40s when showing Instagram analytics graph; slows for the screen-share tutorial section (~60–75s)

## Captions
- Style: phrase chunks, bold white
- Font feel: heavy sans, no stroke, drop shadow
- Active-word treatment: key phrases get their own full-screen moment ("EVERY SINGLE OTA", "OF COURSE")
- Position: lower-centre to centre
- Size relative to frame: large

## Scene types
1. Talking-head fullscreen — dark bg, red backlight, "EVERY SINGLE OTA" text slam (talking-head face-cam / kinetic typography slam)
2. Data insert — Instagram "Audience Retention" graph shown as overlay card on face-cam; "30% Finished" highlighted in red (data-feel grid / talking-head hybrid)
3. Talking-head continues — yellow backlight replaces red; creator gestures (talking-head face-cam)
4. Screen share — Instagram caption template shown: "[phrase], [Hook]" structure breakdown (product/UI showcase)
5. Screen share — video timeline / editing software shown briefly (product/UI showcase)
6. Quoted text insert — "If your trying to get more views on your videos then, don't make CTAs at the end of your videos" — white text on dark bg with phone frame border (kinetic typography slam)
7. Talking-head continues — blue/purple backlight; creator explains the replacement strategy (talking-head face-cam)
8. Outro — "OF COURSE" text slam fullscreen (kinetic typography slam)

## Transitions
- Flavors observed: hard cut (dominant), one glitch/flash transition into screen share
- Rotation cadence: hard cuts throughout
- Signature: no fancy transitions — the energy comes from lighting changes (red → yellow → blue backlight shifts) that mark new sections, not graphic wipes

## Face treatment
- Mode mix: fullscreen face-cam throughout; screen shares are full-screen insert cuts
- Grading feel: crushed blacks, high contrast; backlight colour changes per section (red for hook, yellow for mid, blue for conclusion)
- Ken Burns: none
- Framing: tight-medium, always dead centre, slight chin-down angle

## Audio reactivity
- Text pulses on beat: no
- Background reactivity: no
- Lighting colour shifts appear to be manual scene changes, not beat-reactive

## Palette
- `#0a0a0a` — near-black canvas
- `#e63b2e` — red backlight (hook section)
- `#f5c842` — yellow backlight (mid section)
- `#4f46e5` — blue/purple backlight (conclusion)
- `#ffffff` — white text

## Signature move
Backlight colour cycling — red for the provocative hook, yellow for the educational middle, blue/purple for the resolution — creates a visual "chapter" system without any graphic overlays, just light.

## What to steal (actionable for Hyperframes builds)
- **Backlight colour-per-chapter system** — use CSS background radial gradient behind a talking-head clip that changes colour at chapter boundaries; GSAP `.to()` on background-color; extremely portable to property content
- **Analytics graph insert** — show a real (or stylised) retention/reach graph as an overlay card on the face-cam to add credibility; map to `data-chart` block or custom SVG
- **Quoted text on phone-frame mockup** — pull a key insight out as a quote card with a subtle phone-border frame; static hold for 2–3s; kinetic typography slam archetype
- **Lighting-change hard cut as section divider** — no transition needed; just cut to new clip with different backlight colour; zero render complexity, high visual impact

## What's creator-specific (don't copy literally)
- @devinjatha's specific CTA argument and Instagram growth advice
- His specific caption formula template
- "OF COURSE" sign-off

## Transcript
No transcript.json — video was studied via screen recording upload, no audio transcription run.
