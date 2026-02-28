import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer
            className="relative z-10 mt-auto"
            style={{
                background: 'rgba(8, 5, 20, 0.85)',
                borderTop: '1px solid rgba(255,100,160,0.16)',
                backdropFilter: 'blur(20px)',
            }}
        >
            {/* 상단 구분선 장식 — 미스틱 오로라 */}
            <div style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,107,170,0.50), rgba(155,93,229,0.40), rgba(255,107,170,0.50), transparent)',
            }} />

            <div className="px-6 pt-8 pb-6">

                {/* 브랜드 */}
                <div className="text-center mb-6">
                    <p className="font-black text-base mb-1" style={{
                        background: 'linear-gradient(135deg, #ff9dc5, #ff2d78, #c040a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        💕 나는솔로 연애유형 테스트
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        나는 솔로 테마의 연애 심리 성향 분석 서비스<br />
                        심리학 원형(Archetype) 이론 기반 · 무료 · 익명
                    </p>
                </div>

                {/* 네비게이션 링크 */}
                <nav className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mb-5" aria-label="푸터 네비게이션">
                    <Link to="/" className="text-xs font-medium transition-colors"
                        style={{ color: 'var(--text-muted)' }}>
                        홈
                    </Link>
                    <span className="stat-divider" aria-hidden="true" />
                    <Link to="/test" className="text-xs font-medium transition-colors"
                        style={{ color: 'var(--text-muted)' }}>
                        테스트 시작
                    </Link>
                    <span className="stat-divider" aria-hidden="true" />
                    <Link to="/privacy" className="text-xs font-medium transition-colors"
                        style={{ color: 'var(--text-muted)' }}>
                        개인정보처리방침
                    </Link>
                </nav>

                {/* 면책 조항 */}
                <p className="text-center text-xs leading-relaxed mb-5 mx-auto"
                    style={{ color: 'var(--text-dim)', maxWidth: '320px' }}>
                    본 테스트는 오락 목적의 심리 성향 분석이며,<br />
                    의학적·심리상담적 진단이 아닙니다.<br />
                    결과는 참고용으로만 활용하세요.
                </p>

                {/* 광고 안내 */}
                <p className="text-center text-xs mb-5" style={{ color: 'var(--text-dim)' }}>
                    본 사이트는 Google AdSense 광고를 게재합니다.
                </p>

                {/* 저작권 */}
                <p className="text-center text-xs" style={{ color: 'var(--text-dim)' }}>
                    © {new Date().getFullYear()} 나는솔로 연애유형 테스트. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
