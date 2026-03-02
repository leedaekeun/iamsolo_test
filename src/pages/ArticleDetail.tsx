import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { articles } from '../data/articles';
import { useSEO } from '../lib/useSEO';

export const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();

    const article = articles.find((a) => a.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return <Navigate to="/articles" replace />;
    }

    const currentLang = i18n.language.split('-')[0];

    const getLocalizedField = (articleField: string) => {
        const langKey = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
        // @ts-ignore
        return article[`${articleField}${langKey}`] || article[`${articleField}Ko`];
    };

    const title = getLocalizedField('title');
    const description = getLocalizedField('desc');
    const content = getLocalizedField('content');

    useSEO({
        title: `${title} | ${t('articles.header')}`,
        description: description,
        image: article.thumbnail,
    });

    // Recommended articles (exclude current)
    const recommended = articles.filter(a => a.id !== id).slice(0, 3);

    return (
        <div className="min-h-screen bg-white pb-20 pt-24">
            <div className="max-w-3xl mx-auto px-6 py-8">
                <Link
                    to="/articles"
                    className="inline-flex items-center text-vibrant-pink hover:text-deep-charcoal transition-colors mb-8 font-medium"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t('articles.backToList')}
                </Link>

                <header className="mb-10 text-center">
                    <div className="text-sm text-gray-500 font-medium mb-3">{article.date}</div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-deep-charcoal mb-6 leading-tight break-keep">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto break-keep">
                        {description}
                    </p>
                    <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <img
                            src={article.thumbnail}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                <article
                    className="prose prose-lg md:prose-xl max-w-none text-gray-800 break-keep"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

            </div>

            {recommended.length > 0 && (
                <div className="bg-gray-50 py-16 mt-16 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-deep-charcoal mb-8 text-center">{t('articles.relatedArticles')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {recommended.map((rec) => (
                                <Link
                                    key={rec.id}
                                    to={`/articles/${rec.id}`}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                                >
                                    <div className="aspect-video w-full overflow-hidden bg-gray-100 shrink-0">
                                        <img
                                            src={rec.thumbnail}
                                            alt=""
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 flex-grow flex flex-col justify-center">
                                        <h3 className="font-bold text-deep-charcoal line-clamp-2">
                                            {/* @ts-ignore */}
                                            {rec[`title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`] || rec.titleKo}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
