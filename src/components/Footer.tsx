import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();

    const [formOpen, setFormOpen] = useState(false);
    const [type, setType] = useState('광고 문의');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/mindtap_kr@naver.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ type, email, message }),
            });
            if (res.ok) {
                setStatus('success');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleClose = () => {
        setFormOpen(false);
        setStatus('idle');
        setEmail('');
        setMessage('');
        setType('광고 문의');
    };

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

            {/* 광고 문의 / 오류 제보 폼 */}
            <div className="mb-6 max-w-sm mx-auto">
                {!formOpen ? (
                    <div className="text-center">
                        <button
                            onClick={() => setFormOpen(true)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-vibrant-pink transition-colors"
                        >
                            <span className="material-symbols-outlined text-[16px]">mail</span>
                            광고 문의 / 오류 제보
                        </button>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5">
                        {status === 'success' ? (
                            <div className="text-center py-3">
                                <span className="material-symbols-outlined text-vibrant-pink text-4xl mb-2 block">check_circle</span>
                                <p className="text-sm font-bold text-deep-charcoal">전송 완료!</p>
                                <p className="text-xs text-slate-400 mt-1">소중한 의견 감사합니다 :)</p>
                                <button
                                    onClick={handleClose}
                                    className="mt-4 text-xs font-semibold text-vibrant-pink hover:underline"
                                >
                                    닫기
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* 헤더 */}
                                <div className="flex items-center justify-between mb-1">
                                    <p className="text-sm font-bold text-deep-charcoal">광고 문의 / 오류 제보</p>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="text-slate-300 hover:text-slate-500 transition-colors"
                                        aria-label="닫기"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">close</span>
                                    </button>
                                </div>

                                {/* 문의 유형 */}
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-vibrant-pink/60 text-slate-600 bg-white cursor-pointer"
                                >
                                    <option>광고 문의</option>
                                    <option>오류 제보</option>
                                    <option>기타 문의</option>
                                </select>

                                {/* 이메일 */}
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="이메일 (답변 원하시면 입력)"
                                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-vibrant-pink/60 placeholder:text-slate-300"
                                />

                                {/* 내용 */}
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="내용을 입력해주세요"
                                    required
                                    rows={3}
                                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-vibrant-pink/60 placeholder:text-slate-300 resize-none"
                                />

                                {status === 'error' && (
                                    <p className="text-xs text-red-400">전송에 실패했습니다. 다시 시도해주세요.</p>
                                )}

                                {/* 전송 버튼 */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-vibrant-pink text-white text-xs font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
                                >
                                    {status === 'sending' ? '전송 중...' : '보내기'}
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </div>

            {/* 면책 조항 */}
            <p className="text-center text-xs leading-relaxed text-slate-400 max-w-xs mx-auto mb-4" dangerouslySetInnerHTML={{ __html: t('common.footer.disclaimer') }} />

            {/* 저작권 */}
            <p className="text-center text-caption text-slate-400">
                {t('common.footer.copyright', { year: new Date().getFullYear() })}
            </p>
        </footer>
    );
}
