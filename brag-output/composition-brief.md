# HyperFrames Composition Brief: Dev Fashion

## Objective
Create a short, luxurious bridal-couture film for Dev Fashion using the site's real portfolio photography, brand copy, and gallery flow.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: vertical — 1080x1920 (9:16, Instagram Reel)
- Duration: 21 seconds

## Source Material
- Project root: `C:\Users\sakth\.gemini\antigravity\scratch\dev-fashion`
- Primary files read: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `src/components/landingpage.tsx`
- Product name: Dev Fashion
- Tagline / strongest claim: “Crafting Elegance, Designed for You”
- Key UI or visual moment to recreate: the homepage's 3D bridal-look carousel and look-detail viewer, including “Look 01 / 20,” “Bridal Couture,” and the made-to-measure description.
- Source images used: `/public/logo.jpg`, `/public/images/dev_fashion/1.jpg`, `/public/images/dev_fashion/b1.jpg`, `/public/images/dev_fashion/b3.jpg`, `/public/images/dev_fashion/b14.jpg`, `/public/images/dev_fashion/b18.jpg`
- Copy that must appear verbatim:
  - “Crafting Elegance, Designed for You”
  - “South Indian Bridal Blouse Designer”
  - “Hand-embroidered and made to measure in our Coimbatore atelier.”
  - “www.devfashion.in”
- Keep names and contact details out of the film. Do not frame Dev Fashion as a photography service.

## Creative Direction
- Tone preset: cinematic
- Creative direction: a quiet, luxurious South Indian bridal editorial; heritage craft photographed like a modern fashion-house campaign
- Interpretation: image-led, stately pacing; restrained transitions and sound; large Cormorant titles against the real bridal photographs.
- Angle: Turn the real bridal portfolio into an heirloom lookbook. Begin with a bridal detail, reveal the atelier's identity, let its portfolio carousel become the central moment, then close on the original wordmark, signature, and official website.
- Hook: a near-black reveal of a real bridal-detail photograph beneath “Crafting Elegance, Designed for You.”
- Outro / punchline: “DEV FASHION” / “Crafting Elegance, Designed for You” / “Book Consultation.”
- Avoid:
  - Generic SaaS language or invented business claims
  - Abstract filler visuals or synthetic bridal imagery
  - Unrelated visual redesign
  - Voiceover, names, phone numbers, or other personal data

## Visual Identity
- Background: #FAF8F5, with #0C0C0B used sparingly for dark frames
- Text: #141312
- Accent: #B38E46 and #C5A059
- Display font: Cormorant Garamond (use a local font file)
- Body font: Manrope (use a local font file)
- Visual references from the project: the cream/ink/gold palette, editorial serif headings, bridal portfolio photography, and the 3D carousel/look-detail viewer.

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. The detail — 4.20s — real embroidery detail and the exact brand signature.
2. The atelier — 4.54s — a real bridal look and the site's South Indian bridal identity.
3. The lookbook — 4.37s — three real portfolio photographs, then the actual selected-look labels.
4. Made to measure — 4.36s — real embroidery photography and the source's exact made-to-measure description.
5. The signature — 3.53s — original brand mark, exact tagline, and official website.

## Audio
- Audio role: restrained cinematic support.
- Audio arc: gentle fade-in, a warm steady bed through the portfolio, then a soft fade under the end card.
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music attribution: Sascha Ende, ende.app (CC BY 4.0).
- Music treatment: target 0.30 gain with a short fade-in and final fade-out. Keep the bed below image and copy moments.
- Music cue guidance: see `brag-output/brag-plan.md` and the bundled vol-12 cue preset; 8.74s, 13.11s, and 17.47s are optional reveal cues.
- Audio-reactive treatment: omit if the local audio-data extraction workflow is unavailable.
- Audio-coupled moments:
  - Selected-look reveal — a single soft accent may accompany the portfolio selection.
  - Final brand reveal — one delicate logo accent, if it does not overpower the music.
- SFX selection guidance: sparse, low/medium high-frequency risk, motion-matched, with no repeated click track.
- SFX analysis guidance: `C:\Users\sakth\.gemini\antigravity\scratch\dev-fashion\.agents\skills\brag\assets\sfx\sfx-analysis.md`
- Exact SFX choice: choose only after the visual animation exists.
- Audio files: copy the selected music and any chosen SFX into `brag-output/composition/assets/`.

## HyperFrames Instructions
Use the current HyperFrames composition contract: one root `index.html`, one scene per sub-composition, stable clip ids, local media paths, paused scene timelines registered after their tweens, and a paused root timeline. All timed elements need `class="clip"`, `data-start`, and `data-duration`; scene styles, markup, and scripts stay inside `<template>`. Use the 1080x1920 portrait canvas and keep text clear of Instagram interface areas. Use local image, audio, and font assets; do not make render-time network requests. Crossfade between scenes only when the image-led transition supports it. Run `npx hyperframes check --json` from the composition directory and fix all errors before rendering.
