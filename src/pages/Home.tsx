import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light text-deep-black font-display">
            {/* Top Bar */}
            <div className="flex items-center bg-background-light p-4 justify-between sticky top-0 z-10 hidden sm:flex">
                <div className="text-deep-black flex size-10 shrink-0 items-center justify-center cursor-pointer">
                    {/* Optional back/close button */}
                </div>
                <h2 className="text-deep-black text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">나는 솔로 테스트</h2>
            </div>

            {/* Hero Section */}
            <div className="px-6 pt-4 pb-8 flex flex-col items-center animate-slide-down delay-100">
                <div className="w-full aspect-square max-w-[320px] rounded-xl overflow-hidden mb-8 shadow-soft">
                    <img
                        src="/images/main.jpg"
                        alt="메인 일러스트"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-deep-black tracking-tight text-2xl font-extrabold leading-tight text-center mb-2">
                    나에게 맞는 솔로나라<br />데이트 스타일은?
                </h1>
                <p className="text-neutral-gray text-base font-medium text-center">나는 솔로 테스트</p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col px-6 gap-4 animate-pop-in delay-200">
                <Link
                    to="/test"
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    <span className="truncate">테스트 시작하기</span>
                </Link>
                <div className="flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-neutral-gray text-sm">person</span>
                    <p className="text-neutral-gray text-xs font-semibold">참여자 수 12,345명</p>
                </div>
            </div>

            {/* Text Content for AdSense (SEO) */}
            <div className="px-6 py-8 animate-slide-up delay-300">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-5 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0"></div>

                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">help</span>
                        <h3 className="text-deep-black text-lg font-extrabold tracking-tight">나는 솔로 테스트란?</h3>
                    </div>
                    <p className="text-neutral-gray text-sm leading-relaxed mb-4 relative z-10">
                        '나는 솔로 테스트'는 당신의 내면에 숨겨진 연애 성향과 인간관계 패턴을 심리학적 원형(Archetype) 이론에 기반하여 분석해 드리는 무료 심리테스트입니다.
                        다양한 상황 속에서 당신이 어떤 선택을 내리는지에 따라, 숨겨진 당신만의 '솔로나라' 캐릭터를 찾아드립니다.
                    </p>
                    <p className="text-neutral-gray text-sm leading-relaxed relative z-10">
                        연애를 시작할 때 주도적인 편인지, 아니면 신중하게 다가가는 편인지 궁금하신가요?
                        총 10개의 문항을 통해 당신의 행동 양식, 감정 표현 방식, 그리고 연애 가치관을 입체적으로 진단해 보세요.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-[80px] -z-0"></div>

                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">lightbulb</span>
                        <h3 className="text-deep-black text-lg font-extrabold tracking-tight">이 테스트를 통해 알 수 있는 3가지</h3>
                    </div>
                    <ul className="space-y-3 relative z-10">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span className="text-neutral-gray text-sm leading-relaxed"><strong>당신과 닮은 솔로나라 캐릭터:</strong> 영수, 영호, 영숙, 옥순 등 가장 잘 맞는 캐릭터 매칭</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span className="text-neutral-gray text-sm leading-relaxed"><strong>연애 성향 심층 분석:</strong> 강점과 약점, 나만의 고유한 연애 스타일 요약</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span className="text-neutral-gray text-sm leading-relaxed"><strong>찰떡궁합 & 환장궁합:</strong> 가장 잘 맞는 최상의 파트너와 주의가 필요한 유형 안내</span>
                        </li>
                    </ul>
                </div>
            </div>


            <Footer />
        </div>
    );
}
