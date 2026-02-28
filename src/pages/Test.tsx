import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { QUESTIONS, Answer } from '@/data/questions';
import { getBestMatch } from '@/lib/algorithm';


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
                            <button onClick={handleBack} className="btn-icon" aria-label="이전으로">
                                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                            </button>
                            <span className="text-deep-charcoal text-[20px] font-bold text-center flex-1">
                                나는 솔로 캐릭터 테스트
                            </span>
                            <button onClick={handleClose} className="btn-icon" aria-label="닫기">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Continuous Progress Bar with Text */}
                        <div className="flex items-center gap-3 w-full">
                            <div className="flex-1 bg-slate-200 h-[4px] rounded-full overflow-hidden">
                                <div
                                    className="bg-vibrant-pink h-full rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                                />
                            </div>
                            <span className="text-slate-400 text-xs w-8 text-right font-medium tabular-nums">
                                {currentStep}/{totalSteps}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Header (Only show for Gender Selection step) */}
            {currentStep === 0 && (
                <div className="bg-white rounded-section-b shadow-natural z-20 pb-3 mb-4 relative">
                    <header className="flex items-center px-6 py-4 justify-between max-w-md mx-auto w-full">
                        <button onClick={handleBack} className="btn-icon" aria-label="이전으로">
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </button>
                        <h2 className="text-deep-charcoal text-[20px] font-bold leading-tight tracking-tight flex-1 text-center">
                            나는 솔로 캐릭터 테스트
                        </h2>
                        <button onClick={handleClose} className="btn-icon" aria-label="닫기">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </header>
                </div>
            )}

            {/* Main Content Area */}
            <main className={`flex-1 flex flex-col px-6 pt-0 pb-24 transition-opacity duration-200 max-w-md mx-auto w-full ${isTransitioning ? 'opacity-0' : 'opacity-100'} h-full`}>

                {/* ── 성별 선택 ── */}
                {currentStep === 0 && (
                    <div className="animate-slide-up space-y-4">
                        <div className="text-center space-y-2 mb-6 mt-2">
                            <h2 className="text-3xl font-bold tracking-tight text-deep-charcoal leading-tight">
                                나의 <span className="text-vibrant-pink">성별</span>은?
                            </h2>
                            <p className="text-slate-grey text-sm font-medium mt-2 tracking-wide leading-relaxed">
                                선택에 따라 결과 캐릭터가 달라져요
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4 px-1 aspect-[4/5] min-h-[290px]">
                            {/* 남자 카드 (왼쪽) */}
                            <button
                                onClick={() => handleGenderSelect('M')}
                                className="w-full h-full p-0 bg-white rounded-[2rem] transition-all duration-300 shadow-card active:scale-[0.98] group hover:-translate-y-2 hover:shadow-floating overflow-hidden relative flex flex-col items-center justify-end"
                            >
                                <img src="/images/characters/m1_youngsoo.png" alt="남성 매칭" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none"></div>

                                <div className="relative z-20 w-full text-center pb-6">
                                    <p className="font-extrabold text-[22px] text-white tracking-wide drop-shadow-md">
                                        남성 매칭
                                    </p>
                                    <p className="text-[12px] text-white/90 font-semibold tracking-widest uppercase mt-1 drop-shadow-sm">
                                        Male
                                    </p>
                                </div>
                            </button>

                            {/* 여자 카드 (오른쪽) */}
                            <button
                                onClick={() => handleGenderSelect('F')}
                                className="w-full h-full p-0 bg-white rounded-[2rem] transition-all duration-300 shadow-card active:scale-[0.98] group hover:-translate-y-2 hover:shadow-floating overflow-hidden relative flex flex-col items-center justify-end"
                            >
                                <img src="/images/characters/f1_youngsook.png" alt="여성 매칭" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none"></div>

                                <div className="relative z-20 w-full text-center pb-6">
                                    <p className="font-extrabold text-[22px] text-white tracking-wide drop-shadow-md">
                                        여성 매칭
                                    </p>
                                    <p className="text-[12px] text-white/90 font-semibold tracking-widest uppercase mt-1 drop-shadow-sm">
                                        Female
                                    </p>
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
                        <div className="w-full aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-card mb-6 border border-slate-100 mt-4 max-h-[260px]">
                            <img
                                src={`/images/questions/q${currentStep}_${genderPref === 'M' ? 'm' : 'w'}.png`}
                                alt={`상황 ${currentStep} 이미지`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Typography */}
                        <div className="text-center px-1 mb-8">
                            <h3 className="text-deep-charcoal text-[20px] font-extrabold leading-snug break-keep">
                                {/* Replacing newline with <br/> for UI string */}
                                {currentQuestion.situation.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i !== currentQuestion.situation.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </h3>
                        </div>

                        {/* Choice Options (Side-by-Side Grid) */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {currentQuestion.answers.map((answer, index) => {
                                const isSelected = selectedAnswerIndex === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(answer, index)}
                                        className={`w-full p-4 text-left rounded-[1.5rem] transition-all duration-200 focus:outline-none flex flex-col relative group min-h-[140px] ${isSelected
                                            ? 'bg-vibrant-pink border-2 border-vibrant-pink shadow-md translate-y-[-2px]'
                                            : 'bg-white border-2 border-slate-200/80 shadow-sm active:bg-pink-50 sm:hover:border-vibrant-pink sm:hover:bg-vibrant-pink sm:hover:-translate-y-0.5'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start w-full mb-3">
                                            <span className={`text-2xl font-black transition-colors ${isSelected ? 'text-white' : 'text-slate-300 sm:group-hover:text-white'}`}>
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                            <div className={`flex items-center justify-center size-6 rounded-full border-2 transition-all duration-200 mt-1 ${isSelected
                                                ? 'bg-white border-white'
                                                : 'bg-transparent border-slate-200 sm:group-hover:bg-white sm:group-hover:border-white'
                                                }`}>
                                                <span className={`material-symbols-outlined text-[16px] font-bold leading-none transition-colors duration-200 ${isSelected
                                                    ? 'text-vibrant-pink'
                                                    : 'text-transparent sm:group-hover:text-vibrant-pink'
                                                    }`} style={{ marginTop: '1px' }}>
                                                    check
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto">
                                            <p className={`text-[14px] leading-[1.5] break-keep transition-colors ${isSelected ? 'text-white font-bold' : 'text-slate-600 font-semibold sm:group-hover:text-white'}`}>
                                                {answer.text}
                                            </p>
                                        </div>
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
