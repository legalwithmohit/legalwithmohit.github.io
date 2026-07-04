import type { CollectionEntry } from 'astro:content';

const WORDS_PER_MINUTE = 200;

/** Estimates reading time from raw markdown body length. */
export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/**
 * Returns related articles for a given entry: manually curated `relatedSlugs`
 * take priority, falling back to other published articles in the same
 * category, most recent first.
 */
export function getRelatedArticles(
  current: CollectionEntry<'articles'>,
  all: CollectionEntry<'articles'>[],
  limit = 3
): CollectionEntry<'articles'>[] {
  const published = all.filter((a) => !a.data.draft && a.slug !== current.slug);

  if (current.data.relatedSlugs?.length) {
    const bySlug = new Map(published.map((a) => [a.slug, a]));
    const curated = current.data.relatedSlugs
      .map((slug) => bySlug.get(slug))
      .filter((a): a is CollectionEntry<'articles'> => Boolean(a));
    if (curated.length) return curated.slice(0, limit);
  }

  return published
    .filter((a) => a.data.category === current.data.category)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
    .slice(0, limit);
}

export function sortByDateDesc(
  articles: CollectionEntry<'articles'>[]
): CollectionEntry<'articles'>[] {
  return [...articles].sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
}

export function formatDate(date: Date, locale = 'en-IN'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
