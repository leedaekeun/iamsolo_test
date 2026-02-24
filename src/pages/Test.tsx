import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { QUESTIONS, Answer } from '@/data/questions';
import { getBestMatch } from '@/lib/algorithm';

/* ═══════════════════════════════════════════
   GENDER ILLUSTRATIONS
═══════════════════════════════════════════ */
function GirlIllustration() {
    return (
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* 배경 원 */}
            <circle cx="50" cy="50" r="40" fill="#FFE0EC" opacity="0.6" />
            <circle cx="50" cy="50" r="32" fill="#FFF0F5" />
            {/* 머리 */}
            <ellipse cx="50" cy="40" rx="20" ry="22" fill="#FFD6B0" />
            {/* 머리카락 */}
            <path d="M30 36 Q33 14 50 17 Q67 14 70 36 Q66 24 50 22 Q34 24 30 36Z" fill="#4A2C10" />
            <path d="M30 36 Q25 48 28 58" stroke="#4A2C10" strokeWidth="6" strokeLinecap="round" />
            <path d="M70 36 Q75 48 72 58" stroke="#4A2C10" strokeWidth="6" strokeLinecap="round" />
            {/* 눈 */}
            <ellipse cx="43" cy="41" rx="3.5" ry="4.5" fill="#2D1B00" />
            <ellipse cx="57" cy="41" rx="3.5" ry="4.5" fill="#2D1B00" />
            <circle cx="44.2" cy="39.5" r="1.4" fill="white" />
            <circle cx="58.2" cy="39.5" r="1.4" fill="white" />
            {/* 볼 홍조 */}
            <ellipse cx="36" cy="48" rx="6" ry="3" fill="rgba(255,100,140,0.30)" />
            <ellipse cx="64" cy="48" rx="6" ry="3" fill="rgba(255,100,140,0.30)" />
            {/* 입 */}
            <path d="M46 52 Q50 57 54 52" stroke="#E05070" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* 몸 (드레스) */}
            <path d="M30 100 Q34 72 50 68 Q66 72 70 100Z" fill="#FF80B5" />
            <path d="M36 100 Q50 84 64 100" fill="#FF60A0" />
            {/* 팔 */}
            <path d="M30 76 Q18 84 16 94" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 76 Q82 84 84 94" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            {/* 하트 장식 */}
            <path d="M49 33 C49 33 45 29 45 27 C45 25 49 25 49 27 C49 25 53 25 53 27 C53 29 49 33 49 33Z"
                fill="#FF4080" opacity="0.8" />
            {/* 별 */}
            <path d="M22 28 L23.2 24 L24.4 28 L28.4 29 L24.4 30 L23.2 34 L22 30 L18 29Z"
                fill="#FFD700" opacity="0.75" />
        </svg>
    );
}

function BoyIllustration() {
    return (
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* 배경 원 */}
            <circle cx="50" cy="50" r="40" fill="#E8F0FF" opacity="0.6" />
            <circle cx="50" cy="50" r="32" fill="#F0F5FF" />
            {/* 머리 */}
            <ellipse cx="50" cy="38" rx="20" ry="22" fill="#FFD6B0" />
            {/* 머리카락 */}
            <path d="M30 34 Q32 14 50 15 Q68 14 70 34 Q66 22 50 20 Q34 22 30 34Z" fill="#2D1B00" />
            {/* 눈 */}
            <ellipse cx="43" cy="39" rx="3.5" ry="4.5" fill="#2D1B00" />
            <ellipse cx="57" cy="39" rx="3.5" ry="4.5" fill="#2D1B00" />
            <circle cx="44.2" cy="37.5" r="1.4" fill="white" />
            <circle cx="58.2" cy="37.5" r="1.4" fill="white" />
            {/* 볼 홍조 */}
            <ellipse cx="36" cy="46" rx="6" ry="3" fill="rgba(255,100,140,0.22)" />
            <ellipse cx="64" cy="46" rx="6" ry="3" fill="rgba(255,100,140,0.22)" />
            {/* 입 */}
            <path d="M46 50 Q50 55 54 50" stroke="#C06060" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* 몸 (정장) */}
            <rect x="32" y="58" width="36" height="42" rx="8" fill="#5B7CCC" />
            {/* 셔츠 & 넥타이 */}
            <rect x="45" y="58" width="10" height="22" rx="3" fill="white" />
            <path d="M48 60 L50 74 L52 60" fill="#FF4080" />
            {/* 팔 */}
            <path d="M32 68 Q20 76 18 86" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            <path d="M68 68 Q80 76 82 86" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            {/* 별 장식 */}
            <path d="M72 26 L73.2 22 L74.4 26 L78.4 27 L74.4 28 L73.2 32 L72 28 L68 27Z"
                fill="#A0B8FF" opacity="0.8" />
        </svg>
    );
}

