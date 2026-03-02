import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 flex items-center px-6">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link to="/" className="text-xl font-black text-vibrant-pink tracking-tight shrink-0">
                    S<span className="text-deep-charcoal">olo</span>.
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/test" className="text-sm font-semibold text-slate-700 hover:text-vibrant-pink transition-colors">
                        {t('common.footer.nav_test', '테스트 시작')}
                    </Link>
                    <Link to="/articles" className="text-sm font-semibold text-slate-700 hover:text-vibrant-pink transition-colors">
                        {t('common.nav_articles', '연애 심리 칼럼')}
                    </Link>
                    <Link to="/about" className="text-sm font-semibold text-slate-700 hover:text-vibrant-pink transition-colors">
                        {t('common.footer.nav_about', '서비스 소개')}
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/test" className="md:hidden text-sm font-bold text-vibrant-pink bg-pink-50 px-4 py-2 rounded-full">
                        {t('home.btn_start_test', '테스트 시작')}
                    </Link>
                </div>
            </div>
        </header>
    );
}
