import { defineCollection, z } from 'astro:content';
import { PRACTICE_AREAS } from '@/site.config';

const categoryValues = PRACTICE_AREAS.map((p) => p.title) as [string, ...string[]];

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.enum(categoryValues),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Arjun Mehta'),
    draft: z.boolean().default(false),
    // Optional per-article FAQ block, rendered at the end of the article
    // and also emitted as FAQPage structured data for SEO.
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
    // Manually curated related-article slugs. Falls back to "same category"
    // if omitted — see src/lib/articles.ts.
    relatedSlugs: z.array(z.string()).optional(),
    seoKeywords: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
