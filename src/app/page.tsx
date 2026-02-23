import Link from 'next/link';

/* ─── 인라인 SVG 일러스트: 러블리 커플 + 하트 ─── */
function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 320 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[280px] mx-auto"
            aria-label="러블리 커플 일러스트"
        >
            {/* 배경 원형 글로우 */}
            <ellipse cx="160" cy="200" rx="130" ry="30" fill="rgba(255,160,200,0.15)" />
            <circle cx="160" cy="130" r="95" fill="rgba(255,240,248,0.8)" />
            <circle cx="160" cy="130" r="75" fill="rgba(255,230,242,0.6)" />

            {/* 왼쪽 인물 (여성) */}
            {/* 머리 */}
            <ellipse cx="108" cy="95" rx="28" ry="30" fill="#FFD6B0" />
            {/* 머리카락 */}
            <path d="M80 85 Q85 55 108 60 Q131 55 136 85 Q130 70 108 68 Q86 70 80 85Z" fill="#4A2C10" />
            <path d="M80 85 Q74 100 80 115" stroke="#4A2C10" strokeWidth="8" strokeLinecap="round" />
            <path d="M136 85 Q142 100 136 115" stroke="#4A2C10" strokeWidth="8" strokeLinecap="round" />
            {/* 눈 */}
            <ellipse cx="100" cy="96" rx="4" ry="5" fill="#2D1B00" />
            <ellipse cx="116" cy="96" rx="4" ry="5" fill="#2D1B00" />
            <circle cx="101.5" cy="94.5" r="1.5" fill="white" />
            <circle cx="117.5" cy="94.5" r="1.5" fill="white" />
            {/* 볼 홍조 */}
            <ellipse cx="94" cy="104" rx="6" ry="3" fill="rgba(255,120,150,0.35)" />
            <ellipse cx="122" cy="104" rx="6" ry="3" fill="rgba(255,120,150,0.35)" />
            {/* 입 */}
            <path d="M104 108 Q108 113 112 108" stroke="#E05070" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* 몸 (드레스) */}
            <path d="M84 175 Q90 130 108 125 Q126 130 132 175Z" fill="#FF80B5" />
            <path d="M90 175 Q108 155 126 175" fill="#FF60A0" />
            {/* 팔 */}
            <path d="M84 140 Q70 148 68 160" stroke="#FFD6B0" strokeWidth="9" strokeLinecap="round" />
            {/* 왼팔 (상대방 쪽으로) */}
            <path d="M132 140 Q148 148 150 158" stroke="#FFD6B0" strokeWidth="9" strokeLinecap="round" />
            {/* 다리 */}
            <rect x="98" y="174" width="10" height="32" rx="5" fill="#4A2C10" />
            <rect x="112" y="174" width="10" height="32" rx="5" fill="#4A2C10" />
            {/* 신발 */}
            <ellipse cx="103" cy="206" rx="8" ry="5" fill="#FF4080" />
            <ellipse cx="117" cy="206" rx="8" ry="5" fill="#FF4080" />

            {/* 오른쪽 인물 (남성) */}
            {/* 머리 */}
            <ellipse cx="212" cy="90" rx="28" ry="30" fill="#FFD6B0" />
            {/* 머리카락 */}
            <path d="M184 82 Q188 56 212 58 Q236 56 240 82 Q234 66 212 64 Q190 66 184 82Z" fill="#2D1B00" />
            {/* 눈 */}
            <ellipse cx="204" cy="91" rx="4" ry="5" fill="#2D1B00" />
            <ellipse cx="220" cy="91" rx="4" ry="5" fill="#2D1B00" />
            <circle cx="205.5" cy="89.5" r="1.5" fill="white" />
            <circle cx="221.5" cy="89.5" r="1.5" fill="white" />
            {/* 볼 홍조 */}
            <ellipse cx="198" cy="99" rx="6" ry="3" fill="rgba(255,120,150,0.30)" />
            <ellipse cx="226" cy="99" rx="6" ry="3" fill="rgba(255,120,150,0.30)" />
            {/* 입 */}
            <path d="M208 103 Q212 108 216 103" stroke="#C06060" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* 몸 (정장) */}
            <rect x="186" y="118" width="52" height="58" rx="8" fill="#5B7CCC" />
            {/* 셔츠 & 넥타이 */}
            <rect x="206" y="118" width="12" height="30" fill="white" />
            <path d="M210 120 L212 145 L214 120" fill="#FF4080" />
            {/* 팔 */}
            <path d="M186 130 Q168 138 165 155" stroke="#FFD6B0" strokeWidth="9" strokeLinecap="round" />
            <path d="M238 130 Q252 138 254 155" stroke="#FFD6B0" strokeWidth="9" strokeLinecap="round" />
            {/* 다리 */}
            <rect x="197" y="174" width="12" height="32" rx="6" fill="#3A4A6B" />
            <rect x="213" y="174" width="12" height="32" rx="6" fill="#3A4A6B" />
            {/* 신발 */}
            <ellipse cx="203" cy="206" rx="9" ry="5" fill="#1E2D4A" />
            <ellipse cx="219" cy="206" rx="9" ry="5" fill="#1E2D4A" />

            {/* 두 인물 사이 손 잡기 */}
            <path d="M150 158 Q160 162 165 155" stroke="#FFD6B0" strokeWidth="9" strokeLinecap="round" />

            {/* 떠다니는 하트들 */}
            <g className="animate-float-heart" style={{ transformOrigin: '160px 50px' }}>
                <path d="M160 52 C160 52 148 40 148 34 C148 28 160 28 160 34 C160 28 172 28 172 34 C172 40 160 52 160 52Z" fill="#FF4080" />
            </g>

            {/* 작은 하트들 */}
            <path d="M80 58 C80 58 74 52 74 49 C74 46 80 46 80 49 C80 46 86 46 86 49 C86 52 80 58 80 58Z"
                fill="#FF80B5" opacity="0.8" />
            <path d="M245 68 C245 68 239 62 239 59 C239 56 245 56 245 59 C245 56 251 56 251 59 C251 62 245 68 245 68Z"
                fill="#FFB3D1" opacity="0.9" />
            <path d="M58 140 C58 140 54 136 54 134 C54 132 58 132 58 134 C58 132 62 132 62 134 C62 136 58 140 58 140Z"
                fill="#FF6BAA" opacity="0.6" />
            <path d="M268 130 C268 130 264 126 264 124 C264 122 268 122 268 124 C268 122 272 122 272 124 C272 126 268 130 268 130Z"
                fill="#FF6BAA" opacity="0.6" />

            {/* 별/스파클 */}
            <g fill="#FFD700" opacity="0.7">
                <path d="M52 90 L54 86 L56 90 L60 92 L56 94 L54 98 L52 94 L48 92Z" />
                <path d="M268 90 L270 87 L272 90 L275 91.5 L272 93 L270 96 L268 93 L265 91.5Z" />
                <path d="M148 22 L150 19 L152 22 L155 23.5 L152 25 L150 28 L148 25 L145 23.5Z" />
            </g>
        </svg>
    );
}

