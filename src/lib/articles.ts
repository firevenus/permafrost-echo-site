import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getLocale } from 'next-intl/server';

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags: string[];
  author?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content');

export function getArticles(locale: string): ArticleMeta[] {
  const dir = path.join(articlesDirectory, locale, 'articles');

  if (!fs.existsSync(dir)) {
    return [];
  }

  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  const articles = filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: typeof data.date === 'object' ? data.date.toISOString().split('T')[0] : (data.date || ''),
        excerpt: data.excerpt || '',
        cover: data.cover || undefined,
        tags: data.tags || [],
        author: data.author || undefined,
      } as ArticleMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return articles;
}

export function getArticleBySlug(locale: string, slug: string): Article | null {
  const filePath = path.join(articlesDirectory, locale, 'articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: typeof data.date === 'object' ? data.date.toISOString().split('T')[0] : (data.date || ''),
    excerpt: data.excerpt || '',
    cover: data.cover || undefined,
    tags: data.tags || [],
    author: data.author || undefined,
    content,
  };
}

export function getAllArticleSlugs(locale: string): string[] {
  const dir = path.join(articlesDirectory, locale, 'articles');

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getArticlesForLocale(): Promise<ArticleMeta[]> {
  const locale = await getLocale();
  return getArticles(locale);
}

export async function getArticleBySlugForLocale(slug: string): Promise<Article | null> {
  const locale = await getLocale();
  return getArticleBySlug(locale, slug);
}
