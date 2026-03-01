import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer';
import { useSEO } from '@/lib/useSEO';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-bold text-deep-charcoal mb-4 border-b-2 border-soft-pink/50 pb-2">
                {title}
            </h2>
            <div className="space-y-3 text-slate-grey text-sm font-medium leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPage() {
    const { t } = useTranslation();

    useSEO({
        title: '개인정보처리방침',
        description: '솔로나라 심리테스트 개인정보처리방침. 개인정보 수집·이용 안내, Google AdSense 및 Analytics 사용 안내.',
        path: '/privacy',
        noIndex: true,
    });

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal font-sans">
            {/* Header */}
            <header className="bg-white sticky top-0 z-10 border-b border-soft-pink/50 shadow-sm rounded-b-3xl">
                <div className="max-w-md mx-auto flex items-center p-4">
                    <Link to="/" className="btn-icon" aria-label="이전으로">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </Link>
                    <h1 className="text-deep-charcoal text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
                        {t('privacy.header')}
                    </h1>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 w-full max-w-md mx-auto px-6 py-8">

                <div className="mb-10 text-center">
                    <span className="inline-block px-3 py-1 bg-soft-pink text-vibrant-pink text-[10px] font-bold rounded-full uppercase tracking-wider mb-4 border border-vibrant-pink/10">
                        Privacy Policy
                    </span>
                    <h1 className="text-3xl font-black text-deep-charcoal tracking-tight">
                        {t('privacy.header')}
                    </h1>
                    <p className="text-xs text-slate-400 mt-3 font-semibold" dangerouslySetInnerHTML={{ __html: t('privacy.date') }} />
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-[2rem] p-6 mb-10 shadow-card border border-soft-pink/30 flex items-start gap-4">
                    <span className="material-symbols-outlined text-vibrant-pink/80 mt-1">shield_lock</span>
                    <p className="text-sm font-medium leading-relaxed text-slate-grey" dangerouslySetInnerHTML={{ __html: t('privacy.summary') }} />
                </div>

                <Section title={t('privacy.s1_title')}>
                    <p>
                        {t('privacy.s1_p1')}
                    </p>
                    <p>
                        {t('privacy.s1_p2')}
                    </p>
                </Section>

                <Section title={t('privacy.s2_title')}>
                    <p dangerouslySetInnerHTML={{ __html: t('privacy.s2_p1') }} />
                    <p>
                        {t('privacy.s2_p2')}
                    </p>
                    <div className="rounded-2xl p-4 bg-soft-pink/20 border border-soft-pink mt-4">
                        <p className="text-xs font-bold text-vibrant-pink mb-1">{t('privacy.s2_items')}</p>
                        <p className="text-xs text-deep-charcoal font-semibold">
                            {t('privacy.s2_none')}
                        </p>
                    </div>
                </Section>

                <Section title={t('privacy.s3_title')}>
                    <p>
                        {t('privacy.s3_p1')}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t('privacy.s3_p2') }} />
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>{t('privacy.s3_li1')}</li>
                        <li>{t('privacy.s3_li2')}</li>
                        <li>{t('privacy.s3_li3')}</li>
                    </ul>
                </Section>

                <Section title={t('privacy.s4_title')}>
                    <p dangerouslySetInnerHTML={{ __html: t('privacy.s4_p1') }} />
                    <p>
                        {t('privacy.s4_p2')}
                    </p>
                    <div className="space-y-3 mt-4">
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-vibrant-pink hover:underline"
                        >
                            {t('privacy.s4_link1')}
                            <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                        <br />
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-vibrant-pink hover:underline"
                        >
                            {t('privacy.s4_link2')}
                            <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                    </div>
                    <div className="rounded-2xl p-4 bg-yellow-50 border border-yellow-100 mt-4">
                        <p className="text-xs text-yellow-800 leading-relaxed font-semibold">
                            {t('privacy.s4_warn')}
                        </p>
                    </div>
                </Section>

                <Section title={t('privacy.s5_title')}>
                    <p>
                        {t('privacy.s5_p1')}
                    </p>
                </Section>

                <Section title={t('privacy.s6_title')}>
                    <p dangerouslySetInnerHTML={{ __html: t('privacy.s6_p1') }} />
                    <p>
                        {t('privacy.s6_p2')}
                    </p>
                </Section>

                <Section title={t('privacy.s7_title')}>
                    <p>
                        {t('privacy.s7_p1')}
                    </p>
                </Section>

                <Section title={t('privacy.s8_title')}>
                    <p>
                        {t('privacy.s8_p1')}
                    </p>
                    <div className="rounded-2xl p-5 bg-white shadow-card border border-soft-pink/30 mt-4 text-center">
                        <p className="text-xs font-bold text-vibrant-pink mb-1">{t('privacy.s8_box1')}</p>
                        <p className="text-sm text-deep-charcoal font-bold">{t('privacy.s8_box2')}</p>
                        <p className="text-xs mt-2 text-slate-grey font-medium">
                            GitHub: github.com/leedaekeun/iamsolo_test
                        </p>
                    </div>
                </Section>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-12 mb-4">
                    <Link
                        to="/"
                        className="btn-primary w-full"
                    >
                        {t('privacy.go_home')}
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
