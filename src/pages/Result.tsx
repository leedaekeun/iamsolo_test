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
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-10 h-10 rounded-full border-4 animate-spin border-slate-200 border-t-primary" />
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
                alert('링크를 trực tiếp 복사해주세요: ' + url);
            }
        }
    };

    // Convert character ID 'm1_youngsoo' or 'f1_youngsook' to emojis for display since we don't have custom images for all
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
        <div className="max-w-md mx-auto min-h-screen flex flex-col relative bg-white shadow-xl font-display text-deep-black antialiased overflow-x-hidden animate-fade-in">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md px-4 py-3 justify-between border-b border-slate-100">
                <Link to="/" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined text-deep-black">home</span>
                </Link>
                <h2 className="text-lg font-bold tracking-tight flex-1 text-center">테스트 결과</h2>
                <button onClick={handleShare} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined text-deep-black">share</span>
                </button>
            </header>

            <main className="flex-1 pb-32">
                <div className="px-5 py-6">

                    {/* Character Card / Image */}
                    <div className="relative group animate-slide-down">
                        <div className="w-full aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl bg-teal-50 flex flex-col items-center justify-center relative border border-slate-100">
                            {/* Abstract decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

                            <div className="text-8xl mb-8 z-10 drop-shadow-xl animate-float-y">
                                {getCharacterEmoji(character.id)}
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider shadow-md shadow-primary/20">
                                    {character.title}
                                </span>
                                <h3 className="text-deep-black text-3xl font-extrabold leading-tight break-keep">
                                    {character.name}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-8 text-center space-y-4 animate-slide-up delay-100">
                        <h1 className="text-2xl font-bold leading-tight px-2 text-deep-black break-keep">
                            당신은 '솔로나라'의<br />{character.name}
                        </h1>
                        <p className="text-neutral-gray text-base font-medium leading-relaxed px-2 break-keep">
                            {character.description}
                        </p>
                    </div>

                    {/* Traits List (Strengths/Keywords wrapper) */}
                    <div className="mt-10 space-y-4 animate-slide-up delay-200">
                        <h4 className="text-lg font-bold px-1">나의 연애 특징</h4>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-soft">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">favorite</span>
                                    <div>
                                        <p className="font-bold text-deep-black text-sm">{character.loveStyle}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {character.keywords.map(kw => (
                                                <span key={kw} className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">#{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {character.strengths.slice(0, 2).map((str, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-soft">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">auto_awesome</span>
                                        <div>
                                            <p className="font-bold text-deep-black text-sm">강점 포인트 {idx + 1}</p>
                                            <p className="text-xs text-neutral-gray mt-1">{str}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Matches */}
                    <div className="mt-10 animate-slide-up delay-300">
                        <h4 className="text-lg font-bold px-1 mb-4">환상의 케미 매칭</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-slate-100 rounded-[24px] p-5 text-center shadow-soft">
                                <p className="text-[10px] text-primary font-bold mb-3 uppercase tracking-tighter">BEST MATCH</p>
                                <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-2xl">favorite</span>
                                </div>
                                <p className="font-bold text-deep-black text-sm">{character.bestMatch}</p>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold">#환상의짝꿍</span>
                            </div>

                            <div className="bg-white border border-slate-100 rounded-[24px] p-5 text-center shadow-soft">
                                <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-tighter">WORST MATCH</p>
                                <div className="w-14 h-14 bg-slate-50 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400 text-2xl">heart_broken</span>
                                </div>
                                <p className="font-bold text-deep-black text-sm">{character.worstMatch}</p>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold">#환장의짝꿍</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 space-y-3 animate-slide-up delay-400">
                        <button
                            onClick={handleShare}
                            className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                        >
                            <span className="material-symbols-outlined font-normal">share</span>
                            {shareStatus === 'copied' ? '링크가 복사되었습니다!' : '결과 공유하고 데이트 신청하기'}
                        </button>

                        <Link
                            to="/"
                            className="w-full bg-slate-100 text-deep-black font-bold py-4 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                        >
                            <span className="material-symbols-outlined font-normal">refresh</span>
                            테스트 다시하기
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