/* ─── 특징 설명 아이템 ─── */
function FeatureItem({ icon, text }: { icon: string; text: string }) {
    return (
        <li className="flex items-center gap-3">
            <span
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                style={{ background: 'rgba(255,80,128,0.10)' }}
            >
                {icon}
            </span>
            <span className="text-sm leading-relaxed" style={{ color: '#4a4a68' }}>
                {text}
            </span>
        </li>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* ── HEADER ── */}
            <header className="pt-10 px-6 text-center animate-slide-down">
                <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #fff0f5, #ffe0ec)',
                        color: '#ff4080',
                        border: '1px solid #ffb3d1',
                    }}
                >
                    💕 연애 심리 테스트
                </span>

                <h1
                    className="text-4xl font-black leading-tight mb-3"
                    style={{ color: '#1e1e2d', letterSpacing: '-0.02em' }}
                >
                    나는 솔로
                    <br />
                    <span className="text-pink-gradient">어떤 캐릭터일까?</span>
                </h1>

                <p className="text-sm leading-relaxed" style={{ color: '#6b6b8a' }}>
                    심리학 원형 데이터 기반 나의
                    <br />
                    <strong style={{ color: '#ff4080' }}>찐 연애 성향 캐릭터</strong> 매칭 테스트
                </p>
            </header>

            {/* ── 일러스트 HERO ── */}
            <div className="px-6 py-6 animate-pop-in delay-100">
                <HeroIllustration />
            </div>

            {/* ── 테스트 소개 카드 ── */}
            <div className="px-6 animate-slide-up delay-200">
                <div className="card-pink p-5">
                    <p
                        className="text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ color: '#ffb3d1' }}
                    >
                        테스트 안내
                    </p>
                    <ul className="space-y-3">
                        <FeatureItem icon="✨" text="총 10개의 실전 연애 상황 문항으로 구성" />
                        <FeatureItem icon="🎯" text="나는 솔로에서 실제로 일어날 법한 생생한 상황!" />
                        <FeatureItem icon="📊" text="8가지 연애 원형 캐릭터 중 나의 매칭 결과 분석" />
                        <FeatureItem icon="⏱️" text="소요 시간 약 2분 · 무료 · 100% 익명" />
                    </ul>
                </div>
            </div>

            {/* ── CTA ── */}
            <div className="px-6 pt-5 pb-12 animate-slide-up delay-300">
                <Link href="/test" className="btn-primary animate-wiggle">
                    <span>내 캐릭터 확인하러 가기</span>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>

                {/* 신뢰 배지 */}
                <div className="flex items-center justify-center gap-4 mt-5">
                    <span className="text-xs" style={{ color: '#bbb0c0' }}>
                        💖 누적 테스트 <strong style={{ color: '#ff80b5' }}>10만+</strong>
                    </span>
                    <span className="w-px h-3" style={{ background: '#eecad8' }} />
                    <span className="text-xs" style={{ color: '#bbb0c0' }}>
                        ⭐ 만족도 <strong style={{ color: '#ff80b5' }}>4.9/5</strong>
                    </span>
                    <span className="w-px h-3" style={{ background: '#eecad8' }} />
                    <span className="text-xs" style={{ color: '#bbb0c0' }}>
                        🔒 개인정보 없음
                    </span>
                </div>
            </div>

        </div>
    );
}
