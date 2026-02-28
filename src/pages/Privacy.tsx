import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-bold text-deep-charcoal mb-4 border-b-2 border-soft-pink/50 pb-2">
                {title}
            </h2>
            <div className="space-y-3 text-slate-grey text-sm font-medium leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal font-sans">
            {/* Header */}
            <header className="bg-white sticky top-0 z-10 border-b border-soft-pink/50 shadow-sm rounded-b-3xl">
                <div className="max-w-md mx-auto flex items-center p-4">
                    <Link to="/" className="btn-icon" aria-label="이전으로">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </Link>
                    <h1 className="text-deep-charcoal text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
                        개인정보처리방침
                    </h1>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 w-full max-w-md mx-auto px-6 py-8">

                <div className="mb-10 text-center">
                    <span className="inline-block px-3 py-1 bg-soft-pink text-vibrant-pink text-[10px] font-bold rounded-full uppercase tracking-wider mb-4 border border-vibrant-pink/10">
                        Privacy Policy
                    </span>
                    <h1 className="text-3xl font-black text-deep-charcoal tracking-tight">
                        개인정보처리방침
                    </h1>
                    <p className="text-xs text-slate-400 mt-3 font-semibold">
                        시행일: 2025년 1월 1일 &nbsp;·&nbsp; 최종 수정: 2025년 12월 1일
                    </p>
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-[2rem] p-6 mb-10 shadow-card border border-soft-pink/30 flex items-start gap-4">
                    <span className="material-symbols-outlined text-vibrant-pink/80 mt-1">shield_lock</span>
                    <p className="text-sm font-medium leading-relaxed text-slate-grey">
                        <strong className="text-vibrant-pink">나는솔로 연애유형 테스트</strong>는 회원 가입이 없으며
                        성명, 연락처 등 개인 식별 정보를 수집하지 않습니다.
                        단, Google AdSense 광고 서비스 운영을 위해 쿠키가 사용될 수 있습니다.
                    </p>
                </div>

                <Section title="1. 서비스 소개">
                    <p>
                        나는솔로 연애유형 테스트(이하 '서비스')는 인기 연애 예능 프로그램 '나는 솔로'를 테마로 하여,
                        심리학의 원형(Archetype) 이론과 성향 분석을 결합한 연애 심리 성향 분석 서비스입니다.
                    </p>
                    <p>
                        본 서비스는 별도의 회원 가입, 로그인 없이 누구나 이용 가능한 무료 서비스입니다.
                    </p>
                </Section>

                <Section title="2. 수집하는 개인정보">
                    <p>
                        본 서비스는 사용자의 <strong className="text-deep-charcoal">성명, 생년월일, 이메일, 전화번호 등 개인 식별 정보를 일절 수집하지 않습니다.</strong>
                    </p>
                    <p>
                        테스트 응답 결과는 결과 페이지 URL의 파라미터로만 처리되며, 별도 서버에 저장되거나 제3자에게 전달되지 않습니다.
                    </p>
                    <div className="rounded-2xl p-4 bg-soft-pink/20 border border-soft-pink mt-4">
                        <p className="text-xs font-bold text-vibrant-pink mb-1">✅ 수집 항목</p>
                        <p className="text-xs text-deep-charcoal font-semibold">
                            수집하는 개인정보 없음 (비식별 서비스)
                        </p>
                    </div>
                </Section>

                <Section title="3. 쿠키(Cookie) 및 유사 기술">
                    <p>
                        본 서비스는 서비스 품질 개선 및 광고 게재를 위해 쿠키를 사용할 수 있습니다.
                        쿠키란 웹사이트 방문 시 브라우저에 저장되는 소규모 데이터 파일입니다.
                    </p>
                    <p>
                        <strong className="text-deep-charcoal">쿠키 거부 방법:</strong> 브라우저 설정 메뉴에서 쿠키 수락 여부를 직접 설정하실 수 있습니다.
                        단, 쿠키를 비활성화할 경우 일부 서비스 이용에 제한이 생길 수 있습니다.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                        <li>Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터 차단</li>
                        <li>Firefox: 옵션 → 개인정보 및 보안 → 쿠키와 사이트 데이터</li>
                    </ul>
                </Section>

                <Section title="4. 제3자 광고 서비스 (Google AdSense)">
                    <p>
                        본 서비스는 <strong className="text-deep-charcoal">Google LLC가 제공하는 Google AdSense</strong> 광고 서비스를 이용합니다.
                        Google AdSense는 사용자의 관심사에 맞는 맞춤형 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
                    </p>
                    <p>
                        Google은 사용자의 쿠키를 사용하여 해당 사이트 및 인터넷상의 다른 사이트 방문을 기반으로 광고를 제공합니다.
                        Google이 광고 쿠키를 사용하는 방식에 대한 자세한 내용은 아래 링크를 참고하세요.
                    </p>
                    <div className="space-y-3 mt-4">
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-vibrant-pink hover:underline"
                        >
                            → Google 개인정보처리방침
                            <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                        <br />
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-vibrant-pink hover:underline"
                        >
                            → Google 광고 맞춤 설정 페이지
                            <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                    </div>
                    <div className="rounded-2xl p-4 bg-yellow-50 border border-yellow-100 mt-4">
                        <p className="text-xs text-yellow-800 leading-relaxed font-semibold">
                            ⚠️ Google 광고 파트너 사이트에서 Google의 광고를 보셨다면, Google 쿠키도 사용된 것입니다.
                            위 '광고 맞춤 설정 페이지'에서 맞춤형 광고를 비활성화할 수 있습니다.
                        </p>
                    </div>
                </Section>

                <Section title="5. 외부 링크">
                    <p>
                        본 서비스에 포함된 외부 링크를 통해 다른 웹사이트로 이동하신 경우, 해당 사이트의
                        개인정보처리방침이 적용됩니다. 본 서비스는 외부 사이트의 개인정보 처리에 대한 책임을 지지 않습니다.
                    </p>
                </Section>

                <Section title="6. 면책 조항">
                    <p>
                        본 테스트의 결과는 심리학적 원형 이론에 기반한 <strong className="text-deep-charcoal">오락 및 자기 이해 목적의 성향 분석</strong>이며,
                        의학적·심리상담적 진단이 아닙니다.
                    </p>
                    <p>
                        결과는 개인의 성향을 일부 반영할 수 있으나, 절대적 기준이 되지 않습니다.
                        전문적인 심리 상담이 필요한 경우 관련 전문가에게 문의하시기 바랍니다.
                    </p>
                </Section>

                <Section title="7. 개인정보처리방침의 변경">
                    <p>
                        본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 변경될 수 있습니다.
                        변경 시 본 페이지 상단에 '최종 수정일'을 업데이트하여 공지합니다.
                    </p>
                </Section>

                <Section title="8. 개인정보 관련 문의">
                    <p>
                        개인정보처리방침에 관한 문의사항이 있으시면 아래 경로로 연락 주시기 바랍니다.
                    </p>
                    <div className="rounded-2xl p-5 bg-white shadow-card border border-soft-pink/30 mt-4 text-center">
                        <p className="text-xs font-bold text-vibrant-pink mb-1">서비스 운영</p>
                        <p className="text-sm text-deep-charcoal font-bold">나는솔로 연애유형 테스트</p>
                        <p className="text-xs mt-2 text-slate-grey font-medium">
                            GitHub: github.com/leedaekeun/iamsolo_test
                        </p>
                    </div>
                </Section>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-12 mb-4">
                    <Link
                        to="/"
                        className="btn-primary w-full"
                    >
                        홈으로 돌아가기
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
