import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { QUESTIONS, Answer } from '@/data/questions';
import { getBestMatch } from '@/lib/algorithm';

/* ═══════════════════════════════════════════
   GENDER ILLUSTRATIONS (Clean Version)
═══════════════════════════════════════════ */
function GirlIllustration() {
    return (
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="#fce4ec" />
            <ellipse cx="50" cy="40" rx="20" ry="22" fill="#FFD6B0" />
            <path d="M30 36 Q33 14 50 17 Q67 14 70 36 Q66 24 50 22 Q34 24 30 36Z" fill="#4A2C10" />
            <path d="M30 36 Q25 48 28 58" stroke="#4A2C10" strokeWidth="6" strokeLinecap="round" />
            <path d="M70 36 Q75 48 72 58" stroke="#4A2C10" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="43" cy="41" rx="3.5" ry="4.5" fill="#2D1B00" />
            <ellipse cx="57" cy="41" rx="3.5" ry="4.5" fill="#2D1B00" />
            <circle cx="44.2" cy="39.5" r="1.4" fill="white" />
            <circle cx="58.2" cy="39.5" r="1.4" fill="white" />
            <ellipse cx="36" cy="48" rx="6" ry="3" fill="rgba(255,107,170,0.35)" />
            <ellipse cx="64" cy="48" rx="6" ry="3" fill="rgba(255,107,170,0.35)" />
            <path d="M46 52 Q50 57 54 52" stroke="#E05070" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M30 100 Q34 72 50 68 Q66 72 70 100Z" fill="#e60a15" />
            <path d="M36 100 Q50 84 64 100" fill="#ff1f76" />
            <path d="M30 76 Q18 84 16 94" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 76 Q82 84 84 94" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
        </svg>
    );
}

function BoyIllustration() {
    return (
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="#f3e5f5" />
            <ellipse cx="50" cy="38" rx="20" ry="22" fill="#FFD6B0" />
            <path d="M30 34 Q32 14 50 15 Q68 14 70 34 Q66 22 50 20 Q34 22 30 34Z" fill="#2D1B00" />
            <ellipse cx="43" cy="39" rx="3.5" ry="4.5" fill="#2D1B00" />
            <ellipse cx="57" cy="39" rx="3.5" ry="4.5" fill="#2D1B00" />
            <circle cx="44.2" cy="37.5" r="1.4" fill="white" />
            <circle cx="58.2" cy="37.5" r="1.4" fill="white" />
            <ellipse cx="36" cy="46" rx="6" ry="3" fill="rgba(155,93,229,0.25)" />
            <ellipse cx="64" cy="46" rx="6" ry="3" fill="rgba(155,93,229,0.25)" />
            <path d="M46 50 Q50 55 54 50" stroke="#C06060" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="32" y="58" width="36" height="42" rx="8" fill="#111111" />
            <rect x="45" y="58" width="10" height="22" rx="3" fill="white" opacity="0.9" />
            <path d="M48 60 L50 74 L52 60" fill="#e60a15" />
            <path d="M32 68 Q20 76 18 86" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
            <path d="M68 68 Q80 76 82 86" stroke="#FFD6B0" strokeWidth="7" strokeLinecap="round" />
        </svg>
    );
}

