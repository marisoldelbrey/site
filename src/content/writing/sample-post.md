---
title: 'Sample post: how this blog works'
description: 'Placeholder post that shows the formatting and explains how to add a new one.'
pubDate: 2026-08-04
draft: false
---

**This entire post is placeholder copy.** It exists to show what the formatting
looks like and to explain how to publish a real one. Delete it once you have a
post of your own.

## How to add a post

Create a new `.md` file in `src/content/writing/`. The file name becomes the
web address, so `running-a-pmo.md` publishes at `/writing/running-a-pmo/`.

Every post needs the block at the top of this file, between the two lines of
three dashes. That block is called frontmatter. Four fields matter:

- `title` is the headline, shown on the page and in the browser tab.
- `description` is one sentence. It shows in the post list and in link previews.
- `pubDate` is the publish date, written as `YYYY-MM-DD`.
- `draft` set to `true` hides the post from the site. Set it to `false` to publish.

Save the file and it appears in the list at `/writing/`. There is no separate
publish step beyond deploying the site.

## What the formatting looks like

Regular paragraphs look like this one. Keep them short. Two to four sentences
reads better on a phone than one long block.

You can use **bold text**, *italics*, and [links to other pages](/about/).

### Smaller headings work too

Numbered lists are available when order matters:

1. First step
2. Second step
3. Third step

> Block quotes get an accent rule down the left side. Useful for pulling out a
> line from something you read.

Inline `code` is available, which is handy when you are naming a tool or a
setting.

## Placeholder closing

[Placeholder: end a real post with the practical takeaway, in one or two
sentences.]
