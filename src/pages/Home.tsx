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
            <div className="px-6 py-10 bg-white/50 animate-slide-up delay-300">
                <div className="mb-8">
                    <h3 className="text-deep-black text-xl font-extrabold tracking-tight mb-3">나는 솔로 테스트란?</h3>
                    <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                        '나는 솔로 테스트'는 당신의 내면에 숨겨진 연애 성향과 인간관계 패턴을 심리학적 원형(Archetype) 이론에 기반하여 분석해 드리는 무료 심리테스트입니다.
                        다양한 상황 속에서 당신이 어떤 선택을 내리는지에 따라, 숨겨진 당신만의 '솔로나라' 캐릭터를 찾아드립니다.
                    </p>
                    <p className="text-neutral-gray text-sm leading-relaxed">
                        연애를 시작할 때 주도적인 편인지, 아니면 신중하게 다가가는 편인지 궁금하신가요?
                        총 10개의 문항을 통해 당신의 행동 양식, 감정 표현 방식, 그리고 연애 가치관을 입체적으로 진단해 보세요.
                    </p>
                </div>

                <div>
                    <h3 className="text-deep-black text-xl font-extrabold tracking-tight mb-3">이 테스트를 통해 알 수 있는 3가지</h3>
                    <ul className="list-disc pl-5 text-neutral-gray text-sm leading-relaxed space-y-2">
                        <li><strong>당신과 닮은 솔로나라 캐릭터:</strong> 영수, 영호, 영숙, 옥순 등 당신의 성향과 가장 잘 맞는 캐릭터 매칭</li>
                        <li><strong>연애 성향 심층 분석:</strong> 강점과 약점, 그리고 당신만의 고유한 연애 스타일 요약</li>
                        <li><strong>찰떡궁합 & 환장궁합:</strong> 당신과 가장 잘 맞는 최상의 파트너와 다소 주의가 필요한 파트너 유형 안내</li>
                    </ul>
                </div>
            </div>

            {/* Real-time Popular Types */}
            <div className="mt-8 px-6 pb-12 animate-slide-up delay-400">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-deep-black text-lg font-bold">실시간 인기 유형</h3>
                    <span className="text-primary text-sm font-bold">LIVE</span>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Card 1 */}
                    <div className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-soft hover:shadow-lg transition-shadow cursor-default">
                        <div className="size-12 rounded-xl bg-pink-50 text-3xl mr-4 flex items-center justify-center overflow-hidden">
                            🥰
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-deep-black font-bold text-sm">로맨틱 가이</h4>
                                <span className="px-2 py-0.5 bg-primary text-[10px] text-white font-bold rounded-full">HOT</span>
                            </div>
                            <p className="text-neutral-gray text-xs">순애보적인 사랑을 꿈꾸는 스타일</p>
                        </div>
                        <div className="text-primary">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-soft hover:shadow-lg transition-shadow cursor-default">
                        <div className="size-12 rounded-xl bg-purple-50 text-3xl mr-4 flex items-center justify-center overflow-hidden">
                            😎
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-deep-black font-bold text-sm">걸크러쉬 리더</h4>
                                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">UP</span>
                            </div>
                            <p className="text-neutral-gray text-xs">당당하고 솔직한 매력의 소유자</p>
                        </div>
                        <div className="text-primary">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-soft hover:shadow-lg transition-shadow cursor-default">
                        <div className="size-12 rounded-xl bg-orange-50 text-3xl mr-4 flex items-center justify-center overflow-hidden">
                            🤩
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-deep-black font-bold text-sm">재치만점 분위기메이커</h4>
                                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">NEW</span>
                            </div>
                            <p className="text-neutral-gray text-xs">언제 어디서나 웃음을 주는 스타일</p>
                        </div>
                        <div className="text-primary">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>
            <Footer />
        </div>
    );
}
