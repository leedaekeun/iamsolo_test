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
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const totalSteps = QUESTIONS.length;

    const handleGenderSelect = (gender: 'M' | 'F') => {
        setIsTransitioning(true);
        setGenderPref(gender);
        setTimeout(() => {
            setCurrentStep(1);
            setIsTransitioning(false);
            window.scrollTo(0, 0);
        }, 200);
    };

    const handleAnswerClick = (answer: Answer, index: number) => {
        if (isTransitioning) return;
        setSelectedAnswerIndex(index);
        setIsTransitioning(true);

        const newAnswers = [...answers, answer];

        setTimeout(() => {
            if (currentStep < QUESTIONS.length) {
                setAnswers(newAnswers);
                setCurrentStep(prev => prev + 1);
                setSelectedAnswerIndex(null);
                window.scrollTo(0, 0);
            } else {
                const result = getBestMatch(newAnswers, genderPref!);
                navigate(`/result?resultId=${result.character.id}&match=${result.matchPercentage}`);
            }
            setIsTransitioning(false);
        }, 300); // 300ms delay to briefly show the checkmark styled state
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
            setSelectedAnswerIndex(null);
        } else {
            setAnswers(prev => prev.slice(0, -1));
            setCurrentStep(prev => prev - 1);
            setSelectedAnswerIndex(null);
            window.scrollTo(0, 0);
        }
    };

    const handleClose = () => {
        navigate('/');
    }

    const currentQuestion = currentStep > 0 ? QUESTIONS[currentStep - 1] : null;

    return (
        <div className="relative min-h-screen w-full flex flex-col bg-off-white overflow-x-hidden text-deep-charcoal pb-8">

            {/* Top Navigation & Progress Bar (Only during questions) */}
            {currentStep > 0 && (
                <div className="fixed top-0 left-0 w-full bg-off-white/95 backdrop-blur-md z-50 border-b border-slate-100">
                    <div className="max-w-md mx-auto w-full px-5 py-3 pt-4">
                        <div className="flex items-center justify-between mb-3">
                            <button onClick={handleBack} className="flex size-8 items-center justify-center cursor-pointer hover:bg-slate-100 rounded-full transition-colors active:scale-95 text-slate-400 hover:text-deep-charcoal" aria-label="이전으로">
                                <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                            </button>
                            <span className="text-vibrant-pink text-xs font-bold tracking-widest uppercase">
                                PROGRESS
                            </span>
                            <button onClick={handleClose} className="flex size-8 items-center justify-center cursor-pointer hover:bg-slate-100 rounded-full transition-colors active:scale-95 text-slate-400 hover:text-deep-charcoal" aria-label="닫기">
                                <span className="material-symbols-outlined text-[24px]">close</span>
                            </button>
                        </div>
                        {/* Thin 10-Segment Progress Bar */}
                        <div className="flex gap-1 w-full h-[3px]">
                            {Array.from({ length: totalSteps }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-full flex-1 rounded-full bg-vibrant-pink transition-all duration-300 ${i < currentStep ? 'opacity-100' : 'opacity-15'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Header (Only show for Gender Selection step) */}
            {currentStep === 0 && (
                <div className="bg-white rounded-section-b shadow-natural z-20 pb-4 mb-6 relative">
                    <header className="flex items-center px-6 py-4 justify-between max-w-md mx-auto w-full">
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
                </div>
            )}

            {/* Main Content Area */}
            <main className={`flex-1 flex flex-col px-6 pt-2 pb-32 transition-opacity duration-200 max-w-md mx-auto w-full ${isTransitioning ? 'opacity-0' : 'opacity-100'} h-full`}>

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

                        <div className="flex flex-col gap-5 mt-6 px-1">
                            {/* 여성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('F')}
                                className="w-full flex items-center p-5 bg-white border border-slate-50 hover:border-vibrant-pink hover:bg-soft-pink/20 rounded-[2rem] transition-all duration-300 shadow-soft-card active:scale-[0.98] group hover:-translate-y-2 hover:shadow-floating"
                            >
                                <div className="w-[4.5rem] h-[4.5rem] mr-5 shrink-0 bg-off-white rounded-full overflow-hidden shadow-inner border border-slate-100 group-hover:border-vibrant-pink/30 transition-colors">
                                    <GirlIllustration />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-lg text-deep-charcoal mb-1">
                                        여성 매칭
                                    </p>
                                    <p className="text-[11px] text-slate-grey font-semibold tracking-wide uppercase">
                                        Female characters
                                    </p>
                                </div>
                                <div className="text-slate-300 group-hover:text-vibrant-pink transition-colors flex items-center justify-center bg-off-white group-hover:bg-soft-pink w-10 h-10 rounded-full">
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </div>
                            </button>

                            {/* 남성 카드 */}
                            <button
                                onClick={() => handleGenderSelect('M')}
                                className="w-full flex items-center p-5 bg-white border border-slate-50 hover:border-vibrant-pink hover:bg-soft-pink/20 rounded-[2rem] transition-all duration-300 shadow-soft-card active:scale-[0.98] group hover:-translate-y-2 hover:shadow-floating"
                            >
                                <div className="w-[4.5rem] h-[4.5rem] mr-5 shrink-0 bg-off-white rounded-full overflow-hidden shadow-inner border border-slate-100 group-hover:border-vibrant-pink/30 transition-colors">
                                    <BoyIllustration />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-lg text-deep-charcoal mb-1">
                                        남성 매칭
                                    </p>
                                    <p className="text-[11px] text-slate-grey font-semibold tracking-wide uppercase">
                                        Male characters
                                    </p>
                                </div>
                                <div className="text-slate-300 group-hover:text-vibrant-pink transition-colors flex items-center justify-center bg-off-white group-hover:bg-soft-pink w-10 h-10 rounded-full">
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </div>
                            </button>
                        </div>

                        <div className="mt-10 bg-white border border-slate-100 rounded-[1.5rem] p-5 text-center shadow-card">
                            <p className="text-xs font-bold text-slate-grey tracking-wide leading-relaxed">
                                💕 어떤 성별을 선택해도 테스트를 즐길 수 있어요
                            </p>
                        </div>
                    </div>
                )}

                {/* ── 질문 ── */}
                {currentStep > 0 && currentQuestion && (
                    <div className="animate-slide-up flex flex-col h-full relative z-10 w-full pt-[5rem]">

                        {/* Image Container (Filled inside rounded box) */}
                        <div className="w-full aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-card mb-10 border border-slate-100">
                            <img
                                src={currentQuestion.imageUrl}
                                alt={`상황 ${currentStep} 이미지`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Typography */}
                        <div className="text-center px-1 mb-10">
                            <h3 className="text-deep-charcoal text-[21px] font-extrabold leading-snug break-keep">
                                {/* Replacing newline with <br/> for UI string */}
                                {currentQuestion.situation.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i !== currentQuestion.situation.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </h3>
                        </div>

                        {/* Choice Options */}
                        <div className="flex flex-col gap-4">
                            {currentQuestion.answers.map((answer, index) => {
                                const isSelected = selectedAnswerIndex === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(answer, index)}
                                        className={`w-full p-6 text-left rounded-[1.5rem] transition-all duration-300 focus:outline-none flex flex-col relative ${isSelected
                                            ? 'bg-white border-[2.5px] border-vibrant-pink shadow-md hover:-translate-y-0.5'
                                            : 'bg-white border border-slate-200/80 shadow-sm hover:border-vibrant-pink/40 hover:bg-soft-pink/5 hover:-translate-y-0.5'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center w-full mb-3">
                                            <span className={`text-[19px] font-extrabold ${isSelected ? 'text-vibrant-pink' : 'text-slate-400'}`}>
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                            <div className={`flex items-center justify-center size-7 rounded-full border-2 transition-colors ${isSelected
                                                ? 'bg-vibrant-pink border-vibrant-pink'
                                                : 'bg-transparent border-slate-200'
                                                }`}>
                                                {isSelected && (
                                                    <span className="material-symbols-outlined text-white text-[18px] font-bold leading-none" style={{ marginTop: '1px' }}>
                                                        check
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className={`text-[16px] leading-[1.6] break-keep ${isSelected ? 'text-deep-charcoal font-bold' : 'text-slate-600 font-semibold'}`}>
                                            {answer.text}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>

        </div>
    );
}
