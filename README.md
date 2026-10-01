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

### 2. Move the domain off Wix
1. **Before anything else, find out where your email lives.** In Wix → Domains → theuntitledproject.com → DNS records, screenshot every record, especially the **MX** and **TXT** ones (Google Workspace, Microsoft 365, etc.). Wix says business email stops working after a transfer until the MX records are added again.
2. In Cloudflare: **Add a site → theuntitledproject.com (Free plan)**. Cloudflare imports existing DNS records. Check them against your screenshots and add any that are missing.
3. In Wix: Domains → ⋯ → **Transfer away from Wix**. Wix emails you an authorization (EPP) code. (Not possible within 60 days of buying the domain or changing the owner contact info.)
4. In Cloudflare: **Domain Registration → Transfer Domains**, paste the code, pay for 1 year (about $10.44; the year is added to your current expiry date).
5. Once the transfer completes (up to 7 days): Cloudflare Pages → your project → **Custom domains** → add `theuntitledproject.com` and `www.theuntitledproject.com`.
6. Send yourself an email to confirm mail still works. **Only then** cancel the Wix premium plan.

## Video notes
- The hero background loop and the hover previews use Vimeo's *background* player mode, which needs a paid Vimeo plan. On a free plan those parts quietly fall back to the still thumbnail, and the click-to-play lightbox still works.
- To skip that dependency, export a short silent loop (720p, under ~10 MB), drop it in `media/`, and set `reelLoop: "media/reel-loop.mp4"` (or `loop:` on a project).
- In Vimeo, set each video's privacy/embed setting to allow embedding on `theuntitledproject.com`.
- **Square × Area15** currently lives only on Wix. Download it, upload it to Vimeo, and enable it in `content.js` (instructions are in the file).
