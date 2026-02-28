import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light text-deep-black font-display">
            {/* Header Area with Mint Green Background */}
            <div className="bg-primary/10 rounded-b-[40px] pb-8 mb-6">
                {/* Top Bar */}
                <div className="flex items-center p-4 justify-between sticky top-0 z-10 hidden sm:flex">
                    <div className="flex size-10 shrink-0 items-center justify-center"></div>
                    <h2 className="text-deep-black text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">나는 솔로 테스트</h2>
                </div>

                {/* Hero Section */}
                <div className="px-6 pt-6 flex flex-col items-center animate-slide-down delay-100">
                    <h1 className="text-deep-black tracking-tight text-3xl font-extrabold leading-tight text-center mb-6">
                        나는 솔로<br />어떤 캐릭터 일까?
                    </h1>

                    <div className="w-full aspect-square max-w-[280px] bg-white p-3 rounded-[32px] overflow-hidden mb-2 shadow-sm border border-white/50">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src="/images/main.jpg"
                                alt="메인 일러스트"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col px-6 gap-4 animate-pop-in delay-200 mb-4">
                <Link
                    to="/test"
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    <span className="truncate">내 캐릭터 확인하기</span>
                </Link>
                <div className="flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-neutral-gray text-sm">person</span>
                    <p className="text-neutral-gray text-xs font-semibold">참여자 수 12,345명</p>
                </div>
            </div>

            {/* Text Content for AdSense (SEO) */}
            <div className="px-6 py-4 animate-slide-up delay-300 space-y-4">
                {/* Feature 1 */}
                <div className="bg-teal-50 p-6 rounded-[24px] relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-teal-600 shadow-sm material-symbols-outlined">psychology</span>
                        <h3 className="text-deep-black text-lg font-extrabold tracking-tight">심리 원형 분석</h3>
                    </div>
                    <p className="text-teal-900/80 text-sm leading-relaxed relative z-10 font-medium">
                        당신의 내면에 숨겨진 연애 성향과 인간관계 패턴을 심리학적 원형(Archetype) 이론에 기반하여 분석해 드리는 무료 심리테스트입니다.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-sky-50 p-6 rounded-[24px] relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-sky-500 shadow-sm material-symbols-outlined">favorite</span>
                        <h3 className="text-deep-black text-lg font-extrabold tracking-tight">12가지 찰떡 매칭</h3>
                    </div>
                    <ul className="space-y-3 relative z-10">
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-0.5 font-bold">•</span>
                            <span className="text-sky-900/80 text-sm leading-relaxed font-medium"><strong>맞춤형 캐릭터:</strong> 영수, 영호, 영숙, 옥순 등 나와 가장 잘 맞는 유형</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-0.5 font-bold">•</span>
                            <span className="text-sky-900/80 text-sm leading-relaxed font-medium"><strong>연애 스타일:</strong> 행동 양식, 감정 표현 방식 등 입체적 진단</span>
                        </li>
                    </ul>
                </div>

                {/* Feature 3 */}
                <div className="bg-purple-50 p-6 rounded-[24px] relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-purple-500 shadow-sm material-symbols-outlined">link</span>
                        <h3 className="text-deep-black text-lg font-extrabold tracking-tight">현실 상황 반영</h3>
                    </div>
                    <p className="text-purple-900/80 text-sm leading-relaxed relative z-10 font-medium">
                        실제 '솔로나라'에서 벌어질 법한 10가지 다양한 상황 속에서 당신이 어떤 선택을 내리는지에 따라 최종 결과를 도출합니다.
                    </p>
                </div>
            </div>


            <Footer />
        </div>
    );
}
