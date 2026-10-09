# CLAUDE.md — theuntitledproject.com

Context for Claude sessions working on this repo. Read this first.
**This repo is public.** Never commit private information (client contracts, licence correspondence, keys, personal details beyond what the site already shows).

## What this is
Portfolio site for **Bert Moss / The Untitled Project** — NYC (Brooklyn) video editor, motion graphics artist and director, 20+ years in advertising, now also doing generative AI production.
- Live: **https://theuntitledproject.com** (moved off Wix, Oct 2026)
- Hosting: **GitHub Pages**, branch `main`, folder `/ (root)`, custom domain via the `CNAME` file. **Never delete `CNAME`.**
- Domain + DNS: **Namecheap** (BasicDNS). A records `@` → 185.199.108.153 / .109.153 / .110.153 / .111.153; CNAME `www` → `evilbert-utp.github.io`. Email is Google Workspace (Gmail MX, SPF, DKIM `google._domainkey`, DMARC `p=none`). Don't touch DNS without Bert.
- Plain HTML/CSS/JS. No build step, no framework, no dependencies.

## Files
| File | Purpose |
|---|---|
| `content.js` | **All content**: `window.SITE` (name, roles, cycle words, reel, bio, capabilities, software, clients, contact), `window.AI` (AI section copy), `window.AI_PROJECTS`, `window.CATEGORIES`, `window.PROJECTS` |
| `index.html` | Structure, meta/link-preview tags |
| `styles.css` | All styling (later rules at the bottom override earlier ones) |
| `app.js` | Behaviour: rendering, word cycle, video previews, lightbox, filters, nav, mobile menu |
| `og-image.jpg` | 1200×630 link-preview card (iMessage/Slack/LinkedIn) |
| `apple-touch-icon.png`, `favicon.svg` | Icons |
| `media/` | Optional self-hosted loops/thumbnails |

## Release rules (important)
1. **Cache-busting:** `index.html` loads `styles.css?v=N`, `content.js?v=N`, `app.js?v=N`, and the og-image with `?v=N`. **Bump N on every change** (current: **16**). Without this, Safari/iPhones keep old JS/CSS and features look broken.
2. Link-preview tags (`og:url`, `og:image`, `twitter:image`) must be absolute `https://theuntitledproject.com/...` URLs.
3. After a change, check **desktop (1440px), laptop (1024px) and phone (390px)** — Bert mostly reviews on his iPhone in Safari. Playwright/Chromium is a good stand-in; mention that real Safari wasn't tested.
4. Keep commits small with plain-English messages. GitHub Pages republishes in ~1–2 minutes.

## Design system (matches Bert's 2026 resume)
- Colours: ink `#1e1b18`, paper `#faf8f3`, orange `#ef7d1e`, tint `#fdf0dd`; small orange text on light backgrounds uses `#b4570a` for contrast.
- Fonts: **Archivo** (variable width, heavy, uppercase display) + **Space Mono** (labels), from Google Fonts.
- Section order: Hero (dark) → client marquee (orange band, slanted) → Selected Work (cream) → AI Lab (dark) → About (cream) → Contact (orange) → footer.
- **Hero:** outlined "BERT MOSS" at top; below it orange cycling words from `SITE.cycle` — currently Video editing / Motion graphics / AI generation / VFX / Directing / Production management. **No full stops.** Size is `.56em` of the hero title; the block reserves two lines and aligns words to the top so the page doesn't jump. Long single words auto-shrink to fit. Demo reel plays muted in the background (Vimeo background mode); on phones it's a 16:9 band just under the menu bar.
- **Nav:** Home, Work, AI (pill), About, Clients, Contact. Text colour flips dark/light depending on the section behind it (`.on-light`). "Clients" scrolls the marquee to screen centre; Home/logo scroll to top. On phones (≤640px) a **Menu** button opens a full-screen orange overlay.
- Contact title "LET'S MAKE SOMETHING" is sized to never crop (`clamp(40px, 8.5vw, 150px)`).
- About: bio (2 paragraphs from the resume), Craft chips, Software chips. No stats row (Bert removed it; `SITE.stats` is empty).

## Video hosting
- **Vimeo**: main work grid + demo reel (`vimeo: "ID"`). Thumbnails via Vimeo oEmbed.
- **Bunny Stream** (moving here over time): library **774281**, CDN host **`vz-151c3d5c-1a7.b-cdn.net`** (`SITE.bunnyCdn`). Use `bunny: "774281/<video-id>"` (the two parts after `/play/` in a Bunny link). Player: `player.mediadelivery.net/embed/...`. Hover preview uses Bunny's `preview.webp`.
- **Custom Bunny thumbnails get a new filename each time** (e.g. `thumbnail_79ec2282.jpg`). Set it in the project's `thumb:` field. Find it in the page source of `player.mediadelivery.net/embed/774281/<id>`.
- Bunny library currently allows all domains.

## AI section rules
- Every item in `AI_PROJECTS` is automatically labelled **AI-generated** (card + player). Keep that.
- **Don't display per-piece tools** — Bert prefers to discuss them in person. Leave `tools: []`. The general toolkit row in the section intro stays.
- Before adding an AI piece, ask Bert which models were used and remind him to check that model's licence allows public, worldwide display (some licences restrict territories or require an AI label).
- Spec work using a real brand gets a disclaimer in the blurb, e.g. "Spec spot … Not commissioned or endorsed by <brand>."
- Current pieces: "Your Thing" (Pfizer spec) and "Mr Bowlingball Head" (Personal).

## Working with Bert
- Freelance editor, not a developer: give plain-English summaries, short and practical. Explain *where to click* for anything he has to do himself (GitHub, Namecheap, Bunny).
- He reviews on his phone; flag anything that might look different in Safari.
- Written documents for him (not code) as Word .docx files.

## Open items
- **Square × Area15** spot (Square payments + Area15, with The Gig Media) only existed on Wix — needs re-uploading to Bunny before it can be added (commented out at the bottom of `content.js`).
- Review DMARC reports after a few weeks; if only spoofers fail, move DMARC to `p=quarantine` (DNS change at Namecheap, with Bert).
