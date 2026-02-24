import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { CHARACTERS, Archetype } from '@/data/characters';

/* ═══════════════════════════════════════════
   MATCH CIRCLE
═══════════════════════════════════════════ */
function MatchCircle({ pct }: { pct: number }) {
    const r = 42;
    const circ = 2 * Math.PI * r;
    const filled = (pct / 100) * circ;

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r={r} strokeWidth="9"
                        stroke="#ffe0ec" fill="none" />
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
                            <stop offset="100%" stopColor="#ff2070" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black" style={{ color: '#ff4080', lineHeight: 1 }}>
                        {pct}%
                    </span>
                    <span className="text-xs font-medium" style={{ color: '#ccb0c0' }}>일치</span>
                </div>
            </div>
            <p className="text-xs font-bold" style={{ color: '#ff80b5' }}>
                나와의 싱크로율
            </p>
        </div>
    );
}

/* ═══════════════════════════════════════════
   TRAIT BAR
═══════════════════════════════════════════ */
function TraitBar({ label, value }: { label: string; value: number }) {
    const labels = label.split('/');
    const pct = Math.abs(value) / 2 + 50;
    const isPositive = value >= 0;

    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold" style={{ color: '#8888a8' }}>
                <span>{labels[0]}</span>
                <span>{labels[1]}</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: '#ffe0ec', position: 'relative' }}>
                {/* 중앙 마커 */}
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(255,255,255,0.6)',
                        transform: 'translateX(-50%)',
                        zIndex: 2,
                    }}
                />
                <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                        width: `${pct}%`,
                        background: isPositive
                            ? 'linear-gradient(90deg, #ff9dc5, #ff2070)'
                            : 'linear-gradient(90deg, #a0b8ff, #5b7ccc)',
                        float: value < 0 ? 'right' : 'left',
                    }}
                />
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   CHARACTER AVATAR — 이모지 대신 인라인 SVG
═══════════════════════════════════════════ */
const CHARACTER_CONFIG: Record<string, { emoji: string; bg: string; accent: string }> = {
    'm1_youngsoo': { emoji: '🧐', bg: 'linear-gradient(135deg, #EEF0FF, #D8DFFF)', accent: '#5B7CCC' },
    'm2_youngho': { emoji: '😄', bg: 'linear-gradient(135deg, #FFF5E0, #FFE8B0)', accent: '#E09020' },
    'm3_youngsik': { emoji: '🤗', bg: 'linear-gradient(135deg, #E8F5E9, #C8EDD0)', accent: '#2A8A5A' },
    'm4_youngchul': { emoji: '😤', bg: 'linear-gradient(135deg, #FFE8E8, #FFCFCF)', accent: '#C04040' },
    'f1_oksoon': { emoji: '✨', bg: 'linear-gradient(135deg, #FFF0F5, #FFD8E8)', accent: '#FF4080' },
    'f2_hyunsook': { emoji: '📚', bg: 'linear-gradient(135deg, #F0F4FF, #D8E4FF)', accent: '#5060C0' },
    'f3_youngsook': { emoji: '👑', bg: 'linear-gradient(135deg, #FFF8E0, #FFE8A0)', accent: '#C08000' },
    'f4_jungsook': { emoji: '🌟', bg: 'linear-gradient(135deg, #F5FFF0, #D8F5C8)', accent: '#3A9030' },
};

