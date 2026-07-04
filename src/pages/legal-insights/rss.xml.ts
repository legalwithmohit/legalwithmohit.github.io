import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@/site.config';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const base = import.meta.env.BASE_URL;

  return rss({
    title: `${SITE.name} — Legal Insights`,
    description: SITE.description,
    site: context.site ?? 'https://example.github.io',
    items: articles
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.publishDate,
        link: `${base}legal-insights/${article.slug}/`,
        categories: [article.data.category],
        author: article.data.author,
      })),
    customData: `<language>en-in</language>`,
  });
}
