import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { CHARACTERS, Archetype } from '@/data/characters';

/* ═══════════════════════════════════════════
   PREMIUM WHITE RESULT PAGE
═══════════════════════════════════════════ */
export default function ResultClient() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const characterId = searchParams.get('resultId');
    // const matchPct = Math.min(Math.max(parseInt(searchParams.get('match') || '0', 10), 0), 100);

    const [character, setCharacter] = useState<Archetype | null>(null);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

    useEffect(() => {
        if (!characterId) {
            navigate('/');
            return;
        }
        const found = CHARACTERS.find(c => c.id === characterId);
        if (!found) {
            navigate('/');
            return;
        }
        setCharacter(found);
    }, [characterId, navigate]);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-off-white">
                <div className="w-10 h-10 rounded-full border-4 animate-spin border-slate-200 border-t-vibrant-pink" />
            </div>
        );
    }

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

    // Keep using emojis for the hero shot for now since we don't have individual big result illustrations
    const getCharacterEmoji = (id: string) => {
        const emojiMap: Record<string, string> = {
            'm1_youngsoo': '🧐', 'm2_youngho': '😄', 'm3_youngsik': '🤗',
            'm4_youngchul': '😤', 'm5_kwangsoo': '🤓', 'm6_sangchul': '😊',
            'f1_youngsook': '👑', 'f2_jungsook': '🔥', 'f3_soonja': '🏕️',
            'f4_youngja': '🥺', 'f5_oksoon': '✨', 'f6_hyunsook': '📚'
        };
        return emojiMap[id] || '💕';
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col bg-off-white font-sans text-deep-charcoal antialiased overflow-x-hidden selection:bg-vibrant-pink selection:text-white pb-0">
            {/* Header mapped precisely like the Home wrapper starting in white */}
            <div className="bg-white rounded-b-[3.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] z-50 mb-0 px-6 py-6 pb-20 relative">
                <header className="flex items-center justify-between mx-auto max-w-md w-full mb-10">
                    <Link to="/" className="flex size-12 items-center justify-center rounded-full hover:bg-off-white transition-colors">
                        <span className="material-symbols-outlined text-deep-charcoal">home</span>
                    </Link>
                    <h2 className="text-xl font-bold tracking-tight flex-1 text-center text-deep-charcoal">나의 매칭 캐릭터</h2>
                    <button onClick={handleShare} className="flex size-12 items-center justify-center rounded-full hover:bg-off-white transition-colors">
                        <span className="material-symbols-outlined text-deep-charcoal">share</span>
                    </button>
                </header>

                {/* Result Title */}
                <div className="text-center space-y-4 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-soft-pink/40 border border-soft-pink mx-auto">
                        <span className="text-[10px] font-bold text-vibrant-pink tracking-widest uppercase">Match Result</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight px-2 text-deep-charcoal break-keep">
                        당신은 '솔로나라'의<br />
                        <span className="text-vibrant-pink">{character.name}</span>
                    </h1>
                </div>
            </div>

            {/* Overlapping Hero Card Wrapper */}
            <div className="px-6 relative -mt-16 z-10 max-w-md mx-auto w-full animate-slide-up ">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-floating bg-white flex flex-col items-center justify-center relative border border-slate-50 group hover:-translate-y-2 transition-transform duration-500">
                    {/* Abstract decorative elements using correct Stitch colors */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-soft-pink rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-70 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-lavender-tag rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 opacity-70 group-hover:scale-110 transition-transform duration-700"></div>

                    <div className="text-8xl mb-12 z-10 drop-shadow-xl animate-float-y group-hover:scale-110 transition-transform duration-500">
                        {getCharacterEmoji(character.id)}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-10 text-center">
                        <span className="inline-block px-4 py-1.5 bg-deep-charcoal text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider shadow-md opacity-90 backdrop-blur-sm">
                            {character.title}
                        </span>
                        <h3 className="text-deep-charcoal text-3xl font-extrabold leading-tight break-keep">
                            {character.name}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Main content pulling up via rounded-t */}
            <main className="flex-1 w-full bg-white rounded-t-[3.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] px-6 py-20 mt-12 pb-32">
                <div className="max-w-md mx-auto">
                    {/* Description */}
                    <div className="text-center mb-16 px-2 animate-slide-up delay-100">
                        <p className="text-slate-grey text-[15px] font-medium leading-9 break-keep relative">
                            <span className="text-vibrant-pink font-bold text-4xl leading-3 absolute -top-4 -left-2 opacity-30">"</span>
                            {character.description}
                            <span className="text-vibrant-pink font-bold text-4xl leading-3 absolute -bottom-6 -right-2 opacity-30">"</span>
                        </p>
                    </div>

                    {/* Traits List */}
                    <div className="space-y-6 animate-slide-up delay-200">
                        <h4 className="text-xl font-bold text-deep-charcoal pl-2 mb-2">나의 연애 특징</h4>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-soft-card group hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="bg-soft-pink/50 p-3 rounded-full shrink-0 group-hover:scale-110 group-hover:bg-vibrant-pink group-hover:text-white transition-all duration-300 shadow-sm">
                                        <span className="material-symbols-outlined text-vibrant-pink group-hover:text-white transition-colors">favorite</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-deep-charcoal text-[15px] mb-3 leading-relaxed">{character.loveStyle}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {character.keywords.map(kw => (
                                                <span key={kw} className="px-3 py-1.5 bg-lavender-tag text-deep-purple text-[10px] font-bold rounded-xl tracking-wide uppercase border border-deep-purple/10">
                                                    #{kw}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {character.strengths.slice(0, 2).map((str, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-soft-card group hover:shadow-floating transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-soft-pink/30 rounded-full blur-xl -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="bg-off-white p-3 rounded-full shrink-0 group-hover:scale-110 group-hover:bg-deep-charcoal group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                                            <span className="material-symbols-outlined text-deep-charcoal group-hover:text-white transition-colors">verified</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1.5 group-hover:text-vibrant-pink transition-colors">장점 포인트 {idx + 1}</p>
                                            <p className="text-[14px] font-semibold text-deep-charcoal leading-relaxed">{str}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Matches */}
                    <div className="mt-16 animate-slide-up delay-300">
                        <div className="flex items-center gap-3 pl-2 mb-6">
                            <h4 className="text-xl font-bold text-deep-charcoal">환상의 케미 매칭</h4>
                            <div className="h-px flex-1 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-white border border-slate-50 rounded-[2rem] p-6 text-center shadow-soft-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 group">
                                <p className="inline-block border border-vibrant-pink/20 bg-soft-pink/30 px-3 py-1 rounded-full text-[10px] text-vibrant-pink font-bold mb-4 uppercase tracking-wider group-hover:bg-vibrant-pink group-hover:text-white transition-colors">최고의 궁합</p>
                                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner border border-slate-50 relative group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-vibrant-pink text-3xl">volunteer_activism</span>
                                    {/* Small overlapping badge representing character correlation */}
                                </div>
                                <p className="font-bold text-deep-charcoal text-sm">{character.bestMatch}</p>
                            </div>

                            <div className="bg-white border border-slate-50 rounded-[2rem] p-6 text-center shadow-soft-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 group">
                                <p className="inline-block border border-slate-200 bg-off-white px-3 py-1 rounded-full text-[10px] text-slate-500 font-bold mb-4 uppercase tracking-wider group-hover:bg-deep-charcoal group-hover:text-white group-hover:border-deep-charcoal transition-colors">최악의 궁합</p>
                                <div className="w-16 h-16 bg-off-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl">sentiment_dissatisfied</span>
                                </div>
                                <p className="font-bold text-deep-charcoal text-sm">{character.worstMatch}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-20 space-y-4 animate-slide-up delay-400">
                        <button
                            onClick={handleShare}
                            className="w-full bg-vibrant-pink text-white font-bold text-[17px] py-[1.125rem] rounded-full shadow-btn transform active:scale-95 hover:-translate-y-1 hover:shadow-[0_12px_24px_-6px_rgba(255,45,120,0.4)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                            <span className="material-symbols-outlined text-[22px] relative z-10">share</span>
                            <span className="relative z-10">{shareStatus === 'copied' ? '링크 복사 완료!' : '결과 공유하고 데이트 신청'}</span>
                        </button>

                        <Link
                            to="/"
                            className="w-full bg-white border border-slate-200 text-deep-charcoal font-bold text-[17px] py-[1.125rem] rounded-full shadow-sm transform active:scale-95 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <span className="material-symbols-outlined text-[22px]">refresh</span>
                            테스트 다시하기
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
