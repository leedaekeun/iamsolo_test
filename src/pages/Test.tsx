import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { QUESTIONS, Answer } from '@/data/questions';
import { getBestMatch } from '@/lib/algorithm';

function GirlIllustration() {
    return (
        <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="30" fill="#FFE8F2" />
            <ellipse cx="40" cy="32" rx="16" ry="17" fill="#FFD6B0" />
            <path d="M24 28 Q27 12 40 14 Q53 12 56 28 Q52 20 40 18 Q28 20 24 28Z" fill="#4A2C10" />
            <path d="M24 28 Q20 36 22 44" stroke="#4A2C10" strokeWidth="5" strokeLinecap="round" />
            <path d="M56 28 Q60 36 58 44" stroke="#4A2C10" strokeWidth="5" strokeLinecap="round" />
            <ellipse cx="35" cy="33" rx="3" ry="3.5" fill="#2D1B00" />
            <ellipse cx="45" cy="33" rx="3" ry="3.5" fill="#2D1B00" />
            <circle cx="36" cy="32" r="1" fill="white" />
            <circle cx="46" cy="32" r="1" fill="white" />
            <ellipse cx="30" cy="38" rx="5" ry="2.5" fill="rgba(255,100,140,0.3)" />
            <ellipse cx="50" cy="38" rx="5" ry="2.5" fill="rgba(255,100,140,0.3)" />
            <path d="M37 42 Q40 46 43 42" stroke="#E05070" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M26 82 Q30 58 40 55 Q50 58 54 82Z" fill="#FF80B5" />
            <path d="M26 65 Q18 70 16 78" stroke="#FFD6B0" strokeWidth="5" strokeLinecap="round" />
            <path d="M54 65 Q62 70 64 78" stroke="#FFD6B0" strokeWidth="5" strokeLinecap="round" />
            <path d="M12 30 L13.5 26 L15 30 L19 31 L15 32 L13.5 36 L12 32 L8 31Z" fill="#FF80B5" opacity="0.7" />
            <path d="M62 20 L63 17 L64 20 L67 21 L64 22 L63 25 L62 22 L59 21Z" fill="#FFB3D1" opacity="0.8" />
        </svg>
    );
}

