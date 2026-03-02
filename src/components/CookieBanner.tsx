import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show after 1 second for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-deep-charcoal text-white p-4 md:p-6 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-4 animate-[slideUp_0.3s_ease-out]">
            <div className="text-sm font-medium text-slate-200 text-center md:text-left">
                {t('cookie.message', '본 사이트는 원활한 서비스 제공과 맞춤형 광고 노출을 위해 쿠키를 사용합니다.')}
                <Link to="/privacy" className="underline ml-2 text-vibrant-pink hover:text-soft-pink transition-colors whitespace-nowrap">
                    {t('cookie.policy', '개인정보처리방침 보기')}
                </Link>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-slate-700 text-white text-sm font-bold hover:bg-slate-600 transition-colors"
                >
                    {t('cookie.decline', '거절')}
                </button>
                <button
                    onClick={acceptCookies}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-vibrant-pink text-white text-sm font-bold hover:bg-pink-600 transition-colors shadow-md"
                >
                    {t('cookie.accept', '동의')}
                </button>
            </div>
            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
