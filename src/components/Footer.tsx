import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className="bg-off-white pt-10 pb-8 px-6 border-t border-slate-100">

            {/* 핑크 구분 라인 */}
            <div className="divider-pink mx-auto mb-8" />

            {/* 브랜드 */}
            <div className="text-center mb-6">
                <p className="font-bold text-base text-vibrant-pink mb-1">
                    {t('common.footer.brand_title')}
                </p>
                <p className="text-body text-xs" dangerouslySetInnerHTML={{ __html: t('common.footer.brand_desc') }} />
            </div>

            {/* 언어 변경 영역 */}
            <div className="flex justify-center items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">language</span>
                <select
                    value={(i18n.resolvedLanguage || i18n.language || 'ko').split('-')[0]}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    className="bg-white border border-slate-200 text-slate-600 text-[13px] font-medium py-1.5 px-3 rounded-full outline-none shadow-sm focus:border-vibrant-pink/50 focus:ring-2 focus:ring-soft-pink transition-all appearance-none pr-8 cursor-pointer relative"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px 16px' }}
                    aria-label="언어 선택"
                >
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="zh">中文</option>
                </select>
            </div>

            {/* 네비게이션 */}
            <nav className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mb-6" aria-label="푸터 내비게이션">
                {[
                    { to: '/', label: t('common.footer.nav_home') },
                    { to: '/test', label: t('common.footer.nav_test') },
                    { to: '/privacy', label: t('common.footer.nav_privacy') },
                ].map(({ to, label }, i, arr) => (
                    <span key={to} className="flex items-center gap-5">
                        <Link to={to} className="text-xs font-medium text-slate-grey hover:text-vibrant-pink transition-colors">
                            {label}
                        </Link>
                        {i < arr.length - 1 && (
                            <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                        )}
                    </span>
                ))}
            </nav>

            {/* 면책 조항 */}
            <p className="text-center text-xs leading-relaxed text-slate-400 max-w-xs mx-auto mb-4" dangerouslySetInnerHTML={{ __html: t('common.footer.disclaimer') }} />

            {/* 광고 안내 */}
            <p className="text-center text-xs text-slate-400 mb-4">
                {t('common.footer.ads_notice')}
            </p>

            {/* 저작권 */}
            <p className="text-center text-caption text-slate-400">
                {t('common.footer.copyright', { year: new Date().getFullYear() })}
            </p>
        </footer>
    );
}
