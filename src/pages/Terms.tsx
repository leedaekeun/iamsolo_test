import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSEO } from '../lib/useSEO';

export const Terms: React.FC = () => {
    const { t } = useTranslation();

    useSEO({
        title: `${t('terms.header')} | ${t('home.title')}`,
        description: t('terms.header'),
        keywords: '이용약관, terms of service',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 py-20 pb-24 pt-32">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 max-w-3xl w-full border border-gray-100 flex-grow max-h-none h-auto">
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal mb-4">
                        {t('terms.header')}
                    </h1>
                    <p className="text-gray-500 font-medium">{t('terms.date')}</p>
                </header>

                <article className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-deep-charcoal mb-3">{t('terms.s1_title')}</h2>
                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-5 rounded-xl border border-gray-100 break-keep">
                            {t('terms.s1_content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-deep-charcoal mb-3">{t('terms.s2_title')}</h2>
                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-5 rounded-xl border border-gray-100 break-keep">
                            {t('terms.s2_content')}
                        </p>
                    </section>
                </article>

                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex justify-center items-center py-4 px-8 border border-transparent rounded-full shadow-md text-lg font-bold text-white bg-vibrant-pink hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vibrant-pink transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
                    >
                        {t('terms.go_home')}
                    </Link>
                </div>
            </div>
        </div>
    );
};
