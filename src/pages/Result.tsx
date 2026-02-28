import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { CHARACTERS, Archetype } from '@/data/characters';

/* ─────────────────────────────────────────
   캐릭터 아바타 설정 (imageUrl 없으므로 이모지+그라디언트)
───────────────────────────────────────── */
const CHAR_AVATAR: Record<string, { emoji: string; from: string; to: string }> = {
    'm1_youngsoo': { emoji: '🧐', from: '#C7D2FE', to: '#818CF8' },
    'm2_youngho':  { emoji: '😄', from: '#FDE68A', to: '#FBBF24' },
    'm3_youngsik': { emoji: '🤗', from: '#A7F3D0', to: '#34D399' },
    'm4_youngchul':{ emoji: '😤', from: '#FECACA', to: '#F87171' },
    'm5_kwangsoo': { emoji: '🤓', from: '#BFDBFE', to: '#60A5FA' },
    'm6_sangchul': { emoji: '😊', from: '#E2E8F0', to: '#94A3B8' },
    'f1_youngsook':{ emoji: '👑', from: '#FEF3C7', to: '#FCD34D' },
    'f2_jungsook': { emoji: '🔥', from: '#FECACA', to: '#F87171' },
    'f3_soonja':   { emoji: '🏕️', from: '#A7F3D0', to: '#34D399' },
    'f4_youngja':  { emoji: '🥺', from: '#FBCFE8', to: '#F472B6' },
    'f5_oksoon':   { emoji: '✨', from: '#D1FAE5', to: '#6EE7B7' },
    'f6_hyunsook': { emoji: '📚', from: '#C7D2FE', to: '#818CF8' },
};

