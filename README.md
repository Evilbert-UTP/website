# The Untitled Project — website

A plain HTML/CSS/JS site. No build tools, no database, no monthly fee.

| File | What it is |
|---|---|
| `content.js` | **Everything you edit**: bio, contact info, reel, projects |
| `index.html` / `styles.css` / `app.js` | Page structure, look, and behaviour |
| `media/` | Optional short .mp4 loops or custom thumbnails |

## Preview on your Mac
Double-click `index.html`. Thumbnails and video load from Vimeo once you're online.

## Adding or changing a project
Open `content.js`, copy a `{ ... }` block, paste it at the top of `PROJECTS`, change the title, client, Vimeo number, tags and blurb. Save. If the site is on GitHub, edit the file right on github.com and click **Commit changes**. Cloudflare republishes it in about a minute.

## Hosting setup (one time, about 30 min plus waiting for the domain transfer)

### 1. Put the site on Cloudflare Pages (free)
1. Create a free account at github.com, make a new **private** repository called `website`, and upload all these files ("Add file → Upload files").
2. Create a free account at dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git** → pick the `website` repo.
3. Build settings: Framework preset **None**, build command **blank**, output directory **/**. Deploy.
4. You get a free `website-xxx.pages.dev` address. Check everything there before touching the domain.

*(No GitHub? In step 2, choose **Upload assets** and drag in the folder instead. You'd re-upload the folder after each edit.)*

### 2. Move the domain off Wix (via Namecheap)
Wix won't let you change nameservers on a domain it registered, and Cloudflare can only accept a transfer once Cloudflare's nameservers are set. So the domain goes to an intermediate registrar first (Namecheap here). The site can go live as soon as that transfer lands. You don't have to wait the 60 days.

1. **Save your email settings first.** In Wix → Domains → theuntitledproject.com → DNS records, screenshot every record, especially **MX** and **TXT** (Google Workspace, Microsoft 365, etc.). Business email stops working after the transfer until those records are added back.
2. In Wix: Domains → ⋯ → **Transfer away from Wix**. Wix emails you an authorization (EPP) code.
3. At namecheap.com: **Domains → Transfer**, enter the domain and the code, and pay (about $11.48; this adds a year to the expiry date). Approve any confirmation email. The transfer takes up to ~7 days. WHOIS privacy is free; make sure it's on.
4. In Cloudflare: **Add a site → theuntitledproject.com (Free plan)**. Check the imported DNS records against your screenshots and add any missing MX/TXT records. Cloudflare shows you two nameservers.
5. At Namecheap: **Domain List → Manage → Nameservers → Custom DNS** → enter Cloudflare's two nameservers and click the green ✓. Leave Namecheap's own DNS records alone; Cloudflare now handles DNS. Wait until Cloudflare shows the site as **Active** (usually minutes to a few hours).
6. Cloudflare Pages → your project → **Custom domains** → add `theuntitledproject.com` and `www.theuntitledproject.com`. **The site is now live.**
7. Send yourself an email to confirm mail still works. **Only then** cancel the Wix premium plan.
8. *(Recommended, after 60 days)* Move the registration from Namecheap to Cloudflare Registrar: Namecheap → **Manage → Sharing & Transfer** → unlock and get the auth code; Cloudflare → **Domain Registration → Transfer Domains**. This changes only where you pay the renewal. Nameservers and the site stay the same, so there's no downtime. Namecheap renews .com at about $18.48/yr versus about $10.44 at Cloudflare. Staying on Namecheap is fine too; it just costs about $8 more a year.

## Email (Google Workspace): moving it without losing mail
Current DNS, checked 2026-10-01: nameservers `ns12/ns13.wixdns.net`. MX = Google (`aspmx.l.google.com` priority 1; `alt1`/`alt2` priority 5; `alt3`/`alt4` priority 10). **No SPF, DKIM or DMARC records.**

**Now, while still on Wix (also improves deliverability):**
1. Google Admin → Apps → Google Workspace → Gmail → **Authenticate email** → generate a DKIM key (2048-bit). Copy the `google._domainkey` TXT value.
2. In Wix DNS, add these TXT records:
   - `@` → `v=spf1 include:_spf.google.com ~all`
   - `google._domainkey` → (DKIM value from step 1), then click **Start authentication** in Google Admin
   - `_dmarc` → `v=DMARC1; p=none; rua=mailto:bert@theuntitledproject.com`
3. In Namecheap → **FreeDNS** → add `theuntitledproject.com` and pre-enter the same records: Google MX (or Mail Settings → **Gmail**), SPF, DKIM, DMARC, plus the website records. That way nothing has to be typed under pressure later.

**Transfer day:**
4. Start the transfer at a quiet time (e.g., Friday evening). The domain keeps pointing at Wix's nameservers during the transfer.
5. As soon as Namecheap emails that the transfer is complete: Domain List → Manage → Nameservers → **Namecheap BasicDNS**. The FreeDNS records carry over.
6. Check at dns.google (MX lookup) that Google's MX records come back. Send a test email from an outside account (e.g., a personal Gmail).

**Worst case:** if Wix stops answering for the domain before every server sees the new nameservers, incoming mail is **delayed, not lost**. Sending servers treat a DNS failure as temporary and retry for several days. Sending mail, reading mail, and the Gmail app keep working the whole time.

## AI Lab section
- Intro text, tool list and the three "how I work" points live in `window.AI` in `content.js`.
- Add AI pieces to `window.AI_PROJECTS` (same fields as projects, plus `tools`). Each one is automatically labelled **AI-generated** on its card and in the player.
- While the list is empty, the section shows a "get in touch" box instead of a grid.
- Before posting a piece, check the model's licence allows public display. Some require an AI label, and some only allow certain countries.

## Bunny Stream videos
- For a Bunny video, use `bunny: "LIBRARY_ID/VIDEO_ID"` (the two parts after `/play/` in the Bunny link) in place of `vimeo:`.
- `bunnyCdn` in `content.js` is the library's CDN hostname; the site uses it for thumbnails and the animated hover preview.
- In Bunny → your Stream library → **Security**, add `theuntitledproject.com`, `www.theuntitledproject.com` and your `….pages.dev` address to the allowed domains. If those are missing, thumbnails and the player are blocked on the site.

## Link previews (iMessage, Slack, LinkedIn)
- The preview card is `og-image.jpg` (1200×630). The tags pointing to it are at the top of `index.html`.
- **When the site moves to theuntitledproject.com**, change `https://evilbert-utp.github.io/website/` to `https://theuntitledproject.com/` in the three `og:url` / `og:image` / `twitter:image` lines.
- Phones remember previews per link. To see a new preview, send the link with something new on the end, e.g. `?v=14`.

## Video notes
- The hero background loop and the hover previews use Vimeo's *background* player mode, which needs a paid Vimeo plan. On a free plan those parts quietly fall back to the still thumbnail, and the click-to-play lightbox still works.
- To skip that dependency, export a short silent loop (720p, under ~10 MB), drop it in `media/`, and set `reelLoop: "media/reel-loop.mp4"` (or `loop:` on a project).
- In Vimeo, set each video's privacy/embed setting to allow embedding on `theuntitledproject.com`.
- **Square × Area15** currently lives only on Wix. Download it, upload it to Vimeo, and enable it in `content.js` (instructions are in the file).