/* ═══════════════════════════════════════════
   TEST PAGE — Premium White
═══════════════════════════════════════════ */
export default function TestPage() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [genderPref, setGenderPref] = useState<'M' | 'F' | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalSteps = QUESTIONS.length;

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
        if (currentStep === 0) {
            navigate('/');
            return;
        }
        if (currentStep === 1) {
            setAnswers([]);
            setGenderPref(null);
            setCurrentStep(0);
        } else {
            setAnswers(prev => prev.slice(0, -1));
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleClose = () => {
        navigate('/');
    }

    const currentQuestion = currentStep > 0 ? QUESTIONS[currentStep - 1] : null;

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-x-hidden text-deep-charcoal font-sans selection:bg-vibrant-pink selection:text-white">

            {/* Header / Progress Section merged as a solid rounded-b header */}
            <div className="bg-white rounded-b-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] z-20 pb-4 mb-6">
                <header className="flex items-center px-6 py-4 justify-between">
                    <button onClick={handleBack} className="flex size-12 items-center justify-center cursor-pointer hover:bg-off-white rounded-full transition-colors active:scale-95" aria-label="이전으로">
                        <span className="material-symbols-outlined text-deep-charcoal">arrow_back_ios_new</span>
                    </button>
                    <h2 className="text-deep-charcoal text-lg font-bold leading-tight tracking-tight flex-1 text-center">
                        나는 솔로 퀴즈
                    </h2>
                    <button onClick={handleClose} className="flex size-12 items-center justify-center cursor-pointer hover:bg-off-white rounded-full transition-colors active:scale-95" aria-label="닫기">
                        <span className="material-symbols-outlined text-deep-charcoal">close</span>
                    </button>
                </header>

                {/* Progress Indicator (only after gender selection) */}
                {currentStep > 0 && (
                    <div className="px-8 mt-2 transition-all duration-300">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-vibrant-pink text-[10px] font-bold tracking-widest uppercase">
                                Question {String(currentStep).padStart(2, '0')}
                            </span>
                            <p className="text-slate-grey text-xs font-bold">{currentStep} <span className="text-slate-300 font-normal">/ {totalSteps}</span></p>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-vibrant-pink transition-all duration-300 ease-out"
                                style={{
                                    width: `${(currentStep / totalSteps) * 100}%`,
                                    boxShadow: '0 0 12px rgba(255, 45, 120, 0.4)'
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            <main className={`flex-1 px-6 pt-2 pb-24 transition-opacity duration-200 max-w-md mx-auto w-full ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>

                {/* ── 성별 선택 ── */}
                {currentStep === 0 && (
                    <div className="animate-slide-up space-y-6">
                        <div className="text-center space-y-3 mb-10 mt-6">
                            <h2 className="text-3xl font-bold tracking-tight text-deep-charcoal leading-tight">
                                매칭되고 싶은<br />
                                <span className="text-vibrant-pink">상대의 성별</span>은?
                            </h2>
                            <p className="text-slate-grey text-sm font-medium mt-2 tracking-wide leading-relaxed">
                                선택에 따라 결과 캐릭터가 달라져요
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 mt-6">
                            {/* 여성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('F')}
                                className="w-full flex items-center p-5 bg-white border border-slate-50 hover:border-vibrant-pink hover:bg-soft-pink/40 rounded-[2rem] transition-all shadow-soft-card active:scale-[0.98] group"
                            >
                                <div className="w-[4.5rem] h-[4.5rem] mr-5 shrink-0 bg-off-white rounded-full overflow-hidden shadow-inner">
                                    <GirlIllustration />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-lg text-deep-charcoal mb-1">
                                        여성 출연진
                                    </p>
                                    <p className="text-[11px] text-slate-grey font-semibold tracking-wide uppercase">
                                        Female characters
                                    </p>
                                </div>
                                <div className="text-slate-300 group-hover:text-vibrant-pink transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">chevron_right</span>
                                </div>
                            </button>

                            {/* 남성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('M')}
                                className="w-full flex items-center p-5 bg-white border border-slate-50 hover:border-vibrant-pink hover:bg-soft-pink/40 rounded-[2rem] transition-all shadow-soft-card active:scale-[0.98] group"
                            >
                                <div className="w-[4.5rem] h-[4.5rem] mr-5 shrink-0 bg-off-white rounded-full overflow-hidden shadow-inner">
                                    <BoyIllustration />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-lg text-deep-charcoal mb-1">
                                        남성 출연진
                                    </p>
                                    <p className="text-[11px] text-slate-grey font-semibold tracking-wide uppercase">
                                        Male characters
                                    </p>
                                </div>
                                <div className="text-slate-300 group-hover:text-vibrant-pink transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">chevron_right</span>
                                </div>
                            </button>
                        </div>

                        <div className="mt-10 bg-white border border-slate-50 rounded-[1.5rem] p-5 text-center shadow-soft-card">
                            <p className="text-xs font-bold text-slate-grey tracking-wide leading-relaxed">
                                💕 어떤 성별을 선택해도 테스트를 즐길 수 있어요
                            </p>
                        </div>
                    </div>
                )}

                {/* ── 질문 ── */}
                {currentStep > 0 && currentQuestion && (
                    <div className="animate-slide-up space-y-8">
                        {/* Question Illustration Card */}
                        <div className="w-full bg-white rounded-[2.5rem] overflow-hidden shadow-natural border border-slate-50 mb-10 group">
                            <div className="w-full aspect-[4/3] bg-off-white flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] bg-vibrant-pink mix-blend-multiply transition-opacity group-hover:opacity-10"></div>
                                <img
                                    src={currentQuestion.imageUrl}
                                    alt={`상황 ${currentStep} 이미지`}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8">
                                <p className="text-vibrant-pink text-[10px] font-bold mb-3 text-center uppercase tracking-widest border border-soft-pink inline-block px-3 py-1 bg-soft-pink/30 rounded-full mx-auto block w-fit">
                                    {currentQuestion.situation}
                                </p>
                                <h3 className="text-deep-charcoal text-[22px] font-bold leading-snug text-center break-keep mt-4">
                                    {currentQuestion.text}
                                </h3>
                            </div>
                        </div>

                        {/* Choice Options */}
                        <div className="flex flex-col gap-4">
                            {currentQuestion.answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(answer)}
                                    className="w-full p-6 text-left bg-white border border-slate-50 rounded-[2rem] hover:border-vibrant-pink hover:bg-soft-pink/30 transition-all shadow-soft-card active:scale-[0.98] focus:outline-none group hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-100 text-[13px] font-extrabold text-slate-400 bg-off-white group-hover:bg-white group-hover:text-vibrant-pink group-hover:border-vibrant-pink/30 shadow-inner group-hover:shadow-none transition-all">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        <p className="text-deep-charcoal font-bold text-[15px] leading-relaxed flex-1 group-hover:-translate-x-1 transition-transform">
                                            {answer.text}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