/* ═══════════════════════════════════════════
   PROGRESS BAR
═══════════════════════════════════════════ */
function StepIndicator({ current, total }: { current: number; total: number }) {
    const pct = Math.round((current / total) * 100);
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold" style={{ color: '#ff4080' }}>
                    {current === 0 ? '시작' : `${current} / ${total}`}
                </span>
                <span className="text-xs font-medium" style={{ color: '#bbb0c0' }}>
                    {pct}% 완료
                </span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   TEST PAGE
═══════════════════════════════════════════ */
export default function TestPage() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [genderPref, setGenderPref] = useState<'M' | 'F' | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalSteps = QUESTIONS.length + 1;

    const handleGenderSelect = (gender: 'M' | 'F') => {
        setIsTransitioning(true);
        setGenderPref(gender);
        setTimeout(() => {
            setCurrentStep(1);
            setIsTransitioning(false);
        }, 200);
    };

    const handleAnswerClick = (answer: Answer) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        setTimeout(() => {
            if (currentStep < QUESTIONS.length) {
                setCurrentStep(prev => prev + 1);
            } else {
                const result = getBestMatch(newAnswers, genderPref!);
                navigate(`/result?resultId=${result.character.id}&match=${result.matchPercentage}`);
            }
            setIsTransitioning(false);
        }, 250);
    };

    const handleBack = () => {
        if (currentStep === 0) return;
        if (currentStep === 1) {
            setAnswers([]);
            setGenderPref(null);
            setCurrentStep(0);
        } else {
            setAnswers(prev => prev.slice(0, -1));
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">

            {/* ── 상단 내비 ── */}
            <nav className="flex items-center justify-between px-5 pt-6 pb-4 content-narrow">
                {currentStep > 0 ? (
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-sm font-bold rounded-full px-3 py-1.5 transition-all"
                        style={{
                            color: '#ff80b5',
                            background: '#fff0f5',
                            border: '1px solid #ffcce0',
                        }}
                        aria-label="이전으로"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        이전
                    </button>
                ) : (
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm font-bold rounded-full px-3 py-1.5 transition-all"
                        style={{
                            color: '#ff80b5',
                            background: '#fff0f5',
                            border: '1px solid #ffcce0',
                        }}
                        aria-label="홈으로"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        홈
                    </Link>
                )}

                <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: '#fff0f5', color: '#ff80b5', border: '1px solid #ffb3d1' }}
                >
                    💕 연애세포 테스트
                </span>

                <div className="w-16" />
            </nav>

            {/* ── 진행 표시 ── */}
            <div className="px-5 mb-5 content-narrow">
                <StepIndicator current={currentStep} total={totalSteps} />
            </div>

            {/* ── 콘텐츠 ── */}
            <div
                className="flex-1 px-5 pb-10 content-narrow"
                style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s ease' }}
            >

                {/* ── 성별 선택 ── */}
                {currentStep === 0 && (
                    <div className="animate-slide-up space-y-6">

                        <div className="text-center space-y-2">
                            <h2
                                style={{
                                    fontSize: 'var(--fs-h1)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.02em',
                                    color: '#1e1e2d',
                                    lineHeight: 1.2,
                                }}
                            >
                                매칭되고 싶은
                                <br />
                                <span className="text-pink-gradient">상대의 성별</span>은?
                            </h2>
                            <p style={{ color: '#8888a8', fontSize: 'var(--fs-sm)' }}>
                                선택에 따라 결과 캐릭터가 달라져요
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {/* 여성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('F')}
                                className="gender-card"
                                aria-label="여성 출연진 선택"
                            >
                                <div className="w-24 h-24 mx-auto mb-3">
                                    <GirlIllustration />
                                </div>
                                <p className="font-black text-base mb-1" style={{ color: '#ff4080' }}>
                                    여성 출연진
                                </p>
                                <p className="text-xs" style={{ color: '#8888a8' }}>
                                    영숙 · 정숙 · 순자 · 영자 · 옥순 · 현숙
                                </p>
                                <span
                                    className="mt-3 inline-block text-xs font-bold px-3 py-1 rounded-full"
                                    style={{ background: '#fff0f5', color: '#ff4080', border: '1px solid #ffb3d1' }}
                                >
                                    선택하기 →
                                </span>
                            </button>

                            {/* 남성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('M')}
                                className="gender-card"
                                aria-label="남성 출연진 선택"
                                style={{
                                    borderColor: '#d0deff',
                                    boxShadow: '0 4px 16px rgba(80,120,255,0.08)',
                                }}
                            >
                                <div className="w-24 h-24 mx-auto mb-3">
                                    <BoyIllustration />
                                </div>
                                <p className="font-black text-base mb-1" style={{ color: '#5B7CCC' }}>
                                    남성 출연진
                                </p>
                                <p className="text-xs" style={{ color: '#8888a8' }}>
                                    영수 · 영호 · 영식 · 영철 · 광수 · 상철
                                </p>
                                <span
                                    className="mt-3 inline-block text-xs font-bold px-3 py-1 rounded-full"
                                    style={{ background: '#f0f4ff', color: '#5B7CCC', border: '1px solid #c0d0ff' }}
                                >
                                    선택하기 →
                                </span>
                            </button>
                        </div>

                        <p className="text-center text-xs mt-2" style={{ color: '#ccb8cc' }}>
                            어떤 성별을 선택해도 테스트를 즐길 수 있어요 💕
                        </p>
                    </div>
                )}

                {/* ── 질문 ── */}
                {currentStep >= 1 && currentStep <= QUESTIONS.length && (
                    <div className="space-y-4 animate-slide-up" key={currentStep}>

                        {/* 질문 카드 */}
                        <div className="card-pink overflow-hidden">
                            {/* 카드 헤더 */}
                            <div
                                className="px-5 py-3 flex items-center gap-2"
                                style={{
                                    background: 'linear-gradient(90deg, #fff0f5, #ffe0ec)',
                                    borderBottom: '1px solid #ffe0ec',
                                }}
                            >
                                <span
                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse-pink"
                                    style={{ background: '#ff4080', display: 'inline-block' }}
                                />
                                <span className="text-label" style={{ color: '#ff4080' }}>
                                    Situation {String(currentStep).padStart(2, '0')}
                                </span>
                            </div>

                            {/* 이미지 */}
                            <div
                                className="w-full overflow-hidden"
                                style={{
                                    aspectRatio: '4/3',
                                    background: 'linear-gradient(135deg, #fff0f5, #ffe8f0)',
                                }}
                            >
                                <img
                                    src={QUESTIONS[currentStep - 1].imageUrl}
                                    alt={`상황 ${currentStep} 일러스트`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* 텍스트 */}
                            <div className="p-5 space-y-3">
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: '#8888a8',
                                        background: '#fff8fb',
                                        borderRadius: '12px',
                                        padding: '12px 14px',
                                        borderLeft: '3px solid #ffb3d1',
                                    }}
                                >
                                    {QUESTIONS[currentStep - 1].situation}
                                </p>
                                <h3
                                    style={{
                                        fontSize: 'var(--fs-h3)',
                                        fontWeight: 800,
                                        letterSpacing: '-0.02em',
                                        color: '#1e1e2d',
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {QUESTIONS[currentStep - 1].text}
                                </h3>
                            </div>
                        </div>

                        {/* 답변 버튼들 */}
                        <div className="space-y-3">
                            {QUESTIONS[currentStep - 1].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(answer)}
                                    className="answer-btn"
                                    disabled={isTransitioning}
                                    aria-label={`선택지 ${index + 1}: ${answer.text}`}
                                >
                                    <span className="flex items-start gap-3">
                                        <span
                                            className="inline-flex w-7 h-7 rounded-full items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                                            style={{
                                                background: index === 0
                                                    ? 'linear-gradient(135deg, #ff9dc5, #ff4080)'
                                                    : 'linear-gradient(135deg, #a0b8ff, #5b7ccc)',
                                                color: 'white',
                                            }}
                                        >
                                            {index === 0 ? 'A' : 'B'}
                                        </span>
                                        <span className="leading-relaxed">{answer.text}</span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        <p className="text-center text-xs" style={{ color: '#d0b8d0' }}>
                            직감을 믿고 솔직하게 선택해보세요 💭
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
