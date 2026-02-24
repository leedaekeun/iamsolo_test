import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHARACTERS } from '@/data/characters';
import Footer from '@/components/Footer';

/* ═══════════════════════════════════════════
   HERO ILLUSTRATION — 러블리 커플
═══════════════════════════════════════════ */
function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 340 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-label="러블리 커플 일러스트"
        >
            <ellipse cx="170" cy="240" rx="155" ry="38" fill="rgba(255,160,200,0.12)" />
            <circle cx="170" cy="148" r="118" fill="rgba(255,248,252,0.95)" />
            <circle cx="170" cy="148" r="94"  fill="rgba(255,240,248,0.7)" />

            {/* 왼쪽 인물 (여성) */}
            <ellipse cx="108" cy="238" rx="30" ry="8" fill="rgba(255,100,160,0.10)" />
            <ellipse cx="108" cy="105" rx="30" ry="32" fill="#FFD6B0" />
            <path d="M78 93 Q82 60 108 65 Q134 60 138 93 Q132 76 108 73 Q84 76 78 93Z" fill="#4A2C10" />
            <path d="M78 93 Q71 112 76 130" stroke="#4A2C10" strokeWidth="9" strokeLinecap="round" />
            <path d="M138 93 Q145 112 140 130" stroke="#4A2C10" strokeWidth="9" strokeLinecap="round" />
            <ellipse cx="100" cy="107" rx="4.5" ry="5.5" fill="#2D1B00" />
            <ellipse cx="116" cy="107" rx="4.5" ry="5.5" fill="#2D1B00" />
            <circle cx="101.8" cy="105.2" r="1.6" fill="white" />
            <circle cx="117.8" cy="105.2" r="1.6" fill="white" />
            <ellipse cx="92"  cy="116" rx="7" ry="3.5" fill="rgba(255,120,150,0.30)" />
            <ellipse cx="124" cy="116" rx="7" ry="3.5" fill="rgba(255,120,150,0.30)" />
            <path d="M104 120 Q108 126 112 120" stroke="#E05070" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M80 200 Q86 148 108 142 Q130 148 136 200Z" fill="#FF80B5" />
            <path d="M86 200 Q108 176 130 200" fill="#FF60A0" />
            <path d="M80 156 Q64 166 61 180" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <path d="M136 156 Q154 166 158 176" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <rect x="98"  y="198" width="11" height="36" rx="5.5" fill="#3D2010" />
            <rect x="113" y="198" width="11" height="36" rx="5.5" fill="#3D2010" />
            <ellipse cx="104" cy="234" rx="10" ry="6" fill="#FF4080" />
            <ellipse cx="119" cy="234" rx="10" ry="6" fill="#FF4080" />

            {/* 오른쪽 인물 (남성) */}
            <ellipse cx="232" cy="238" rx="30" ry="8" fill="rgba(80,120,255,0.10)" />
            <ellipse cx="232" cy="100" rx="30" ry="32" fill="#FFD6B0" />
            <path d="M202 90 Q206 60 232 63 Q258 60 262 90 Q256 72 232 70 Q208 72 202 90Z" fill="#2D1B00" />
            <ellipse cx="224" cy="101" rx="4.5" ry="5.5" fill="#2D1B00" />
            <ellipse cx="240" cy="101" rx="4.5" ry="5.5" fill="#2D1B00" />
            <circle cx="225.8" cy="99.2" r="1.6" fill="white" />
            <circle cx="241.8" cy="99.2" r="1.6" fill="white" />
            <ellipse cx="217" cy="110" rx="7" ry="3.5" fill="rgba(255,120,150,0.25)" />
            <ellipse cx="247" cy="110" rx="7" ry="3.5" fill="rgba(255,120,150,0.25)" />
            <path d="M228 113 Q232 118 236 113" stroke="#C06060" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <rect x="202" y="130" width="60" height="68" rx="10" fill="#5B7CCC" />
            <rect x="225" y="130" width="14" height="34" fill="white" />
            <path d="M229 133 L232 162 L235 133" fill="#FF4080" />
            <path d="M202 148 Q182 158 178 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <path d="M262 148 Q278 158 282 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />
            <rect x="216" y="196" width="13" height="36" rx="6.5" fill="#3A4A6B" />
            <rect x="233" y="196" width="13" height="36" rx="6.5" fill="#3A4A6B" />
            <ellipse cx="222" cy="232" rx="11" ry="6" fill="#1E2D4A" />
            <ellipse cx="240" cy="232" rx="11" ry="6" fill="#1E2D4A" />

            {/* 손 잡기 */}
            <path d="M158 176 Q168 180 178 174" stroke="#FFD6B0" strokeWidth="10" strokeLinecap="round" />

            {/* 하트 */}
            <g className="animate-float-heart" style={{ transformOrigin: '170px 60px' }}>
                <path d="M170 62 C170 62 155 47 155 39 C155 31 170 31 170 39 C170 31 185 31 185 39 C185 47 170 62 170 62Z" fill="#FF4080" />
                <path d="M170 59 C170 59 157 46 157 40 C157 34 170 34 170 40" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
            <path d="M80 65 C80 65 73 58 73 54 C73 50 80 50 80 54 C80 50 87 50 87 54 C87 58 80 65 80 65Z" fill="#FF80B5" opacity="0.85" />
            <path d="M262 74 C262 74 255 67 255 63 C255 59 262 59 262 63 C262 59 269 59 269 63 C269 67 262 74 262 74Z" fill="#FFB3D1" opacity="0.90" />
            <path d="M56 160 C56 160 51 155 51 152 C51 149 56 149 56 152 C56 149 61 149 61 152 C61 155 56 160 56 160Z" fill="#FF6BAA" opacity="0.60" />
            <path d="M290 148 C290 148 285 143 285 140 C285 137 290 137 290 140 C290 137 295 137 295 140 C295 143 290 148 290 148Z" fill="#FF6BAA" opacity="0.55" />

            {/* 별 */}
            <g fill="#FFD700" opacity="0.75">
                <path d="M52 108 L54.5 102 L57 108 L63 110 L57 112 L54.5 118 L52 112 L46 110Z" />
                <path d="M290 108 L292 103 L294 108 L299 110 L294 112 L292 117 L290 112 L285 110Z" />
                <path d="M158 22 L160 18 L162 22 L167 24 L162 26 L160 30 L158 26 L153 24Z" />
            </g>
            <g opacity="0.55">
                <circle cx="66"  cy="198" r="5"   fill="#FFB3D1" />
                <circle cx="58"  cy="188" r="3.5" fill="#FF80B5" />
                <circle cx="278" cy="186" r="5"   fill="#FFB3D1" />
                <circle cx="288" cy="196" r="3.5" fill="#FF80B5" />
            </g>
        </svg>
    );
}

