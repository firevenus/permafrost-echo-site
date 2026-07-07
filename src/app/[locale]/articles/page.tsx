import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getArticles } from '@/lib/articles';
import { Calendar, ArrowRight } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const articles = getArticles(locale);

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(76,201,240,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="page-container relative py-20 text-center">
          <h1 className="hero-title mb-4">
            <span className="gradient-text">{t('articles.title')}</span>
          </h1>
          <p className="text-[rgba(232,237,245,0.45)] text-lg max-w-[480px] mx-auto">
            {t('articles.description')}
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="page-section">
        <div className="page-container">
          {articles.length > 0 ? (
            <div className="max-w-[800px] mx-auto space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="glass-card p-6 game-card no-underline flex flex-col sm:flex-row gap-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-xs text-[rgba(232,237,245,0.35)] mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>
                      {article.author && <span>{t('articles.author')}: {article.author}</span>}
                    </div>

                    <h2 className="text-lg font-semibold text-[#e8edf5] mb-2 hover:text-[#4cc9f0] transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-sm text-[rgba(232,237,245,0.45)] line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {article.tags.map((tag) => (
                        <span key={tag} className="pill text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center justify-center text-[#4cc9f0] flex-shrink-0">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-[rgba(232,237,245,0.35)]">{t('articles.noArticles')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