function BoyIllustration() {
    return (
        <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="30" fill="#E8F0FF" />
            <ellipse cx="40" cy="30" rx="16" ry="17" fill="#FFD6B0" />
            <path d="M24 26 Q26 12 40 12 Q54 12 56 26 Q52 18 40 16 Q28 18 24 26Z" fill="#2D1B00" />
            <ellipse cx="35" cy="31" rx="3" ry="3.5" fill="#2D1B00" />
            <ellipse cx="45" cy="31" rx="3" ry="3.5" fill="#2D1B00" />
            <circle cx="36" cy="30" r="1" fill="white" />
            <circle cx="46" cy="30" r="1" fill="white" />
            <ellipse cx="30" cy="36" rx="5" ry="2.5" fill="rgba(255,100,140,0.25)" />
            <ellipse cx="50" cy="36" rx="5" ry="2.5" fill="rgba(255,100,140,0.25)" />
            <path d="M37 40 Q40 44 43 40" stroke="#C06060" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <rect x="26" y="47" width="28" height="35" rx="6" fill="#5B7CCC" />
            <rect x="37" y="47" width="6" height="18" rx="2" fill="white" />
            <path d="M39 49 L40 62 L41 49" fill="#FF4080" />
            <path d="M26 58 Q18 64 16 72" stroke="#FFD6B0" strokeWidth="5" strokeLinecap="round" />
            <path d="M54 58 Q62 64 64 72" stroke="#FFD6B0" strokeWidth="5" strokeLinecap="round" />
            <path d="M10 34 L11.5 30 L13 34 L17 35 L13 36 L11.5 40 L10 36 L6 35Z" fill="#7B9CFF" opacity="0.7" />
            <path d="M64 22 L65 19 L66 22 L69 23 L66 24 L65 27 L64 24 L61 23Z" fill="#A0B8FF" opacity="0.8" />
        </svg>
    );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
    const pct = Math.round((current / total) * 100);
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold" style={{ color: '#ff4080' }}>
                    {current === 0 ? '시작' : `${current} / ${total}`}
                </span>
                <span className="text-xs" style={{ color: '#bbb0c0' }}>{pct}% 완료</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
}

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
                // React Router navigate 사용
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
        <div className="flex flex-col min-h-screen" style={{ background: 'transparent' }}>
            <nav className="flex items-center justify-between px-5 pt-6 pb-4">
                {currentStep > 0 ? (
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-sm font-medium transition-opacity"
                        style={{ color: '#ff80b5' }}
                        aria-label="이전으로"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        이전
                    </button>
                ) : (
                    <Link
                        to="/"
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: '#ff80b5' }}
                        aria-label="홈으로"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        홈
                    </Link>
                )}

                <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: '#fff0f5', color: '#ff80b5', border: '1px solid #ffb3d1' }}
                >
                    💕 연애세포 테스트
                </span>

                <div className="w-12" />
            </nav>

            <div className="px-5 mb-6">
                <StepIndicator current={currentStep} total={totalSteps} />
            </div>

            <div
                className="flex-1 px-5 pb-10"
                style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s ease' }}
            >
                {/* 성별 선택 */}
                {currentStep === 0 && (
                    <div className="animate-slide-up space-y-6">
                        <div className="text-center space-y-2">
                            <h2
                                className="text-2xl font-black"
                                style={{ color: '#1e1e2d', letterSpacing: '-0.02em' }}
                            >
                                매칭되고 싶은
                                <br />
                                <span className="text-pink-gradient">상대의 성별</span>은?
                            </h2>
                            <p className="text-sm" style={{ color: '#8888a8' }}>
                                선택에 따라 결과 캐릭터가 달라져요
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <button
                                onClick={() => handleGenderSelect('F')}
                                className="gender-card"
                                aria-label="여성 출연진 선택"
                            >
                                <div className="w-20 h-20 mx-auto mb-3">
                                    <GirlIllustration />
                                </div>
                                <p
                                    className="font-black text-base mb-1"
                                    style={{ color: '#ff4080' }}
                                >
                                    여성 출연진
                                </p>
                                <p className="text-xs" style={{ color: '#8888a8' }}>
                                    옥순, 영숙, 현숙, 정숙
                                </p>
                            </button>

                            <button
                                onClick={() => handleGenderSelect('M')}
                                className="gender-card"
                                aria-label="남성 출연진 선택"
                                style={{
                                    borderColor: '#d0deff',
                                    boxShadow: '0 4px 16px rgba(80,120,255,0.08)',
                                }}
                            >
                                <div className="w-20 h-20 mx-auto mb-3">
                                    <BoyIllustration />
                                </div>
                                <p
                                    className="font-black text-base mb-1"
                                    style={{ color: '#5B7CCC' }}
                                >
                                    남성 출연진
                                </p>
                                <p className="text-xs" style={{ color: '#8888a8' }}>
                                    영수, 영호, 영식, 영철
                                </p>
                            </button>
                        </div>

                        <p className="text-center text-xs mt-4" style={{ color: '#ccb8cc' }}>
                            어떤 성별을 선택해도 테스트를 즐길 수 있어요 💕
                        </p>
                    </div>
                )}

                {/* 질문 출력부 */}
                {currentStep >= 1 && currentStep <= QUESTIONS.length && (
                    <div className="space-y-5 animate-slide-up" key={currentStep}>
                        <div className="card-pink overflow-hidden">
                            <div
                                className="px-5 py-3 flex items-center gap-2"
                                style={{
                                    background: 'linear-gradient(90deg, #fff0f5, #ffe0ec)',
                                    borderBottom: '1px solid #ffe0ec',
                                }}
                            >
                                <span
                                    className="w-2.5 h-2.5 rounded-full animate-pulse-pink"
                                    style={{ background: '#ff4080', display: 'inline-block' }}
                                />
                                <span
                                    className="text-xs font-bold tracking-widest uppercase"
                                    style={{ color: '#ff4080' }}
                                >
                                    Situation {String(currentStep).padStart(2, '0')}
                                </span>
                            </div>

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

                            <div className="p-5 space-y-3">
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: '#8888a8',
                                        background: '#fff8fb',
                                        borderRadius: '12px',
                                        padding: '12px',
                                        borderLeft: '3px solid #ffb3d1',
                                    }}
                                >
                                    {QUESTIONS[currentStep - 1].situation}
                                </p>
                                <h2
                                    className="text-lg font-black leading-snug"
                                    style={{ color: '#1e1e2d', letterSpacing: '-0.02em' }}
                                >
                                    {QUESTIONS[currentStep - 1].text}
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {QUESTIONS[currentStep - 1].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(answer)}
                                    className="answer-btn"
                                    disabled={isTransitioning}
                                    aria-label={`선택지 ${index + 1}: ${answer.text}`}
                                >
                                    <span
                                        className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold mb-2 mr-2"
                                        style={{
                                            background: index === 0
                                                ? 'linear-gradient(135deg, #ff9dc5, #ff4080)'
                                                : 'linear-gradient(135deg, #a0b8ff, #5b7ccc)',
                                            color: 'white',
                                        }}
                                    >
                                        {index === 0 ? 'A' : 'B'}
                                    </span>
                                    <span>{answer.text}</span>
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
