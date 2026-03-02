import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSEO } from '../lib/useSEO';

export const Contact: React.FC = () => {
    const { t } = useTranslation();

    useSEO({
        title: `${t('contact.header')} | ${t('home.title')}`,
        description: t('contact.description'),
        keywords: '문의하기, 연락처, contact, 제휴',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 py-20 pb-24 pt-32">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 max-w-2xl w-full border border-gray-100 text-center">
                <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-vibrant-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-deep-charcoal mb-4">
                    {t('contact.header')}
                </h1>

                <p className="text-lg text-gray-600 mb-8 break-keep">
                    {t('contact.description')}
                </p>

                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-100">
                    <p className="text-xl md:text-2xl font-bold text-deep-charcoal mb-3 select-all">
                        {t('contact.email')}
                    </p>
                    <p className="text-sm text-gray-500">
                        {t('contact.response_time')}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="inline-flex justify-center items-center py-4 px-8 border border-transparent rounded-full shadow-md text-lg font-bold text-white bg-vibrant-pink hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vibrant-pink transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
                    >
                        {t('contact.go_home')}
                    </Link>
                </div>
            </div>
        </div>
    );
};
