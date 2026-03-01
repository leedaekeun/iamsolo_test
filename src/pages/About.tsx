import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer';
import { useSEO } from '@/lib/useSEO';

export default function About() {
    const { t } = useTranslation();

    useSEO({
        title: '이 테스트에 대하여',
        description: '솔로나라 심리테스트의 분석 방법과 심리학 원형(Archetype) 이론에 대해 알아보세요. 12가지 연애 성향 캐릭터의 과학적 근거를 확인할 수 있습니다.',
        path: '/about',
    });

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-off-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-md mx-auto flex items-center p-4">
                    <Link to="/" className="btn-icon" aria-label="이전으로">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </Link>
                    <h1 className="text-deep-charcoal text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
                        {t('about.header')}
                    </h1>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 w-full max-w-md mx-auto px-6 py-8">

                <section className="mb-10">
                    <h2 className="text-2xl font-extrabold text-deep-charcoal mb-4" dangerouslySetInnerHTML={{ __html: t('about.title') }} />
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        {t('about.desc1')}
                    </p>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed">
                        {t('about.desc2')}
                    </p>
                </section>

                <section className="mb-10 bg-white p-6 rounded-[2rem] shadow-card border border-soft-pink/30">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-3">{t('about.bg_title')}</h3>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        {t('about.bg_desc')}
                    </p>
                    <ul className="list-disc pl-5 text-slate-grey text-sm font-medium leading-relaxed space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: t('about.list_ei') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('about.list_ns') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('about.list_tf') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('about.list_jp') }} />
                    </ul>
                </section>

                <section className="mb-10">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-3">{t('about.result_guide_title')}</h3>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        {t('about.result_guide_desc1')}
                    </p>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        {t('about.result_guide_desc2')}
                    </p>
                </section>

                <section className="mb-10 bg-soft-pink/30 p-5 rounded-2xl">
                    <h3 className="text-sm font-bold text-vibrant-pink mb-2">{t('about.caution_badge')}</h3>
                    <p className="text-deep-charcoal text-xs leading-relaxed">
                        {t('about.caution_desc')}
                    </p>
                </section>

                <div className="flex justify-center mt-12 mb-4">
                    <Link
                        to="/test"
                        className="btn-primary w-full"
                    >
                        {t('about.start_btn')}
                    </Link>
                </div>

            </main>

            <Footer />
        </div >
    );
}
