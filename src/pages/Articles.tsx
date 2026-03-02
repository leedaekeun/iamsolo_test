import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useSEO } from '../lib/useSEO';

export const Articles: React.FC = () => {
    const { t, i18n } = useTranslation();

    useSEO({
        title: `${t('articles.header')} | ${t('home.title')}`,
        description: t('articles.description'),
        keywords: '연애 심리, 심리테스트, 연애 칼럼, 솔로나라, 심리학',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentLang = i18n.language.split('-')[0];

    const getLocalizedField = (article: any, field: string) => {
        const langKey = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
        return article[`${field}${langKey}`] || article[`${field}Ko`];
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-gradient-to-b from-vibrant-pink/10 to-transparent pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-deep-charcoal mb-4 tracking-tight">
                        {t('articles.header')}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('articles.description')}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/articles/${article.id}`}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 shrink-0">
                                <img
                                    src={article.thumbnail}
                                    alt={getLocalizedField(article, 'title')}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-sm text-vibrant-pink font-semibold mb-2">{article.date}</div>
                                <h2 className="text-xl font-bold text-deep-charcoal mb-3 line-clamp-2 leading-tight">
                                    {getLocalizedField(article, 'title')}
                                </h2>
                                <p className="text-gray-600 line-clamp-3 text-sm flex-grow">
                                    {getLocalizedField(article, 'desc')}
                                </p>
                                <div className="mt-4 text-vibrant-pink font-medium text-sm inline-flex items-center">
                                    {t('articles.readMore')}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
