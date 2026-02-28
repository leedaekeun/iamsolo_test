import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { CHARACTERS, Archetype } from '@/data/characters';

/* ─────────────────────────────────────────
   캐릭터 아바타 설정 (imageUrl 없으므로 이모지+그라디언트)
───────────────────────────────────────── */
const CHAR_AVATAR: Record<string, { emoji: string; from: string; to: string }> = {
    'm1_youngsoo': { emoji: '🧐', from: '#C7D2FE', to: '#818CF8' },
    'm2_youngho': { emoji: '😄', from: '#FDE68A', to: '#FBBF24' },
    'm3_youngsik': { emoji: '🤗', from: '#A7F3D0', to: '#34D399' },
    'm4_youngchul': { emoji: '😤', from: '#FECACA', to: '#F87171' },
    'm5_kwangsoo': { emoji: '🤓', from: '#BFDBFE', to: '#60A5FA' },
    'm6_sangchul': { emoji: '😊', from: '#E2E8F0', to: '#94A3B8' },
    'f1_youngsook': { emoji: '👑', from: '#FEF3C7', to: '#FCD34D' },
    'f2_jungsook': { emoji: '🔥', from: '#FECACA', to: '#F87171' },
    'f3_soonja': { emoji: '🏕️', from: '#A7F3D0', to: '#34D399' },
    'f4_youngja': { emoji: '🥺', from: '#FBCFE8', to: '#F472B6' },
    'f5_oksoon': { emoji: '✨', from: '#D1FAE5', to: '#6EE7B7' },
    'f6_hyunsook': { emoji: '📚', from: '#C7D2FE', to: '#818CF8' },
};

