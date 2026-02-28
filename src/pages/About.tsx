import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-off-white text-deep-charcoal font-sans">
            {/* Header */}
            <div className="flex items-center bg-white p-4 sticky top-0 z-10 border-b border-soft-pink/50 shadow-sm rounded-b-3xl">
                <Link to="/" className="text-deep-charcoal flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-off-white rounded-full transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-deep-charcoal text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                    서비스 소개
                </h1>
            </div>

            {/* Content Area */}
            <div className="px-6 py-8 flex-1">

                <section className="mb-10">
                    <h2 className="text-2xl font-extrabold text-deep-charcoal mb-4">나는 솔로 테스트 <br />(I am Solo Test)</h2>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        환영합니다! '나는 솔로 테스트'는 복잡한 인간관계와 연애의 심리를 쉽고 재미있게 풀어내기 위해 기획된 무료 심리 성향 분석 웹서비스입니다.
                        단순한 재미를 넘어, 사용자 본인도 미처 몰랐던 무의식적인 행동 패턴과 연애 스타일을 거울처럼 비춰주는 것을 목표로 하고 있습니다.
                    </p>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed">
                        현대 사회에서 우리는 각자 다양한 가면(Persona)을 쓰고 살아갑니다. 하지만 누군가를 깊이 사랑하게 되는 연애의 순간만큼은 가장 본질적인 자아가 드러나기 마련입니다.
                        이 테스트는 바로 그 지점을 포착하여 당신이 어떤 사람인지, 어떤 사랑을 원하는지 묻고 답합니다.
                    </p>
                </section>

                <section className="mb-10 bg-white p-6 rounded-[2rem] shadow-soft-card border border-soft-pink/30">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-3">심리학적 배경</h3>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        본 테스트의 결과 도출 알고리즘은 칼 융(Carl Jung)의 분석심리학적 원형(Archetype) 이론과 성격 유형 지표의 4가지 선호 경향성을 차용하여 자체적으로 구성되었습니다.
                    </p>
                    <ul className="list-disc pl-5 text-slate-grey text-sm font-medium leading-relaxed space-y-2">
                        <li><strong className="text-vibrant-pink">E/I (에너지 방향):</strong> 관계의 주도권과 에너지 발산 방향</li>
                        <li><strong className="text-vibrant-pink">N/S (인식 방식):</strong> 데이트나 상대를 파악할 때의 직관 vs 경험</li>
                        <li><strong className="text-vibrant-pink">T/F (판단 방식):</strong> 갈등 상황에서 논리 vs 감정적 공감</li>
                        <li><strong className="text-vibrant-pink">J/P (생활 양식):</strong> 연애 과정을 이끌어가는 계획 vs 즉흥</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h3 className="text-xl font-bold text-deep-charcoal mb-3">결과 유형 안내</h3>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        사용자의 응답 데이터를 기반으로 총 12가지(남성 6인, 여성 6인)의 매력적인 '솔로나라' 캐릭터 중 하나가 결과로 도출됩니다.
                        의젓한 분석가 '영수', 통치자 '영숙', 팩트폭격기 '정숙' 등 각 캐릭터는 현실의 연애 군상을 생생하게 반영하고 있습니다.
                    </p>
                    <p className="text-slate-grey text-sm font-medium leading-relaxed mb-4">
                        도출된 결과 페이지에서는 단순히 캐릭터 이름뿐만 아니라, 당신의 장점과 단점, 찰떡궁합인 파트너 유형, 그리고 더 나은 관계를 위한 진심 어린 연애 조언 3가지가 함께 제공됩니다.
                        결과를 친구나 연인과 공유하며 서로의 다름을 이해하는 계기로 삼아보세요.
                    </p>
                </section>

                <section className="mb-10 bg-soft-pink/30 p-5 rounded-2xl">
                    <h3 className="text-sm font-bold text-vibrant-pink mb-2">주의사항</h3>
                    <p className="text-deep-charcoal text-xs leading-relaxed">
                        본 심리테스트는 오락 및 흥미 유발을 목적으로 제작되었습니다. 의학적이거나 전문적인 심리 상담을 대체할 수 없으며, 결과는 개인의 성향을 완벽하게 규정짓지 않습니다.
                        가벼운 마음으로 즐겨주시고, 타인을 이해하는 작은 창구로 활용해 주시기 바랍니다.
                    </p>
                </section>

                <div className="flex justify-center mt-12 mb-4">
                    <Link
                        to="/test"
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-vibrant-pink text-white text-lg font-bold leading-normal tracking-wide shadow-btn hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        테스트 시작하기
                    </Link>
                </div>

            </div>

            <Footer />
        </div>
    );
}
