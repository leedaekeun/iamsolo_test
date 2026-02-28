import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-off-white pt-10 pb-8 px-6 border-t border-slate-100">

            {/* 핑크 구분 라인 */}
            <div className="divider-pink mx-auto mb-8" />

            {/* 브랜드 */}
            <div className="text-center mb-6">
                <p className="font-bold text-base text-vibrant-pink mb-1">
                    💕 나는솔로 연애유형 테스트
                </p>
                <p className="text-body text-xs">
                    나는 솔로 테마의 연애 심리 성향 분석 서비스<br />
                    심리학 원형(Archetype) 이론 기반 · 무료 · 익명
                </p>
            </div>

            {/* 네비게이션 */}
            <nav className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mb-6" aria-label="푸터 내비게이션">
                {[
                    { to: '/',        label: '홈' },
                    { to: '/test',    label: '테스트 시작' },
                    { to: '/privacy', label: '개인정보처리방침' },
                ].map(({ to, label }, i, arr) => (
                    <span key={to} className="flex items-center gap-5">
                        <Link to={to} className="text-xs font-medium text-slate-grey hover:text-vibrant-pink transition-colors">
                            {label}
                        </Link>
                        {i < arr.length - 1 && (
                            <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                        )}
                    </span>
                ))}
            </nav>

            {/* 면책 조항 */}
            <p className="text-center text-xs leading-relaxed text-slate-400 max-w-xs mx-auto mb-4">
                본 테스트는 오락 목적의 심리 성향 분석이며,<br />
                의학적·심리상담적 진단이 아닙니다.
            </p>

            {/* 광고 안내 */}
            <p className="text-center text-xs text-slate-400 mb-4">
                본 사이트는 Google AdSense 광고를 게재합니다.
            </p>

            {/* 저작권 */}
            <p className="text-center text-caption text-slate-400">
                © {new Date().getFullYear()} 나는솔로 연애유형 테스트. All rights reserved.
            </p>
        </footer>
    );
}
