---
title: "I built my personal website with Claude Code instead of Squarespace. Here's what actually happened."
description: "I started this process thinking I'd reactivate my Squarespace trial and be done in an afternoon. Then my free trial expired."
pubDate: 2026-08-05
draft: false
---

I started this process thinking I'd just reactivate my Squarespace trial and be
done in an afternoon. My domain was already purchased, the brand direction was
clear, and I had a spec ready. Then my free trial expired.

![The finished marisoldelbrey.com homepage in a browser, with the site name and
navigation above a large serif headline reading "I build the operating systems
behind professional services firms, combining PMO discipline with automation and
AI that people actually use," a See the work button, a Get in touch button, and a
portrait photo alongside.](/images/blog-homepage.png)

I had two options: pay for a Squarespace plan, or build the site myself and just
point the domain at it for free. Given that my whole professional brand is built
around automation and AI, it felt wrong to pay $275 a year for a template when I
could just build the thing.

So I did.

I'd never used Claude Code before. I'd never cloned a GitHub repo. I didn't know
what PowerShell was for beyond running the occasional work script. What I did
know was how to give a clear brief and debug what comes back, which turns out to
be most of the job.

The full stack ended up being Astro for the site, GitHub for version control, and
Cloudflare Pages for hosting. Total cost: $0 beyond the domain I already owned.
Claude Code scaffolded 24 files in one session, including the color system,
typography, five pages, a markdown blog, SEO meta tags, and a sitemap. I fed it a
brand spec and it built to it.

It wasn't frictionless. Git wasn't installed. Node wasn't installed. PowerShell
had a script execution policy blocking npm. The Cloudflare build skipped the
build command the first time because I hadn't set it. Each one of those was a
five-minute fix once I knew what it was, but I didn't always know what it was.

![A Windows PowerShell window showing a run of git commands from the site project
folder: git add, git commit with a message, and git push origin main, including a
warning about LF line endings being replaced by CRLF and a successful push to the
GitHub repository.](/images/blog-terminal.png)

What actually surprised me: the hardest part wasn't the technical setup. It was
the copy. Claude Code can scaffold a site in an hour. It cannot tell you what to
say about yourself. That took longer, required more honest self-reflection, and
is still not fully done.

The site is live at marisoldelbrey.com. The Work page says coming soon. The
Writing page now has this post on it. Both of those things will change.

If you're a professional who builds things for a living and you've been putting
off your own site because it feels like a big project, it's not. The tools exist.
The harder question is what you actually want to say.
