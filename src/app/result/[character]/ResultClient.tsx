"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CHARACTERS, Archetype } from '@/data/characters';
import Link from 'next/link';

/* ─── 매칭 퍼센트 원형 게이지 ─── */
function MatchCircle({ pct }: { pct: number }) {
    const r = 42;
    const circ = 2 * Math.PI * r;
    const filled = (pct / 100) * circ;

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative w-28 h-28">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* 배경 트랙 */}
                    <circle cx="50" cy="50" r={r} strokeWidth="9"
                        stroke="#ffe0ec" fill="none" />
                    {/* 진행 아크 */}
                    <circle
                        cx="50" cy="50" r={r}
                        strokeWidth="9"
                        stroke="url(#pinkGrad)"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${filled} ${circ - filled}`}
                        style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.22,1,0.36,1)' }}
                    />
                    <defs>
                        <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff9dc5" />
                            <stop offset="100%" stopColor="#ff4080" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* 중앙 숫자 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black" style={{ color: '#ff4080' }}>
                        {pct}%
                    </span>
                    <span className="text-xs" style={{ color: '#ccb0c0' }}>일치</span>
                </div>
            </div>
        </div>
    );
}

/* ─── 성격 특성 바 ─── */
function TraitBar({ label, value }: { label: string; value: number }) {
    // value: -100 ~ 100, 50% = 중립
    const leftPct = 50 - value / 2;
    const rightPct = 50 + value / 2;
    const [pair] = label.split('/');

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium" style={{ color: '#8888a8' }}>
                <span>{label.split('/')[0]}</span>
                <span>{label.split('/')[1]}</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#ffe0ec' }}>
                <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                        width: `${Math.abs(value) / 2 + 50}%`,
                        marginLeft: value < 0 ? 0 : undefined,
                        background: value > 0
                            ? 'linear-gradient(90deg, #ff9dc5, #ff4080)'
                            : 'linear-gradient(90deg, #a0b8ff, #5b7ccc)',
                        float: value < 0 ? 'right' : 'left',
                    }}
                />
            </div>
        </div>
    );
}

/* ─── 캐릭터 아바타 이모지 매핑 ─── */
const CHARACTER_EMOJI: Record<string, { emoji: string; bg: string }> = {
    'm1_youngsoo': { emoji: '🧐', bg: '#EEF0FF' },
    'm2_youngho':  { emoji: '😄', bg: '#FFF5E0' },
    'm3_youngsik': { emoji: '🤗', bg: '#E8F5E9' },
    'm4_youngchul': { emoji: '😤', bg: '#FFE8E8' },
    'f1_oksoon':   { emoji: '✨', bg: '#FFF0F5' },
    'f2_hyunsook': { emoji: '📚', bg: '#F0F4FF' },
    'f3_youngsook': { emoji: '👑', bg: '#FFF8E0' },
    'f4_jungsook': { emoji: '🌟', bg: '#F5FFF0' },
};

export default function ResultClient({ characterId }: { characterId: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const rawMatch = parseInt(searchParams.get('match') || '0', 10);
    const matchPct = Math.min(Math.max(rawMatch, 0), 100);

    const [character, setCharacter] = useState<Archetype | null>(null);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

    useEffect(() => {
        const found = CHARACTERS.find(c => c.id === characterId);
        if (!found) {
            router.push('/');
            return;
        }
        setCharacter(found);
    }, [characterId, router]);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
                    style={{ borderColor: '#ffb3d1', borderTopColor: 'transparent' }}
                />
            </div>
        );
    }

    const avatar = CHARACTER_EMOJI[character.id] || { emoji: '💕', bg: '#fff0f5' };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: `나는 솔로 테스트 — 내 캐릭터는 ${character.name}?`,
            text: `나와 싱크로율 ${matchPct}%인 연애 성향 캐릭터를 확인해보세요! 💕`,
            url,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // 사용자 취소 등
            }
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

    const traits = character.traits;

    return (
        <div className="flex flex-col min-h-screen pb-32">

            {/* ── HERO 헤더 ── */}
            <div
                className="relative px-6 pt-10 pb-8 text-center overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #fff0f5 0%, #ffe0ec 60%, #ffd6e8 100%)',
                    borderRadius: '0 0 32px 32px',
                }}
            >
                {/* 배경 장식 원 */}
                <div
                    className="absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full opacity-40"
                    style={{ background: 'radial-gradient(circle, #ffb3d1, transparent)' }}
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-[-20px] left-[-20px] w-24 h-24 rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, #ff80b5, transparent)' }}
                    aria-hidden="true"
                />

                {/* 배지 */}
                <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 animate-slide-down"
                    style={{
                        background: 'rgba(255,255,255,0.7)',
                        color: '#ff4080',
                        border: '1px solid rgba(255,150,190,0.5)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    💕 당신의 캐릭터 매칭 결과
                </span>

                {/* 캐릭터 아바타 */}
                <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl animate-pop-in"
                    style={{
                        background: avatar.bg,
                        border: '3px solid rgba(255,150,190,0.4)',
                        boxShadow: '0 8px 24px rgba(255,80,128,0.20)',
                    }}
                    aria-hidden="true"
                >
                    {avatar.emoji}
                </div>

                {/* 이름 & 타이틀 */}
                <h1
                    className="text-4xl font-black mb-1 animate-slide-up"
                    style={{ color: '#1e1e2d', letterSpacing: '-0.03em' }}
                >
                    <span className="text-pink-gradient">{character.name}</span>
                </h1>
                <p
                    className="text-base font-medium mb-5 animate-slide-up delay-100"
                    style={{ color: '#8888a8' }}
                >
                    {character.title}
                </p>

                {/* 매칭 원형 게이지 */}
                <div className="animate-pop-in delay-200">
                    <MatchCircle pct={matchPct} />
                </div>
            </div>

            {/* ── 메인 콘텐츠 ── */}
            <div className="px-5 pt-6 space-y-4">

                {/* 한 줄 평 */}
                <div className="card-pink p-5 animate-slide-up delay-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#ffb3d1' }}>
                        📖 캐릭터 분석
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a4a68' }}>
                        {character.description}
                    </p>
                </div>

                {/* 강점 & 주의점 */}
                <div className="grid grid-cols-2 gap-3 animate-slide-up delay-200">
                    {/* 강점 */}
                    <div
                        className="p-4 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #f0fff4, #e8f8ee)',
                            border: '1.5px solid #b8ead0',
                        }}
                    >
                        <h3 className="text-xs font-bold mb-3 flex items-center gap-1.5" style={{ color: '#2a8a5a' }}>
                            <span>✅</span> 강점
                        </h3>
                        <ul className="space-y-1.5">
                            {character.strengths.map((str, i) => (
                                <li key={i} className="text-xs font-medium flex items-start gap-1.5" style={{ color: '#3a7a5a' }}>
                                    <span className="mt-0.5 text-green-400">•</span> {str}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 주의점 */}
                    <div
                        className="p-4 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #fff5f5, #ffece8)',
                            border: '1.5px solid #ffc0b8',
                        }}
                    >
                        <h3 className="text-xs font-bold mb-3 flex items-center gap-1.5" style={{ color: '#c04040' }}>
                            <span>⚠️</span> 주의점
                        </h3>
                        <ul className="space-y-1.5">
                            {character.weaknesses.map((wk, i) => (
                                <li key={i} className="text-xs font-medium flex items-start gap-1.5" style={{ color: '#9a4040' }}>
                                    <span className="mt-0.5 text-red-300">•</span> {wk}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 성향 바 차트 */}
                <div className="card-pink p-5 space-y-4 animate-slide-up delay-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#ffb3d1' }}>
                        📊 연애 성향 분석
                    </h3>
                    <TraitBar label="외향/내향" value={traits.E_I} />
                    <TraitBar label="직관/감각" value={traits.N_S} />
                    <TraitBar label="감정/논리" value={-traits.T_F} />
                    <TraitBar label="즉흥/계획" value={-traits.J_P} />
                </div>

                {/* 궁합 카드 */}
                <div
                    className="rounded-2xl p-5 animate-slide-up delay-400"
                    style={{
                        background: 'linear-gradient(135deg, #fff0f5, #ffe0ec)',
                        border: '1.5px solid #ffb3d1',
                    }}
                >
                    <h3
                        className="text-center text-xs font-bold uppercase tracking-widest mb-5"
                        style={{ color: '#ff4080' }}
                    >
                        ❤️ 솔로나라 궁합 리포트
                    </h3>
                    <div className="flex items-center">
                        {/* 환상의 짝꿍 */}
                        <div className="flex-1 text-center">
                            <div
                                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl"
                                style={{ background: 'rgba(255,255,255,0.8)', border: '2px solid #ff80b5' }}
                            >
                                💖
                            </div>
                            <p className="text-xs mb-1" style={{ color: '#ff80b5' }}>환상의 짝꿍</p>
                            <p className="font-black text-lg" style={{ color: '#ff4080' }}>
                                {character.bestMatch}
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1 px-4">
                            <div className="w-px h-10" style={{ background: '#ffb3d1' }} />
                            <span className="text-lg">💕</span>
                            <div className="w-px h-10" style={{ background: '#ffb3d1' }} />
                        </div>

                        {/* 환장의 짝꿍 */}
                        <div className="flex-1 text-center">
                            <div
                                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl"
                                style={{ background: 'rgba(255,255,255,0.6)', border: '2px solid #ddd' }}
                            >
                                💔
                            </div>
                            <p className="text-xs mb-1" style={{ color: '#bbb0c0' }}>환장의 짝꿍</p>
                            <p className="font-black text-lg" style={{ color: '#bbb0c0' }}>
                                {character.worstMatch}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* ── 하단 고정 버튼 ── */}
            <div
                className="fixed bottom-0 left-1/2 w-full"
                style={{
                    maxWidth: '430px',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,252,253,0.92)',
                    backdropFilter: 'blur(16px)',
                    borderTop: '1px solid #ffe0ec',
                    padding: '16px 20px 24px',
                    zIndex: 50,
                }}
            >
                <div className="flex gap-3">
                    <button
                        onClick={handleShare}
                        className="btn-primary flex-1"
                        style={{ borderRadius: '16px', padding: '0.9rem 1rem' }}
                    >
                        {shareStatus === 'copied' ? (
                            <>✅ 링크 복사됨!</>
                        ) : (
                            <>
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                결과 공유하기
                            </>
                        )}
                    </button>

                    <Link
                        href="/"
                        className="btn-secondary flex-shrink-0"
                        style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '0.9rem' }}
                    >
                        다시하기
                    </Link>
                </div>

                {/* 친구 공유 유도 문구 */}
                <p className="text-center text-xs mt-3" style={{ color: '#d0b8d0' }}>
                    친구의 캐릭터도 궁금하다면? 💌 공유해보세요
                </p>
            </div>

        </div>
    );
}
