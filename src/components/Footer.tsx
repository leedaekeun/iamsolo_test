import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="relative z-10 mt-auto bg-slate-50 pt-7 -mt-5 pb-6 px-6">



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
                <p className="text-xs leading-relaxed text-slate-500">
                    나는 솔로 테마의 연애 심리 성향 분석 서비스<br />
                    심리학 원형(Archetype) 이론 기반 · 무료 · 익명
                </p>
            </div>

            {/* 네비게이션 링크 */}
            <nav className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mb-5" aria-label="푸터 네비게이션">
                <Link to="/" className="text-xs font-medium text-slate-500 hover:text-deep-black transition-colors">
                    홈
                </Link>
                <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                <Link to="/about" className="text-xs font-medium text-slate-500 hover:text-deep-black transition-colors">
                    소개
                </Link>
                <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                <Link to="/test" className="text-xs font-medium text-slate-500 hover:text-deep-black transition-colors">
                    테스트 시작
                </Link>
                <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                <Link to="/privacy" className="text-xs font-medium text-slate-500 hover:text-deep-black transition-colors">
                    개인정보처리방침
                </Link>
            </nav>

            {/* 면책 조항 */}
            <p className="text-center text-xs leading-relaxed mb-5 mx-auto text-slate-400"
                style={{ maxWidth: '320px' }}>
                본 테스트는 오락 목적의 심리 성향 분석이며,<br />
                의학적·심리상담적 진단이 아닙니다.<br />
                결과는 참고용으로만 활용하세요.
            </p>

            {/* 광고 안내 */}
            <p className="text-center text-xs mb-5 text-slate-400">
                본 사이트는 Google AdSense 광고를 게재합니다.
            </p>

            {/* 저작권 */}
            <p className="text-center text-xs text-slate-400">
                © {new Date().getFullYear()} 나는솔로 연애유형 테스트. All rights reserved.
            </p>

        </footer>
    );
}
