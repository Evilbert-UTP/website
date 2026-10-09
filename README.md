# The Untitled Project — website

Portfolio site for Bert Moss: **https://theuntitledproject.com**

Plain HTML/CSS/JS, hosted free on GitHub Pages. No build step.

## Editing
- **Content** (projects, bio, AI pieces, client list, contact) lives in `content.js`. Each section has instructions in comments.
- Changes go live 1–2 minutes after they're committed to `main`.
- After any change, bump the `?v=` number on the CSS/JS links in `index.html` so browsers fetch the new files.
- Keep the `CNAME` file — it connects the site to theuntitledproject.com.

## Videos
- Vimeo: `vimeo: "123456789"` (the number at the end of the Vimeo link).
- Bunny Stream: `bunny: "774281/<video-id>"` (the two parts after `/play/` in the Bunny link). A custom Bunny thumbnail gets a new file name — put it in `thumb:`.

See `CLAUDE.md` for the full technical notes.
