import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-8">
            <h2
                className="font-black mb-3 pb-2"
                style={{
                    fontSize: 'var(--fs-h3)',
                    color: '#1e1e2d',
                    borderBottom: '2px solid #ffe0ec',
                }}
            >
                {title}
            </h2>
            <div className="space-y-3" style={{ color: '#4a4a68', fontSize: 'var(--fs-sm)', lineHeight: 1.8 }}>
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* 상단 헤더 */}
            <header
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid #ffe0ec', background: 'white' }}
            >
                <Link
                    to="/"
                    className="flex items-center gap-1.5 text-sm font-bold rounded-full px-3 py-1.5"
                    style={{ color: '#ff80b5', background: '#fff0f5', border: '1px solid #ffcce0' }}
                    aria-label="홈으로"
                >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    홈
                </Link>
                <span className="font-black text-sm" style={{ color: '#1e1e2d' }}>
                    개인정보처리방침
                </span>
            </header>

            {/* 본문 */}
            <main className="flex-1 px-5 py-8 content-narrow">

                {/* 페이지 타이틀 */}
                <div className="mb-8 text-center">
                    <span className="badge-pink inline-block mb-3">🔒 Privacy Policy</span>
                    <h1
                        className="font-black"
                        style={{ fontSize: 'var(--fs-h1)', color: '#1e1e2d', letterSpacing: '-0.02em' }}
                    >
                        개인정보처리방침
                    </h1>
                    <p className="text-xs mt-2" style={{ color: '#aaa0b8' }}>
                        시행일: 2025년 1월 1일 &nbsp;·&nbsp; 최종 수정: 2025년 12월 1일
                    </p>
                </div>

                {/* 요약 카드 */}
                <div
                    className="card-pink p-4 mb-8 flex items-start gap-3"
                    style={{ background: '#fffbfc' }}
                >
                    <span className="text-2xl flex-shrink-0">📋</span>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b6b8a' }}>
                        <strong style={{ color: '#ff4080' }}>나는솔로 연애유형 테스트</strong>는 회원 가입이 없으며
                        성명, 연락처 등 개인 식별 정보를 수집하지 않습니다.
                        단, Google AdSense 광고 서비스 운영을 위해 쿠키가 사용될 수 있습니다.
                    </p>
                </div>

                {/* 1. 서비스 소개 */}
                <Section title="1. 서비스 소개">
                    <p>
                        나는솔로 연애유형 테스트(이하 '서비스')는 인기 연애 예능 프로그램 '나는 솔로'를 테마로 하여,
                        심리학의 원형(Archetype) 이론과 성향 분석을 결합한 연애 심리 성향 분석 서비스입니다.
                    </p>
                    <p>
                        본 서비스는 별도의 회원 가입, 로그인 없이 누구나 이용 가능한 무료 서비스입니다.
                    </p>
                </Section>

                {/* 2. 수집하는 개인정보 */}
                <Section title="2. 수집하는 개인정보">
                    <p>
                        본 서비스는 사용자의 <strong>성명, 생년월일, 이메일, 전화번호 등 개인 식별 정보를 일절 수집하지 않습니다.</strong>
                    </p>
                    <p>
                        테스트 응답 결과는 결과 페이지 URL의 파라미터로만 처리되며, 별도 서버에 저장되거나 제3자에게 전달되지 않습니다.
                    </p>
                    <div
                        className="rounded-xl p-3"
                        style={{ background: '#f0fff4', border: '1px solid #b8ead0' }}
                    >
                        <p className="text-xs font-bold mb-1" style={{ color: '#2a8a5a' }}>✅ 수집 항목</p>
                        <p className="text-xs" style={{ color: '#3a7a5a' }}>
                            수집하는 개인정보 없음 (비식별 서비스)
                        </p>
                    </div>
                </Section>

                {/* 3. 쿠키 및 추적 기술 */}
                <Section title="3. 쿠키(Cookie) 및 유사 기술">
                    <p>
                        본 서비스는 서비스 품질 개선 및 광고 게재를 위해 쿠키를 사용할 수 있습니다.
                        쿠키란 웹사이트 방문 시 브라우저에 저장되는 소규모 데이터 파일입니다.
                    </p>
                    <p>
                        <strong>쿠키 거부 방법:</strong> 브라우저 설정 메뉴에서 쿠키 수락 여부를 직접 설정하실 수 있습니다.
                        단, 쿠키를 비활성화할 경우 일부 서비스 이용에 제한이 생길 수 있습니다.
                    </p>
                    <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                        <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                        <li>Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터 차단</li>
                        <li>Firefox: 옵션 → 개인정보 및 보안 → 쿠키와 사이트 데이터</li>
                    </ul>
                </Section>

                {/* 4. 제3자 광고 서비스 (Google AdSense) */}
                <Section title="4. 제3자 광고 서비스 (Google AdSense)">
                    <p>
                        본 서비스는 <strong>Google LLC가 제공하는 Google AdSense</strong> 광고 서비스를 이용합니다.
                        Google AdSense는 사용자의 관심사에 맞는 맞춤형 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
                    </p>
                    <p>
                        Google은 사용자의 쿠키를 사용하여 해당 사이트 및 인터넷상의 다른 사이트 방문을 기반으로 광고를 제공합니다.
                        Google이 광고 쿠키를 사용하는 방식에 대한 자세한 내용은 아래 링크를 참고하세요.
                    </p>
                    <div className="space-y-2">
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold"
                            style={{ color: '#ff4080' }}
                        >
                            → Google 개인정보처리방침
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <br />
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold"
                            style={{ color: '#ff4080' }}
                        >
                            → Google 광고 맞춤 설정 페이지
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    <div
                        className="rounded-xl p-3 mt-2"
                        style={{ background: '#fff8e0', border: '1px solid #ffe0a0' }}
                    >
                        <p className="text-xs" style={{ color: '#806000' }}>
                            ⚠️ Google 광고 파트너 사이트에서 Google의 광고를 보셨다면, Google 쿠키도 사용된 것입니다.
                            위 '광고 맞춤 설정 페이지'에서 맞춤형 광고를 비활성화할 수 있습니다.
                        </p>
                    </div>
                </Section>

                {/* 5. 외부 링크 */}
                <Section title="5. 외부 링크">
                    <p>
                        본 서비스에 포함된 외부 링크를 통해 다른 웹사이트로 이동하신 경우, 해당 사이트의
                        개인정보처리방침이 적용됩니다. 본 서비스는 외부 사이트의 개인정보 처리에 대한 책임을 지지 않습니다.
                    </p>
                </Section>

                {/* 6. 면책 조항 */}
                <Section title="6. 면책 조항">
                    <p>
                        본 테스트의 결과는 심리학적 원형 이론에 기반한 <strong>오락 및 자기 이해 목적의 성향 분석</strong>이며,
                        의학적·심리상담적 진단이 아닙니다.
                    </p>
                    <p>
                        결과는 개인의 성향을 일부 반영할 수 있으나, 절대적 기준이 되지 않습니다.
                        전문적인 심리 상담이 필요한 경우 관련 전문가에게 문의하시기 바랍니다.
                    </p>
                </Section>

                {/* 7. 개인정보처리방침 변경 */}
                <Section title="7. 개인정보처리방침의 변경">
                    <p>
                        본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 변경될 수 있습니다.
                        변경 시 본 페이지 상단에 '최종 수정일'을 업데이트하여 공지합니다.
                    </p>
                </Section>

                {/* 8. 문의 */}
                <Section title="8. 개인정보 관련 문의">
                    <p>
                        개인정보처리방침에 관한 문의사항이 있으시면 아래 경로로 연락 주시기 바랍니다.
                    </p>
                    <div
                        className="rounded-xl p-4"
                        style={{ background: '#fff0f5', border: '1.5px solid #ffb3d1' }}
                    >
                        <p className="text-xs font-bold mb-1" style={{ color: '#ff4080' }}>서비스 운영</p>
                        <p className="text-xs" style={{ color: '#6b6b8a' }}>나는솔로 연애유형 테스트</p>
                        <p className="text-xs mt-1" style={{ color: '#6b6b8a' }}>
                            GitHub: github.com/leedaekeun/iamsolo_test
                        </p>
                    </div>
                </Section>

                {/* 하단 CTA */}
                <div className="text-center mt-8">
                    <Link
                        to="/"
                        className="btn-primary"
                        style={{ maxWidth: '280px', margin: '0 auto', display: 'inline-flex' }}
                    >
                        테스트 시작하기
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