/* ═══════════════════════════════════════════
   FEATURE ILLUSTRATIONS (팝업 & 데스크탑용)
═══════════════════════════════════════════ */
function IllustQuiz() {
    return (
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect x="9" y="13" width="34" height="36" rx="7" fill="#FFE0EC" />
            <rect x="9" y="13" width="34" height="36" rx="7" stroke="#FF4080" strokeWidth="1.8" />
            <rect x="19" y="8"  width="14" height="11" rx="5" fill="#FF4080" />
            <rect x="22" y="10" width="8"  height="6"  rx="3" fill="white" opacity="0.6" />
            <line x1="17" y1="26" x2="35" y2="26" stroke="#FF4080" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="32" x2="31" y2="32" stroke="#FF80B5" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="38" x2="27" y2="38" stroke="#FFB3D1" strokeWidth="2" strokeLinecap="round" />
            <circle cx="13.5" cy="26" r="2.2" fill="#FF4080" opacity="0.35" />
            <path d="M12.5 26 L13.5 27.2 L15.2 24.8" stroke="#FF4080" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IllustHeart() {
    return (
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path d="M26 41 L20 35 H12 C9.8 35 8 33.2 8 31 V16 C8 13.8 9.8 12 12 12 H40 C42.2 12 44 13.8 44 16 V31 C44 33.2 42.2 35 40 35 H32 L26 41Z"
                fill="#FFE0EC" stroke="#FF4080" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M20 24 C20 24 16 20 16 18 C16 16 20 16 20 18 C20 16 24 16 24 18 C24 20 20 24 20 24Z" fill="#FF4080" />
            <path d="M26 24 C26 24 22 20 22 18 C22 16 26 16 26 18 C26 16 30 16 30 18 C30 20 26 24 26 24Z" fill="#FF80B5" opacity="0.7" />
            <path d="M32 24 C32 24 28 20 28 18 C28 16 32 16 32 18 C32 16 36 16 36 18 C36 20 32 24 32 24Z" fill="#FFB3D1" opacity="0.55" />
        </svg>
    );
}

function IllustChars() {
    return (
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <circle cx="17" cy="16" r="7"  fill="#FFD6B0" />
            <path d="M10 16 Q11 9 17 10 Q23 9 24 16 Q22 12 17 11 Q12 12 10 16Z" fill="#4A2C10" />
            <ellipse cx="14.5" cy="17" rx="2" ry="2.5" fill="#2D1B00" />
            <ellipse cx="19.5" cy="17" rx="2" ry="2.5" fill="#2D1B00" />
            <path d="M15 21 Q17 23.5 19 21" stroke="#E05070" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <path d="M6 44 Q7 34 17 32 Q22 33 24 38" fill="#FF80B5" />
            <circle cx="35" cy="14" r="7"  fill="#FFD6B0" />
            <path d="M28 14 Q29 8 35 8 Q41 8 42 14 Q40 10 35 9 Q30 10 28 14Z" fill="#2D1B00" />
            <ellipse cx="32.5" cy="15" rx="2" ry="2.5" fill="#2D1B00" />
            <ellipse cx="37.5" cy="15" rx="2" ry="2.5" fill="#2D1B00" />
            <path d="M33 19 Q35 21.5 37 19" stroke="#C06060" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <rect x="27" y="21" width="16" height="22" rx="5" fill="#5B7CCC" />
            <path d="M28 44 Q28 34 35 32 Q42 34 44 44" fill="#5B7CCC" opacity="0.6" />
            <circle cx="26" cy="29" r="2" fill="#FF80B5" opacity="0.7" />
        </svg>
    );
}

function IllustTimer() {
    return (
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <circle cx="26" cy="30" r="17" fill="#FFE0EC" stroke="#FF4080" strokeWidth="1.8" />
            <circle cx="26" cy="30" r="13" fill="white" />
            <rect x="22" y="10" width="8" height="6" rx="3" fill="#FF4080" />
            <line x1="18" y1="10" x2="34" y2="10" stroke="#FF4080" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="30" x2="26" y2="21" stroke="#FF4080" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="26" y1="30" x2="33" y2="30" stroke="#FF80B5" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="26" cy="30" r="2.2" fill="#FF4080" />
            <line x1="26" y1="15"   x2="26" y2="17.5" stroke="#FFB3D1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="42.5" x2="26" y2="45"   stroke="#FFB3D1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="11"  y1="30"  x2="13.5" y2="30" stroke="#FFB3D1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="38.5" y1="30" x2="41"   y2="30" stroke="#FFB3D1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

/* ═══════════════════════════════════════════
   FEATURE CARD (팝업 & 데스크탑용)
═══════════════════════════════════════════ */
interface FeatureCardProps { Icon: React.FC; title: string; desc: string; }

function FeatureCard({ Icon, title, desc }: FeatureCardProps) {
    return (
        <div className="feature-card">
            <div className="feature-icon"><Icon /></div>
            <p className="font-bold text-sm leading-tight" style={{ color: '#1e1e2d' }}>{title}</p>
            <p className="text-xs leading-relaxed" style={{ color: '#8888a8' }}>{desc}</p>
        </div>
    );
}

const FEATURES: FeatureCardProps[] = [
    { Icon: IllustQuiz,  title: '10개 문항',    desc: '실전 연애 상황으로 구성된 심층 문제' },
    { Icon: IllustHeart, title: '생생한 상황',   desc: '나는 솔로 실제 에피소드 기반 시나리오' },
    { Icon: IllustChars, title: '8가지 캐릭터', desc: '연애 원형 캐릭터 중 나의 매칭 결과' },
    { Icon: IllustTimer, title: '단 2분 · 무료', desc: '익명 100% · 개인정보 수집 없음' },
];

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
    const [showGuide, setShowGuide] = useState(false);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">

            {/* ── 배경 블롭 ── */}
            <div className="bg-blob animate-blob" aria-hidden="true"
                style={{ width: '340px', height: '340px', top: '-100px', right: '-120px',
                    background: 'radial-gradient(circle, rgba(255,180,210,0.30), transparent)' }} />
            <div className="bg-blob animate-blob" aria-hidden="true"
                style={{ width: '260px', height: '260px', bottom: '80px', left: '-80px', animationDelay: '3s',
                    background: 'radial-gradient(circle, rgba(255,180,220,0.20), transparent)' }} />

            {/* ══════════════════════════════════════
                히어로 그리드 (데스크탑 2컬럼 / 모바일 1컬럼)
            ══════════════════════════════════════ */}
            <div className="hero-grid relative z-10">

                {/* ── 텍스트 영역 ── */}
                <div className="px-6 pt-10 pb-0 md:py-12 md:pl-10 md:pr-6 text-center md:text-left animate-slide-down">

                    <span className="badge-pink inline-block mb-4">💕 연애 심리 테스트</span>

                    {/* 타이틀: 모바일 2줄 */}
                    <h1 className="text-display mb-3">
                        나는 솔로<br />
                        <span className="text-pink-gradient">어떤 캐릭터일까?</span>
                    </h1>

                    {/* 서브타이틀 */}
                    <p className="leading-relaxed mb-4 max-w-xs md:max-w-sm mx-auto md:mx-0"
                        style={{ color: '#6b6b8a', fontSize: 'var(--fs-sm)' }}>
                        심리학 원형 데이터 기반 나의{' '}
                        <strong style={{ color: '#ff4080' }}>찐 연애 성향 캐릭터</strong> 매칭 테스트
                    </p>

                    {/* 테스트 안내 버튼 — 모바일에서만 노출 */}
                    <button
                        onClick={() => setShowGuide(true)}
                        className="md:hidden inline-flex items-center gap-1.5 mb-4"
                        style={{
                            fontSize: 'var(--fs-xs)',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            padding: '0.4rem 0.9rem',
                            borderRadius: '99px',
                            background: 'linear-gradient(135deg, #fff0f5, #ffe0ec)',
                            color: '#ff4080',
                            border: '1px solid #ffb3d1',
                            cursor: 'pointer',
                        }}
                    >
                        📋 테스트 안내 보기
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* 데스크탑 CTA */}
                    <div className="hidden md:block">
                        <Link to="/test" className="btn-primary animate-wiggle" style={{ maxWidth: '280px' }}>
                            <span>내 캐릭터 확인하러 가기</span>
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* ── 일러스트 ── */}
                <div className="px-10 pb-2 animate-pop-in delay-200 md:pr-10 md:pb-8"
                    style={{ maxWidth: '360px', margin: '0 auto', width: '100%' }}>
                    <div className="animate-float-y">
                        <HeroIllustration />
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                데스크탑 전용 피처 그리드
            ══════════════════════════════════════ */}
            <div className="hidden md:block px-8 pb-8 relative z-10 animate-slide-up delay-300">
                <p className="text-label text-center mb-4">테스트 안내</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
                </div>
            </div>

            {/* ══════════════════════════════════════
                모바일 CTA 버튼
            ══════════════════════════════════════ */}
            <div className="px-5 pb-4 relative z-10 animate-slide-up delay-300 md:hidden">
                <Link to="/test" className="btn-primary animate-wiggle">
                    <span>내 캐릭터 확인하러 가기</span>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>

            {/* ── 신뢰 통계 ── */}
            <div className="flex items-center justify-center gap-4 pb-8 px-5 relative z-10 animate-fade-in delay-400">
                <span className="text-xs" style={{ color: '#bbb0c0' }}>
                    💖 누적 <strong style={{ color: '#ff80b5' }}>10만+</strong>
                </span>
                <span className="stat-divider" />
                <span className="text-xs" style={{ color: '#bbb0c0' }}>
                    ⭐ 만족도 <strong style={{ color: '#ff80b5' }}>4.9/5</strong>
                </span>
                <span className="stat-divider" />
                <span className="text-xs" style={{ color: '#bbb0c0' }}>🔒 익명 보장</span>
            </div>

            {/* ══════════════════════════════════════
                이 테스트란? — 크롤러/SEO용 콘텐츠 영역
            ══════════════════════════════════════ */}
            <section
                className="px-5 py-10 relative z-10"
                style={{ borderTop: '1.5px solid #ffe0ec' }}
                aria-label="테스트 소개"
            >
                {/* 소개 텍스트 */}
                <div className="text-center mb-8">
                    <span className="badge-pink inline-block mb-3">🧠 테스트 소개</span>
                    <h2
                        className="text-section mb-3"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        나는솔로 연애유형 테스트란?
                    </h2>
                    <p
                        className="leading-relaxed mx-auto"
                        style={{ color: '#6b6b8a', fontSize: 'var(--fs-sm)', maxWidth: '420px' }}
                    >
                        인기 연애 예능 '나는 솔로' 출연진 캐릭터를 모티브로 한 심리 성향 분석 테스트입니다.
                        실제 방송에서 벌어질 법한 생생한 연애 상황 10가지에 답하면,
                        심리학 원형(Archetype) 이론 기반으로 나와 가장 싱크로율이 높은 연애 유형 캐릭터를 찾아줍니다.
                    </p>
                </div>

                {/* 테스트 특징 3가지 */}
                <div
                    className="mb-10"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                    }}
                >
                    {[
                        { icon: '🎯', title: '실전 연애 상황', desc: '실제 솔로나라에서 일어날 법한 상황 기반' },
                        { icon: '🔬', title: '심리학 기반 분석', desc: 'Archetype 이론 + 성향 척도 알고리즘' },
                        { icon: '💌', title: '8가지 연애 유형', desc: '나만의 연애 패턴과 궁합까지 분석' },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="card-pink p-4 text-center"
                        >
                            <p className="text-2xl mb-2">{item.icon}</p>
                            <p className="font-bold text-xs mb-1" style={{ color: '#1e1e2d' }}>{item.title}</p>
                            <p className="text-xs leading-relaxed" style={{ color: '#8888a8' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 8가지 캐릭터 소개 */}
                <div className="mb-6">
                    <h3
                        className="font-black text-center mb-5"
                        style={{ fontSize: 'var(--fs-h3)', color: '#1e1e2d' }}
                    >
                        8가지 연애 유형 캐릭터
                    </h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '10px',
                        }}
                    >
                        {CHARACTERS.map((char) => (
                            <div
                                key={char.id}
                                className="card-pink p-4"
                                style={{ borderLeft: `3px solid ${char.gender === 'F' ? '#ff80b5' : '#5B7CCC'}` }}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span
                                        className="font-black text-base"
                                        style={{ color: char.gender === 'F' ? '#ff4080' : '#5B7CCC' }}
                                    >
                                        {char.name}
                                    </span>
                                    <span
                                        className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                                        style={{
                                            background: char.gender === 'F' ? '#fff0f5' : '#f0f4ff',
                                            color: char.gender === 'F' ? '#ff80b5' : '#5B7CCC',
                                        }}
                                    >
                                        {char.gender === 'F' ? '여' : '남'}
                                    </span>
                                </div>
                                <p className="text-xs font-bold mb-1.5" style={{ color: '#8888a8' }}>
                                    {char.title}
                                </p>
                                <p className="text-xs leading-relaxed" style={{ color: '#6b6b8a' }}>
                                    {char.description.slice(0, 45)}…
                                </p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {char.keywords.slice(0, 3).map((kw) => (
                                        <span
                                            key={kw}
                                            className="text-xs px-1.5 py-0.5 rounded-full"
                                            style={{
                                                background: '#fff8fb',
                                                color: '#ff80b5',
                                                border: '1px solid #ffcce0',
                                            }}
                                        >
                                            #{kw}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 테스트 시작 CTA */}
                <div className="text-center">
                    <Link to="/test" className="btn-primary" style={{ maxWidth: '300px', margin: '0 auto', display: 'inline-flex' }}>
                        <span>나의 연애 유형 알아보기</span>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* 푸터 */}
            <Footer />

            {/* ══════════════════════════════════════
                테스트 안내 바텀시트 팝업 (모바일)
            ══════════════════════════════════════ */}

            {/* 배경 딤 */}
            <div
                onClick={() => setShowGuide(false)}
                aria-hidden="true"
                style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(20, 10, 20, 0.45)',
                    backdropFilter: 'blur(3px)',
                    zIndex: 100,
                    opacity: showGuide ? 1 : 0,
                    pointerEvents: showGuide ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease',
                }}
            />

            {/* 바텀시트 */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="테스트 안내"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: '50%',
                    transform: showGuide
                        ? 'translateX(-50%) translateY(0)'
                        : 'translateX(-50%) translateY(105%)',
                    width: '100%',
                    maxWidth: '480px',
                    zIndex: 101,
                    transition: 'transform 0.38s cubic-bezier(0.32, 0.72, 0, 1)',
                    background: '#ffffff',
                    borderRadius: '28px 28px 0 0',
                    boxShadow: '0 -10px 48px rgba(255, 80, 128, 0.18)',
                    paddingTop: '10px',
                }}
            >
                {/* 핸들 바 */}
                <div style={{
                    width: '40px', height: '4px',
                    background: '#e8d8e8', borderRadius: '99px',
                    margin: '0 auto 18px',
                }} />

                <div className="px-5 pb-8">
                    {/* 헤더 */}
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <p className="text-label mb-0.5">📋 테스트 안내</p>
                            <p className="text-xs" style={{ color: '#bbb0c0' }}>
                                시작 전에 확인해보세요
                            </p>
                        </div>
                        <button
                            onClick={() => setShowGuide(false)}
                            aria-label="닫기"
                            style={{
                                width: '36px', height: '36px',
                                borderRadius: '50%',
                                background: '#fff0f5',
                                border: '1.5px solid #ffcce0',
                                color: '#ff80b5',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                flexShrink: 0,
                            }}
                        >
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* 피처 카드 2x2 그리드 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
                        {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
                    </div>

                    {/* 팝업 내 CTA */}
                    <Link
                        to="/test"
                        onClick={() => setShowGuide(false)}
                        className="btn-primary"
                        style={{ borderRadius: '16px' }}
                    >
                        <span>바로 시작하기</span>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
