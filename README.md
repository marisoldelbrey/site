# marisoldelbrey.com

Personal site built with [Astro](https://astro.build), deployed as a static site
to Cloudflare Pages.

Five pages: Home, About, Work, Writing (markdown blog), Contact.

> **All body copy on this site is placeholder.** Draft text is wrapped in a
> `.placeholder` box with a dashed accent rule and a "Placeholder copy" tag so
> it is obvious on screen. Search the project for `Placeholder` to find every
> spot that still needs real words.

---

## 1. What you need installed

| Tool | Version | Check it | Where to get it |
|---|---|---|---|
| Node.js | 20 or newer (22 LTS recommended) | `node --version` | https://nodejs.org (download the Windows LTS installer) |
| npm | comes with Node | `npm --version` | included with Node |
| Git | any recent version | `git --version` | https://git-scm.com/download/win |

Run the check commands in PowerShell. If a command prints a version number, you
are set. If you get "The term 'node' is not recognized", Node is not installed
or not on your PATH.

**Installing Node on Windows:** download the LTS installer from nodejs.org, run
it, accept the defaults, then **close and reopen PowerShell** before checking
the version again. A new terminal is required for the PATH change to take
effect.

---

## 2. Run the site on your computer

From this folder in PowerShell:

```powershell
npm install
npm run dev
```

`npm install` downloads the dependencies into a `node_modules` folder. It only
needs to be run once, and again any time the dependencies change.

`npm run dev` starts a local preview server and prints an address, usually
`http://localhost:4321`. Open it in your browser. Edits to files save and
refresh automatically. Press `Ctrl+C` in PowerShell to stop the server.

### Other commands

```powershell
npm run build     # build the production site into dist/
npm run preview   # serve the built dist/ folder, to check the real output
```

---

## 3. Where things live

```
public/                     files copied to the site as-is
  favicon.svg               browser tab icon
  hero-placeholder.svg      replace with a real hero image
  robots.txt                search engine instructions
src/
  consts.ts                 site title, description, nav links, OG image path
  content.config.ts         defines the Writing collection and its fields
  styles/global.css         colors, type, spacing, shared components
  components/
    BaseHead.astro          SEO meta, Open Graph, Twitter card, font loading
    Header.astro            wordmark and navigation
    Footer.astro
    FormattedDate.astro
  layouts/
    BaseLayout.astro        the page shell every page uses
  pages/
    index.astro             Home
    about.astro             About
    work.astro              Work
    contact.astro           Contact
    404.astro               not found page
    writing/
      index.astro           post list
      [...slug].astro       template for a single post
  content/
    writing/
      sample-post.md        sample post, safe to delete
astro.config.mjs            site URL and the sitemap integration
```

### Colors and type

Both are defined once, at the top of `src/styles/global.css`.

| Token | Value | Used for |
|---|---|---|
| `--color-base` | `#F6F2EC` | page background |
| `--color-ink` | `#16202E` | body text, buttons |
| `--color-accent` | `#B4763B` | links, rules, emphasis |
| `--color-warm-grey` | `#8C8579` | secondary text, labels |

Headings use Fraunces, a display serif. Body text is Inter at 17px with a line
height of 1.6. Both fonts are self-hosted through `@fontsource-variable`, which
means they are served from your own domain. No request goes to Google Fonts.

### Adding a blog post

Create a `.md` file in `src/content/writing/`. The file name becomes the URL.
Copy the frontmatter block from `sample-post.md`. See that post for the full
explanation.

---

## 4. Before you launch

- [ ] Replace all placeholder copy. Search the project for `Placeholder`.
- [ ] Replace `public/hero-placeholder.svg` with a real image, and update the
      `src` in `src/pages/index.astro`.
- [ ] Add `public/og-default.png` at 1200 x 630 pixels. This is the image that
      shows when someone shares a link on LinkedIn or in Slack. It is referenced
      in `src/consts.ts` but the file does not exist yet.
- [ ] Confirm the contact email in `src/pages/contact.astro`. The address there
      is a guess, not a real one.
- [ ] Add the LinkedIn URL in `src/pages/contact.astro`.
- [ ] Delete `src/content/writing/sample-post.md` once you have a real post.
- [ ] Remove the `.placeholder` and `.placeholder-tag` rules from
      `src/styles/global.css` after the last placeholder is gone.

---

## 5. Deploy to Cloudflare Pages

### 5a. Push the code to GitHub

If this folder is not a git repository yet:

```powershell
git init
git branch -M main
```

Then, whether it is new or not:

```powershell
git add .
git commit -m "Initial site"
```

Create an empty repository on GitHub (no README, no .gitignore), then connect
and push:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 5b. Connect Cloudflare Pages

1. Sign in at https://dash.cloudflare.com and create a free account if needed.
2. Go to **Compute (Workers and Pages)** in the left sidebar.
3. Click **Create**, then the **Pages** tab, then **Connect to Git**.
4. Authorize GitHub and pick your repository.
5. Set the build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | leave blank |

6. Click **Save and Deploy**.

The first build takes a couple of minutes. When it finishes you get a working
address like `marisoldelbrey-site.pages.dev`. Check the site there before
pointing your domain at it.

From this point on, every `git push` to `main` triggers a new deploy
automatically. There is nothing else to run.

---

## 6. DNS: pointing marisoldelbrey.com at the site

Your domain is registered at Squarespace. There are two ways to do this. Read
both before you start, then pick one.

### Option A: move DNS to Cloudflare (recommended)

This is the option Cloudflare supports properly, and the one that makes
`marisoldelbrey.com` work without `www` in front of it. The domain stays
registered and paid for at Squarespace. Only the DNS hosting moves.

**Why this is needed:** a bare domain like `marisoldelbrey.com` cannot normally
point at a service name like `yoursite.pages.dev`. That requires a CNAME record
at the root of the domain, which standard DNS does not allow and Squarespace
does not support. Cloudflare has a feature called CNAME flattening that solves
this, but it only works when Cloudflare is hosting your DNS.

**Steps:**

1. In the Cloudflare dashboard, click **Add a domain**, enter
   `marisoldelbrey.com`, and choose the **Free** plan.
2. Cloudflare scans your current DNS and shows you the records it found.
   **Look carefully at this list before continuing.** If there are `MX` records
   (email) or `TXT` records (domain verification, SPF, DKIM), make sure they
   carried over. If you have email on this domain and these records are missing,
   your email will stop working when you switch. Add anything missing by hand.
3. Cloudflare shows you **two nameservers** assigned to your account. They look
   like `xxxx.ns.cloudflare.com` and `yyyy.ns.cloudflare.com`, where the first
   part is a word unique to you. Copy both exactly.
4. In Squarespace: **Domains**, select `marisoldelbrey.com`, then
   **DNS** or **Nameservers**. Choose **Use custom nameservers** and replace
   what is there with the two Cloudflare nameservers. Save.
5. Back in Cloudflare, click **Check nameservers**. The change usually takes 15
   minutes to a few hours. Cloudflare emails you when the domain is active.
6. Once active, go to your Pages project, then **Custom domains**, then
   **Set up a custom domain**. Add `marisoldelbrey.com`. Then add
   `www.marisoldelbrey.com` as a second custom domain.

Cloudflare creates both DNS records for you. You should not need to add them by
hand, but this is what they are, so you can confirm them under **DNS** in the
Cloudflare dashboard:

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `marisoldelbrey.com` (shown as `@`) | `YOUR-PROJECT.pages.dev` | Proxied (orange cloud) |
| CNAME | `www` | `YOUR-PROJECT.pages.dev` | Proxied (orange cloud) |

Replace `YOUR-PROJECT.pages.dev` with the actual address from your Pages
project. The proxy must be on (orange cloud) for the root domain record to work.

HTTPS is issued automatically and is free. Give it a few minutes after the
domain goes active.

### Option B: keep DNS at Squarespace

Choose this if you do not want to move nameservers. The tradeoff is that the
real site lives at `www.marisoldelbrey.com`, and the bare domain has to forward
to it. A forward is a redirect, not the site itself.

**Record to add in Squarespace** (Domains, select the domain, then **DNS**, then
**Add record**):

| Type | Host | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `YOUR-PROJECT.pages.dev` | leave default (or 3600) |

Notes on filling that in:

- **Host** is just `www`. Squarespace adds the domain part for you. Do not type
  `www.marisoldelbrey.com`.
- **Value** is your Pages address with no `https://` and no trailing slash.
  Example shape: `marisoldelbrey-site.pages.dev`.
- Delete any existing `A` or `CNAME` records for `www` that point at Squarespace
  first, or the new one will conflict.

**Then handle the bare domain.** In Squarespace, under the domain's settings,
find **Forwarding** and forward `marisoldelbrey.com` to
`https://www.marisoldelbrey.com`. Use a permanent (301) forward.

**Then in Cloudflare Pages**, add `www.marisoldelbrey.com` under **Custom
domains**. Cloudflare verifies the CNAME and issues the certificate. Do not add
the bare domain here under this option, because the DNS record it needs cannot
be created at Squarespace.

### Checking that it worked

After DNS has had time to update, in PowerShell:

```powershell
nslookup www.marisoldelbrey.com
nslookup marisoldelbrey.com
```

DNS changes can take up to 48 hours to reach everyone, though it is usually much
faster. If the old site still shows in your browser after the lookup returns the
new answer, try a private window. Browsers cache aggressively.

---

## 7. Making changes later

1. Edit files in this folder.
2. Run `npm run dev` to check the result locally.
3. When it looks right:

```powershell
git add .
git commit -m "Describe what changed"
git push
```

Cloudflare builds and publishes within a minute or two. You can watch the
progress in the Pages dashboard under **Deployments**.