/* ═══════════════════════════════════════════
   RESULT PAGE
═══════════════════════════════════════════ */
export default function ResultClient() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const characterId = searchParams.get('resultId');

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

    const av = CHAR_AVATAR[character.id] ?? { emoji: '💕', from: '#FBCFE8', to: '#F472B6' };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: `나는 솔로 테스트 — 내 캐릭터는 ${character.name}?`,
            text: `연애 성향 캐릭터를 확인해보세요! 💕`,
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
                alert('링크를 직접 복사해주세요: ' + url);
            }
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col bg-off-white text-deep-charcoal overflow-x-hidden">

            {/* ── 상단 헤더 ── */}
            <div className="bg-white rounded-section-b shadow-natural px-6 pt-6 pb-20 relative z-20">
                <header className="flex items-center justify-between mx-auto max-w-md w-full mb-10">
                    <Link
                        to="/"
                        className="flex size-11 items-center justify-center rounded-full hover:bg-off-white transition-colors"
                        aria-label="홈으로"
                    >
                        <span className="material-symbols-outlined text-deep-charcoal">home</span>
                    </Link>
                    <h2 className="text-card-title flex-1 text-center">나의 매칭 캐릭터</h2>
                    <button
                        onClick={handleShare}
                        className="flex size-11 items-center justify-center rounded-full hover:bg-off-white transition-colors"
                        aria-label="공유"
                    >
                        <span className="material-symbols-outlined text-deep-charcoal">share</span>
                    </button>
                </header>

                {/* 결과 타이틀 */}
                <div className="text-center space-y-4 animate-slide-up">
                    <div className="badge mx-auto w-fit">Match Result</div>
                    <h1 className="text-page-title px-2 break-keep">
                        당신은 '솔로나라'의<br />
                        <span className="text-vibrant-pink">{character.name}</span>
                    </h1>
                </div>
            </div>

            {/* ── 캐릭터 히어로 카드 (헤더에 반쯤 올라옴) ── */}
            <div className="px-6 relative -mt-14 z-10 max-w-md mx-auto w-full animate-slide-up">
                <div className="card overflow-hidden flex flex-col items-center group hover:-translate-y-2 transition-transform duration-500">

                    {/* 아바타 영역 — 이모지 + 그라디언트 */}
                    <div
                        className="w-full aspect-square flex items-center justify-center text-8xl"
                        style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
                    >
                        {av.emoji}
                    </div>

                    {/* 캐릭터 이름·타이틀 */}
                    <div className="py-7 px-6 w-full text-center bg-white">
                        <span className="inline-block px-4 py-1.5 bg-deep-charcoal text-white text-caption rounded-full mb-3 tracking-wider shadow-sm">
                            {character.title}
                        </span>
                        <p className="text-[32px] font-extrabold leading-none tracking-tight text-deep-charcoal">
                            {character.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* ── 본문 콘텐츠 ── */}
            <main className="flex-1 w-full panel-section px-6 pt-16 pb-24 mt-10">
                <div className="max-w-md mx-auto space-y-10">

                    {/* 캐릭터 설명 */}
                    <div className="text-center px-2 animate-slide-up delay-100">
                        <p className="text-body leading-9 break-keep relative px-4">
                            <span className="text-vibrant-pink font-bold text-4xl absolute -top-3 -left-1 opacity-25 leading-none">"</span>
                            {character.description}
                            <span className="text-vibrant-pink font-bold text-4xl absolute -bottom-5 -right-1 opacity-25 leading-none">"</span>
                        </p>
                    </div>

                    {/* 나의 연애 특징 */}
                    <div className="animate-slide-up delay-200">
                        <h4 className="text-section-title pl-1 mb-5">나의 연애 특징</h4>
                        <div className="space-y-4">

                            {/* 연애 스타일 */}
                            <div className="card p-6 group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-soft-pink p-3 rounded-full shrink-0 group-hover:bg-vibrant-pink transition-colors duration-300">
                                        <span className="material-symbols-outlined text-vibrant-pink group-hover:text-white transition-colors">favorite</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-deep-charcoal text-[15px] mb-3 leading-relaxed">
                                            {character.loveStyle}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {character.keywords.map(kw => (
                                                <span key={kw} className="tag">#{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 강점 카드 */}
                            {character.strengths.slice(0, 2).map((str, idx) => (
                                <div key={idx} className="card p-6 group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-soft-pink rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-500 opacity-60" />
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="bg-off-white p-3 rounded-full shrink-0 border border-slate-100 group-hover:bg-deep-charcoal transition-colors duration-300">
                                            <span className="material-symbols-outlined text-deep-charcoal group-hover:text-white transition-colors">verified</span>
                                        </div>
                                        <div>
                                            <p className="text-caption text-slate-400 mb-1.5 group-hover:text-vibrant-pink transition-colors">
                                                장점 포인트 {idx + 1}
                                            </p>
                                            <p className="text-body text-[14px] font-semibold text-deep-charcoal">
                                                {str}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 궁합 리포트 */}
                    <div className="animate-slide-up delay-300">
                        <div className="flex items-center gap-3 pl-1 mb-5">
                            <h4 className="text-section-title">환상의 케미 매칭</h4>
                            <div className="h-px flex-1 bg-slate-100 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* 최고의 궁합 */}
                            <div className="card p-6 text-center group">
                                <p className="badge mb-4 w-fit mx-auto group-hover:bg-vibrant-pink group-hover:text-white transition-colors">
                                    최고의 궁합
                                </p>
                                <div className="w-14 h-14 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-vibrant-pink text-3xl">volunteer_activism</span>
                                </div>
                                <p className="font-bold text-deep-charcoal">{character.bestMatch}</p>
                            </div>

                            {/* 최악의 궁합 */}
                            <div className="card p-6 text-center group">
                                <p className="text-caption text-slate-500 bg-off-white border border-slate-200 px-3 py-1.5 rounded-full mb-4 w-fit mx-auto group-hover:bg-deep-charcoal group-hover:text-white group-hover:border-deep-charcoal transition-colors">
                                    최악의 궁합
                                </p>
                                <div className="w-14 h-14 bg-off-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl">sentiment_dissatisfied</span>
                                </div>
                                <p className="font-bold text-deep-charcoal">{character.worstMatch}</p>
                            </div>
                        </div>
                    </div>

                    {/* 연애 성장 조언 */}
                    <div className="animate-slide-up delay-400">
                        <div className="flex items-center gap-3 pl-1 mb-5">
                            <h4 className="text-section-title">연애 성장 조언</h4>
                            <div className="h-px flex-1 bg-slate-100 rounded-full" />
                        </div>
                        <div className="space-y-3">
                            {character.advice.map((tip, i) => (
                                <div key={i} className="card p-5 flex items-start gap-4">
                                    <span className="shrink-0 w-7 h-7 rounded-full bg-soft-pink border border-mid-pink flex items-center justify-center text-xs font-bold text-vibrant-pink">
                                        {i + 1}
                                    </span>
                                    <p className="text-body text-[14px]">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 액션 버튼 */}
                    <div className="space-y-3 animate-slide-up delay-400 pt-4">
                        <button onClick={handleShare} className="btn-primary">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                            <span>{shareStatus === 'copied' ? '링크 복사 완료!' : '결과 공유하고 데이트 신청'}</span>
                        </button>
                        <Link to="/" className="btn-secondary">
                            <span className="material-symbols-outlined text-[20px]">refresh</span>
                            테스트 다시하기
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