/* ═══════════════════════════════════════════
   RESULT PAGE
═══════════════════════════════════════════ */
export default function ResultClient() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const characterId = searchParams.get('resultId');
    const { t } = useTranslation();

    const [character, setCharacter] = useState<Archetype | null>(null);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

    useEffect(() => {
        if (!characterId) { navigate('/'); return; }
        const found = CHARACTERS.find(c => c.id === characterId);
        if (!found) { navigate('/'); return; }
        setCharacter(found);
    }, [characterId, navigate]);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-off-white">
                <div className="w-10 h-10 rounded-full border-4 animate-spin border-slate-200 border-t-vibrant-pink" />
            </div>
        );
    }

    const bestMatchChar = CHARACTERS.find(c => c.name === character.bestMatch);
    const worstMatchChar = CHARACTERS.find(c => c.name === character.worstMatch);

    const av = CHAR_AVATAR[character.id] ?? { emoji: '💕', from: '#FBCFE8', to: '#F472B6' };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: t('result.shareTitle', { name: t(`result.${character.id}`) }),
            text: t('result.shareText'),
            url,
        };
        if (navigator.share) {
            try { await navigator.share(shareData); } catch { /* 취소 */ }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                setShareStatus('copied');
                setTimeout(() => setShareStatus('idle'), 2500);
            } catch {
                alert(t('result.copyAlert') + url);
            }
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col bg-off-white text-deep-charcoal overflow-x-hidden">

            {/* ── 상단 헤더 ── */}
            <div className="bg-white rounded-section-b shadow-natural px-6 pt-4 pb-4 sm:pb-6 relative z-20">
                <header className="flex items-center justify-between mx-auto max-w-md w-full mb-3 sm:mb-4">
                    <Link
                        to="/"
                        className="btn-icon"
                        aria-label="홈으로"
                    >
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                    <h2 className="text-[20px] font-bold text-deep-charcoal leading-tight tracking-tight flex-1 text-center">{t('result.top_title')}</h2>
                    <button
                        onClick={handleShare}
                        className="btn-icon"
                        aria-label="공유"
                    >
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </header>

                {/* 결과 타이틀 */}
                <div className="text-center space-y-3 sm:space-y-4 animate-slide-up">
                    <div className="badge mx-auto w-fit">{t('result.match_result')}</div>
                    <h1 className="text-[22px] sm:text-[26px] font-extrabold px-2 whitespace-nowrap leading-snug">
                        {t('result.titleBase')} <span className="text-vibrant-pink">{t(`result.${character.id}`)}</span>
                    </h1>
                </div>
            </div>

            {/* ── 캐릭터 히어로 카드 영역 (풀위드 배경) ── */}
            <div className="relative w-full pt-4 pb-8 sm:py-8 flex flex-col items-center z-10">

                {/* 캐릭터 백그라운드 블러 글로우 효과 (풀위드) */}
                {character.imageUrl && (
                    <div className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover blur-[50px] opacity-80 pointer-events-none"
                        style={{ backgroundImage: `url(${character.imageUrl})` }}>
                    </div>
                )}

                <div className="w-full max-w-md px-6 animate-slide-up relative z-20">
                    <div className="card overflow-hidden flex flex-col items-center group hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/85 backdrop-blur-xl border border-white/60">
                        {/* 아바타 영역 — 1:1 비율 이미지 */}
                        <div className="w-full aspect-square relative bg-slate-50 flex items-center justify-center overflow-hidden">
                            {character.imageUrl ? (
                                <img
                                    src={character.imageUrl}
                                    alt={`${character.name} 캐릭터 일러스트`}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center text-8xl"
                                    style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
                                >
                                    {av.emoji}
                                </div>
                            )}
                        </div>

                        {/* 캐릭터 이름·타이틀·설명 */}
                        <div className="py-7 px-6 w-full text-center bg-transparent backdrop-blur-md">
                            <span className="inline-block px-4 py-1.5 bg-deep-charcoal text-white text-caption rounded-full mb-3 tracking-wider shadow-sm">
                                {t(`characters.${character.id}.title`)}
                            </span>
                            <p className="text-[32px] font-extrabold leading-none tracking-tight text-deep-charcoal mb-4">
                                {t(`result.${character.id}`)}
                            </p>
                            <p className="text-[15px] font-medium leading-relaxed text-slate-600 break-words">
                                {t(`characters.${character.id}.description`)}
                            </p>

                            {/* 나의 연애 특징 (아이콘 요약바) */}
                            <div className="mt-8 pt-6 border-t border-slate-200/50">
                                <p className="text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-wider">{t('result.dating_characteristics')}</p>
                                <div className="flex justify-center gap-4">
                                    {character.keywords.slice(0, 3).map((kw, idx) => {
                                        const icons = ['favorite', 'stars', 'lightbulb'];
                                        const colorClasses = [
                                            'text-vibrant-pink bg-pink-50',
                                            'text-indigo-500 bg-indigo-50',
                                            'text-emerald-500 bg-emerald-50'
                                        ];
                                        return (
                                            <div key={idx} className="flex flex-col items-center gap-2 max-w-[80px]">
                                                <div className={`p-3 rounded-full ${colorClasses[idx]} flex items-center justify-center shadow-sm`}>
                                                    <span className="material-symbols-outlined text-[20px]">{icons[idx]}</span>
                                                </div>
                                                <span className="text-[12px] font-extrabold text-deep-charcoal break-words leading-tight text-center">{t(`characters.${character.id}.keywords.${idx}`)}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ── 캐릭터 히어로 카드 영역 끝 ── */}

            {/* ── 본문 콘텐츠 ── */}
            <main className="flex-1 w-full panel-section px-6 pt-12 pb-24 mt-10 relative z-30 bg-off-white/80 backdrop-blur-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] rounded-t-[40px]">
                <div className="max-w-md mx-auto space-y-8">

                    {/* 궁합 리포트 */}
                    <div className="animate-slide-up delay-300">
                        <div className="flex items-center gap-3 pl-1 mb-5">
                            <h4 className="text-section-title">{t('result.chemistry_title')}</h4>
                            <div className="h-px flex-1 bg-slate-100 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* 최고의 궁합 */}
                            <div className="card text-center group flex flex-col items-center overflow-hidden">
                                <div className="w-full aspect-[4/5] bg-white mx-auto relative flex items-center justify-center overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                                    {bestMatchChar?.imageUrl ? (
                                        <img src={bestMatchChar.imageUrl} alt={bestMatchChar.name} className="w-full h-full object-cover object-top" />
                                    ) : (
                                        <span className="material-symbols-outlined text-vibrant-pink text-4xl">volunteer_activism</span>
                                    )}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max z-10">
                                        <p className="text-[11px] font-bold text-white bg-vibrant-pink px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                            {t('result.bestMatchBadge')}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                                </div>
                                <div className="p-4 w-full bg-white relative z-10 -mt-2">
                                    <p className="font-extrabold text-deep-charcoal text-[19px]">{bestMatchChar ? t(`result.${bestMatchChar.id}`) : character.bestMatch}</p>
                                    <p className="text-[13px] font-semibold text-slate-500 mt-1">{bestMatchChar ? t(`characters.${bestMatchChar.id}.title`) : ''}</p>
                                </div>
                            </div>

                            {/* 최악의 궁합 */}
                            <div className="card text-center group flex flex-col items-center overflow-hidden">
                                <div className="w-full aspect-[4/5] bg-off-white mx-auto relative flex items-center justify-center overflow-hidden group-hover:scale-[1.03] transition-transform duration-500 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100">
                                    {worstMatchChar?.imageUrl ? (
                                        <img src={worstMatchChar.imageUrl} alt={worstMatchChar.name} className="w-full h-full object-cover object-top" />
                                    ) : (
                                        <span className="material-symbols-outlined text-slate-400 text-4xl">sentiment_dissatisfied</span>
                                    )}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max z-10">
                                        <p className="text-[11px] font-bold text-slate-600 bg-white/90 backdrop-blur-sm border border-slate-200/50 px-3 py-1.5 rounded-full shadow-sm">
                                            {t('result.worstMatchBadge')}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                                </div>
                                <div className="p-4 w-full bg-white relative z-10 -mt-2">
                                    <p className="font-bold text-slate-700 text-[18px]">{worstMatchChar ? t(`result.${worstMatchChar.id}`) : character.worstMatch}</p>
                                    <p className="text-[13px] font-medium text-slate-500 mt-1">{worstMatchChar ? t(`characters.${worstMatchChar.id}.title`) : ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 연애 성장 조언 */}
                    <div className="animate-slide-up delay-400">
                        <div className="flex items-center gap-3 pl-1 mb-5">
                            <h4 className="text-section-title">{t('result.dating_advice')}</h4>
                            <div className="h-px flex-1 bg-slate-100 rounded-full" />
                        </div>
                        <div className="space-y-3">
                            {character.advice.map((tip, i) => (
                                <div key={i} className="card p-5 flex items-start gap-4">
                                    <span className="shrink-0 w-7 h-7 rounded-full bg-soft-pink border border-mid-pink flex items-center justify-center text-xs font-bold text-vibrant-pink">
                                        {i + 1}
                                    </span>
                                    <p className="text-body text-[14px]">{t(`characters.${character.id}.advice.${i}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 액션 버튼 */}
                    <div className="space-y-3 animate-slide-up delay-400 pt-4">
                        <button onClick={handleShare} className="btn-primary">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                            <span>{shareStatus === 'copied' ? t('result.share_copied') : t('result.share_btn')}</span>
                        </button>
                        <Link to="/" className="btn-secondary">
                            <span className="material-symbols-outlined text-[20px]">refresh</span>
                            {t('result.restartBtn')}
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