/* ═══════════════════════════════════════════
   RESULT PAGE
═══════════════════════════════════════════ */
export default function ResultClient() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const characterId = searchParams.get('resultId');
    const rawMatch = parseInt(searchParams.get('match') || '0', 10);
    const matchPct = Math.min(Math.max(rawMatch, 0), 100);

    const [character, setCharacter] = useState<Archetype | null>(null);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');
    const [matchAnim, setMatchAnim] = useState(0);

    useEffect(() => {
        if (!characterId) { navigate('/'); return; }
        const found = CHARACTERS.find(c => c.id === characterId);
        if (!found) { navigate('/'); return; }
        setCharacter(found);
        // 퍼센트 애니메이션 딜레이
        const t = setTimeout(() => setMatchAnim(matchPct), 300);
        return () => clearTimeout(t);
    }, [characterId, navigate, matchPct]);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className="w-10 h-10 rounded-full border-4 animate-spin"
                    style={{ borderColor: '#ffb3d1', borderTopColor: 'transparent' }}
                />
            </div>
        );
    }

    const cfg = CHARACTER_CONFIG[character.id] || { emoji: '💕', bg: '#fff0f5', accent: '#ff4080' };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: `나는 솔로 테스트 — 내 캐릭터는 ${character.name}?`,
            text: `나와 싱크로율 ${matchPct}%인 연애 성향 캐릭터를 확인해보세요! 💕`,
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
        <div className="flex flex-col min-h-screen pb-36">

            {/* ══════════════════════
                히어로 섹션
            ══════════════════════ */}
            <div
                className="relative px-6 pt-10 pb-10 text-center overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #fff0f5 0%, #ffe0ec 55%, #ffd6e8 100%)',
                    borderRadius: '0 0 40px 40px',
                }}
            >
                {/* 배경 데코 */}
                <div
                    className="absolute top-[-40px] right-[-40px] w-40 h-40 rounded-full opacity-40 animate-blob"
                    style={{ background: 'radial-gradient(circle, #ffb3d1, transparent)' }}
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full opacity-30 animate-blob"
                    style={{ background: 'radial-gradient(circle, #ff80b5, transparent)', animationDelay: '2s' }}
                    aria-hidden="true"
                />

                {/* 뱃지 */}
                <span
                    className="badge-pink inline-block mb-5 animate-slide-down"
                    style={{
                        background: 'rgba(255,255,255,0.75)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    💕 당신의 캐릭터 매칭 결과
                </span>

                {/* 메인 일러스트 추가 */}
                <div className="px-10 pb-2 animate-pop-in delay-200 md:pr-10 md:pb-8"
                    style={{ maxWidth: '380px', margin: '0 auto', width: '100%' }}>
                    <div className="animate-float-y">
                        <img
                            src="/images/main.jpg"
                            alt="메인 일러스트"
                            className="w-full h-auto rounded-[2rem]"
                            style={{
                                boxShadow: '0 16px 40px rgba(255,80,128,0.25)',
                                border: '6px solid white'
                            }}
                        />
                    </div>
                </div>

                {/* 데스크탑: 캐릭터 + 퍼센트 나란히 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

                    {/* 아바타 + 이름 */}
                    <div className="animate-pop-in">
                        <div
                            className="w-28 h-28 rounded-3xl mx-auto mb-4 flex items-center justify-center text-6xl"
                            style={{
                                background: cfg.bg,
                                border: `3px solid ${cfg.accent}30`,
                                boxShadow: `0 12px 36px ${cfg.accent}28`,
                            }}
                            aria-hidden="true"
                        >
                            {cfg.emoji}
                        </div>
                        <h1
                            style={{
                                fontSize: 'var(--fs-h1)',
                                fontWeight: 900,
                                letterSpacing: '-0.03em',
                                color: '#1e1e2d',
                                lineHeight: 1,
                            }}
                        >
                            <span className="text-pink-gradient">{character.name}</span>
                        </h1>
                        <p
                            className="text-base font-medium mt-1"
                            style={{ color: '#8888a8' }}
                        >
                            {character.title}
                        </p>
                    </div>

                    {/* 매칭 퍼센트 */}
                    <div className="animate-pop-in delay-200">
                        <MatchCircle pct={matchAnim} />
                    </div>
                </div>
            </div>

            {/* ══════════════════════
                결과 카드들
            ══════════════════════ */}
            <div className="px-5 pt-6 space-y-4 content-narrow">

                {/* 캐릭터 분석 */}
                <div className="card-pink p-5 animate-slide-up delay-100">
                    <p className="text-label mb-2">📖 캐릭터 분석</p>

                    {/* 연애 스타일 한 줄 요약 */}
                    <p
                        className="text-xs font-bold mb-3 px-3 py-2 rounded-xl"
                        style={{ background: '#fff0f5', color: '#ff4080', border: '1px solid #ffcce0' }}
                    >
                        💡 {character.loveStyle}
                    </p>

                    <p
                        className="leading-relaxed mb-4"
                        style={{ color: '#4a4a68', fontSize: 'var(--fs-sm)' }}
                    >
                        {character.description}
                    </p>

                    {/* 키워드 태그 */}
                    <div className="flex flex-wrap gap-1.5">
                        {character.keywords.map((kw) => (
                            <span
                                key={kw}
                                className="text-xs font-bold px-2.5 py-1 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, #fff0f5, #ffe0ec)',
                                    color: '#ff4080',
                                    border: '1px solid #ffb3d1',
                                }}
                            >
                                #{kw}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 강점 / 주의점 */}
                <div className="grid grid-cols-2 gap-3 animate-slide-up delay-200">
                    <div
                        className="p-4 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #f0fff4, #e4f8ec)',
                            border: '1.5px solid #b8ead0',
                        }}
                    >
                        <p className="text-xs font-bold mb-3 flex items-center gap-1.5" style={{ color: '#2a8a5a' }}>
                            <span>✅</span> 강점
                        </p>
                        <ul className="space-y-2">
                            {character.strengths.map((str, i) => (
                                <li key={i} className="text-xs font-medium flex items-start gap-1.5" style={{ color: '#3a7a5a' }}>
                                    <span className="mt-0.5 text-green-400 flex-shrink-0">•</span>
                                    {str}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="p-4 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #fff5f5, #ffece8)',
                            border: '1.5px solid #ffc0b8',
                        }}
                    >
                        <p className="text-xs font-bold mb-3 flex items-center gap-1.5" style={{ color: '#c04040' }}>
                            <span>⚠️</span> 주의점
                        </p>
                        <ul className="space-y-2">
                            {character.weaknesses.map((wk, i) => (
                                <li key={i} className="text-xs font-medium flex items-start gap-1.5" style={{ color: '#9a4040' }}>
                                    <span className="mt-0.5 text-red-300 flex-shrink-0">•</span>
                                    {wk}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 연애 성향 분석 */}
                <div className="card-pink p-5 space-y-4 animate-slide-up delay-300">
                    <p className="text-label">📊 연애 성향 분석</p>
                    <TraitBar label="외향/내향" value={character.traits.E_I} />
                    <TraitBar label="직관/감각" value={character.traits.N_S} />
                    <TraitBar label="감정/논리" value={-character.traits.T_F} />
                    <TraitBar label="즉흥/계획" value={-character.traits.J_P} />
                </div>

                {/* 궁합 리포트 */}
                <div
                    className="rounded-3xl p-5 animate-slide-up delay-400"
                    style={{
                        background: 'linear-gradient(135deg, #fff0f5, #ffe0ec)',
                        border: '1.5px solid #ffb3d1',
                    }}
                >
                    <p className="text-label text-center mb-5" style={{ color: '#ff4080' }}>
                        ❤️ 솔로나라 궁합 리포트
                    </p>

                    <div className="flex items-center">
                        {/* 환상의 짝꿍 */}
                        <div className="flex-1 text-center">
                            <div
                                className="w-14 h-14 rounded-2xl mx-auto mb-2 flex items-center justify-center text-2xl"
                                style={{
                                    background: 'rgba(255,255,255,0.85)',
                                    border: '2px solid #ff80b5',
                                    boxShadow: '0 4px 14px rgba(255,80,128,0.18)',
                                }}
                            >
                                💖
                            </div>
                            <p className="text-xs mb-1 font-medium" style={{ color: '#ff80b5' }}>환상의 짝꿍</p>
                            <p className="font-black text-lg" style={{ color: '#ff4080', letterSpacing: '-0.02em' }}>
                                {character.bestMatch}
                            </p>
                        </div>

                        {/* 구분선 */}
                        <div className="flex flex-col items-center gap-1 px-4">
                            <div className="w-px h-10" style={{ background: '#ffb3d1' }} />
                            <span className="text-xl">💕</span>
                            <div className="w-px h-10" style={{ background: '#ffb3d1' }} />
                        </div>

                        {/* 환장의 짝꿍 */}
                        <div className="flex-1 text-center">
                            <div
                                className="w-14 h-14 rounded-2xl mx-auto mb-2 flex items-center justify-center text-2xl"
                                style={{
                                    background: 'rgba(255,255,255,0.65)',
                                    border: '2px solid #e0d8e0',
                                }}
                            >
                                💔
                            </div>
                            <p className="text-xs mb-1 font-medium" style={{ color: '#bbb0c0' }}>환장의 짝꿍</p>
                            <p className="font-black text-lg" style={{ color: '#bbb0c0', letterSpacing: '-0.02em' }}>
                                {character.worstMatch}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 연애 성장 조언 */}
                <div
                    className="rounded-3xl p-5 animate-slide-up delay-500"
                    style={{
                        background: 'linear-gradient(135deg, #f8f0ff, #ede0ff)',
                        border: '1.5px solid #d0b0f0',
                    }}
                >
                    <p className="text-label text-center mb-4" style={{ color: '#8040c0' }}>
                        🌱 나를 위한 연애 성장 조언
                    </p>
                    <ul className="space-y-3">
                        {character.advice.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                                    style={{ background: '#d0b0f0', color: '#6020a0' }}
                                >
                                    {i + 1}
                                </span>
                                <p className="text-xs leading-relaxed" style={{ color: '#5030a0' }}>
                                    {tip}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 면책 조항 */}
                <div
                    className="rounded-2xl p-4 animate-slide-up delay-500"
                    style={{ background: '#fff8e0', border: '1px solid #ffe0a0' }}
                >
                    <p className="text-xs leading-relaxed text-center" style={{ color: '#907000' }}>
                        ⚠️ 본 테스트 결과는 심리학적 원형 이론 기반의 <strong>오락·자기이해 목적</strong>이며,
                        의학적·심리상담적 진단이 아닙니다. 결과는 참고용으로만 활용하세요.
                    </p>
                </div>

            </div>

            {/* ══════════════════════
                하단 고정 버튼
            ══════════════════════ */}
            <div
                className="fixed bottom-0 left-1/2 w-full"
                style={{
                    maxWidth: '960px',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,252,253,0.94)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid #ffe0ec',
                    padding: '14px 20px 24px',
                    zIndex: 50,
                }}
            >
                <div className="flex gap-3 content-narrow">
                    {/* 공유 버튼 */}
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

                    {/* 다시하기 */}
                    <Link
                        to="/"
                        className="btn-secondary flex-shrink-0"
                        style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '0.9rem' }}
                    >
                        다시하기
                    </Link>
                </div>
                <p className="text-center text-xs mt-2.5" style={{ color: '#d0b8d0' }}>
                    친구의 캐릭터도 궁금하다면? 💌 공유해보세요
                </p>
            </div>
        </div>
    );
}
