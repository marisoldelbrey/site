import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The Writing collection. Every .md file in src/content/writing becomes a post.
// The URL slug comes from the file name, so `first-post.md` is /writing/first-post/.
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Set to true to keep a post out of the list and out of the sitemap.
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
