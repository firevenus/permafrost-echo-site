import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getArticleBySlug } from '@/lib/articles-data';
import MarkdownContent from '@/components/MarkdownContent';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

export const runtime = 'edge';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} | Permafrost Echo`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations();
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    return (
      <div className="page-container py-20 text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h1 className="text-xl font-bold text-[#e8edf5] mb-2">{t('common.pageNotFound')}</h1>
        <Link href="/articles" className="text-[#4cc9f0] text-sm hover:underline">
          {t('articles.backToList')}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Article Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="page-container relative py-16">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-[rgba(232,237,245,0.45)] hover:text-[#4cc9f0] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            {t('articles.backToList')}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-[#e8edf5] mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[rgba(232,237,245,0.4)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {article.date}
            </span>
            {article.author && (
              <span>{t('articles.author')}: {article.author}</span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="page-section">
        <div className="page-container">
          <article className="max-w-[800px] mx-auto glass-card p-8 md:p-12 article-content">
            <MarkdownContent content={article.content} />
          </article>
        </div>
      </section>
    </div>
  );
}
