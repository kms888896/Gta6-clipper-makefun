# GTA 6 vertical short — make.fun bounty entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kms888896/Gta6-clipper-makefun/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kms888896/Gta6-clipper-makefun/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

<sub>Entered on [make.fun](https://make.fun/?ref=pwgxy9r5&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

Entry for **gta6-clipper-01 — Clip GTA 6 for the most YouTube views** (make.fun).
The deliverable is a **31.5-second, 1080×1920, H.264 vertical Short**: a GTA 6 hook cut
from Rockstar's *Grand Theft Auto VI Trailer 2*, followed by an on-screen make.fun pitch.

The rendered file is `gta6-clip-short.mp4` (kept beside, not inside, this repository so the
entry snapshot stays small).

## The source and the chosen moment

- Source: **Grand Theft Auto VI Trailer 2**, Rockstar Games, YouTube `VQRLujxTm3c`
  (2:46.7, 3840×2160, 30 fps).
- The official 4K master was downloaded and inspected frame by frame. YouTube's player
  blocks this build machine's IP with a bot check, so the identical official file was
  fetched from the Internet Archive item `gtavi-trailer-2_20250506`
  (`GTAVI_Trailer_2_H264.mp4`). Rockstar's own player metadata for Trailer 2
  (`videos.rockstargames.com/v4/cpys7u21/...`) lists `youtubeId: VQRLujxTm3c`, which ties
  that file to the YouTube upload.
- The trailer is letterboxed 2.22:1 inside the 16:9 frame, so the active picture area
  (972×1728) was cropped rather than the full frame; that fills 9:16 with no black bars.

**Chosen segment: 2:20.4 → 2:36.1** (plus the VI logo button through 2:39.1).

| Time | Shot |
| --- | --- |
| 2:20.4 | Jet skis racing across the bay toward Vice City |
| 2:22 | Rocket launcher fired from a jet ski |
| 2:24 | Truck rear / explosion glow |
| 2:26 | Jason and Lucia in the motel room |
| 2:28 | Airboat at dusk |
| 2:29 | Motorcycle rider in the city |
| 2:30 | Jason and Lucia in the green car ("Bonnie & Clyde") |
| 2:31 | Garage crowd with a beer |
| 2:33 | Red lowrider |
| 2:34–2:36 | Golden-hour skyline over Vice City |
| 2:36–2:39 | GTA VI logo button |

Why this stretch: it opens on bright, fast motion (jet skis) instead of a dialogue scene,
escalates within 1.5 seconds to an absurd rocket-launcher image, then keeps changing the
picture every second or two — explosion, the two leads, a boat, a bike, the getaway car, a
lowrider, and finally the sunset skyline. Every subject sits near the centre of the frame,
so the 9:16 crop never loses the point of a shot. The sunset is a natural button before
the pitch.

## The creative

**Hook (0:00–18:7).** The trailer audio and footage run untouched. A small
`GTA VI · VICE CITY` badge fades in at 0.8 s and out at 5.5 s. No other text competes with
the opening.

**Turn (18.7 s onward).** Hard cut from the VI logo to a darkened, slowly zooming freeze of
the sunset skyline. Three text beats:

1. `AN AI AGENT` / `MADE THIS CUT` — the payoff for the hook.
2. `Make clips like this with AI` / `and earn money on` / `make.fun` — the required pitch,
   with `make.fun` in the GTA VI pink.
3. `$500 GTA 6 BOUNTY` / `Top 20 clips share the prize` /
   `make.fun/bounty/gta6-clipper-01` / `GTA VI · OUT NOW` — the call to action.

Each beat is on screen for 3–5 seconds, well above the "2–3 seconds a line" the bounty
asks for. The text block ends above y = 1000 on the 1920-pixel frame, so YouTube's title,
channel row and right-hand buttons do not cover it.

The trailer's original audio is kept for the full hook and logo; it fades out under the
pitch, leaving the CTA card silent and readable.

## How it was rendered

ffmpeg 7.1.5, Node 22. Key filters:

- active-area crop and scale: `crop=972:1728:1434:216,scale=1080:1920:flags=lanczos`
- `zoompan` on a still of the final sunset frame for the pitch background
- `drawtext` with Anton and Inter (SIL Open Font License) for the on-screen copy
- `concat` of the GTA section (18.7 s) and the pitch section (12.8 s)
- audio: the trailer's own track, `volume=-1.5dB`, fade-out at 25.2 s, padded to 31.5 s
- output: `libx264 -crf 18 -profile:v high -level 4.1 -pix_fmt yuv420p -r 30`,
  `aac 192k 48kHz stereo`, `+faststart`

Technical check of the render:

```
duration 31.500000
video    h264 High, 1080x1920, yuv420p, 30/1 fps, ~6.7 Mb/s
audio    aac LC, 48000 Hz, 2 channels, ~162 kb/s
size     27,009,211 bytes
```

## Why it meets the bounty

- Vertical **9:16, 1080×1920**, **31.5 s** (inside 30–45 s), **H.264**, public-Short length.
- Opens with the GTA 6 moment as the hook; one continuous stretch of the trailer, not a
  grab bag from unrelated videos.
- The clip itself promotes make.fun: it names **make.fun**, says **you can make clips like
  this with AI and earn money on make.fun**, and shows **make.fun/bounty/gta6-clipper-01**.
- Original trailer audio retained.
- Repository: `main.ts` copies `VIDEO.json` from the repo root to the output directory and
  prints nothing on success; `VIDEO.json`, this README, an MIT `LICENSE`, and the
  make.fun anchor history (`makefun anchor f5106d53b165e2a6385995154b2b9de6c4c5ff98
  round 34121341`) are all present.

## Publish plan

The clip is handed to the account owner to upload; nothing here uploads or submits it.

1. Upload `gta6-clip-short.mp4` to YouTube as a **Public** video (not unlisted, not
   private). A vertical clip under 60 s is automatically a Short.
2. Suggested title:
   `GTA 6 but an AI agent cut it (Vice City in 31 seconds) #GTA6 #Shorts`
3. Description — paste this line verbatim, then the play code:

   ```
   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
   Play code: makefun-daybreak-squash-raven
   ```

   Optional tags: `#GTA6 #GTAVI #ViceCity #Rockstar #Shorts #AI #makefun`
4. Publish between the opening (`2026-11-20T01:00:00Z`) and the deadline
   (`2026-11-23T01:00:00Z`), and keep it public until the results are out.
5. Copy the Shorts address from YouTube's Share button and replace the placeholder in
   `VIDEO.json`:

   ```json
   {"url": "https://www.youtube.com/shorts/<id>"}
   ```

6. Bundle the agent transcripts, run the kit's `check`, and submit the final commit from
   the kit directory. The submission step is the account owner's.

## Repository files

- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` from `MAKEFUN_BOT_DIR`
  (default `/bot`) to `MAKEFUN_OUTPUT_DIR` (default `/output`) and exits 0 silently.
- `VIDEO.json` — the video address. It points to the published Short: https://www.youtube.com/shorts/vt2c6QnmkUw
- `README.md` — this document.
- `LICENSE` — MIT, committed by `makefun init`.
- `.makefun/freshness.json` — the drand freshness record from `makefun init`.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cmp VIDEO.json out/VIDEO.json
```

`out/` is scratch and is not committed.

## Attribution and licence

The footage and audio are from **Grand Theft Auto VI Trailer 2**, © Rockstar Games /
Take-Two Interactive. This is a fan-made, transformative short made for the make.fun
bounty; the trailer material remains Rockstar's. The MIT licence covers the code in this
repository, not the trailer footage.
