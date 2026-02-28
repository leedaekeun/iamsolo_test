import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { CHARACTERS, Archetype } from '@/data/characters';

/* ─────────────────────────────────────────
   캐릭터 아바타 설정 (imageUrl 없으므로 이모지+그라디언트)
───────────────────────────────────────── */
const CHAR_AVATAR: Record<string, { emoji: string; from: string; to: string }> = {
    'm1_youngsoo': { emoji: '🧐', from: '#C7D2FE', to: '#818CF8' },
    'm2_youngho': { emoji: '😄', from: '#FDE68A', to: '#FBBF24' },
    'm3_youngsik': { emoji: '🤗', from: '#A7F3D0', to: '#34D399' },
    'm4_youngchul': { emoji: '😤', from: '#FECACA', to: '#F87171' },
    'm5_kwangsoo': { emoji: '🤓', from: '#BFDBFE', to: '#60A5FA' },
    'm6_sangchul': { emoji: '😊', from: '#E2E8F0', to: '#94A3B8' },
    'f1_youngsook': { emoji: '👑', from: '#FEF3C7', to: '#FCD34D' },
    'f2_jungsook': { emoji: '🔥', from: '#FECACA', to: '#F87171' },
    'f3_soonja': { emoji: '🏕️', from: '#A7F3D0', to: '#34D399' },
    'f4_youngja': { emoji: '🥺', from: '#FBCFE8', to: '#F472B6' },
    'f5_oksoon': { emoji: '✨', from: '#D1FAE5', to: '#6EE7B7' },
    'f6_hyunsook': { emoji: '📚', from: '#C7D2FE', to: '#818CF8' },
};

function CharacterAvatarCard({ character }: { character: Archetype }) {
    const av = CHAR_AVATAR[character.id] ?? { emoji: '💕', from: '#FBCFE8', to: '#F472B6' };
    const isFemale = character.gender === 'F';
    const hashtags = character.keywords.slice(0, 3);

    return (
        <div className="card p-7">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <h3 className="text-card-title">{character.name}</h3>
                    <p className="text-caption text-slate-400 mt-1">{character.title}</p>
                </div>
                <span className={`text-caption px-3 py-1 rounded-full ${isFemale
                    ? 'bg-vibrant-pink text-white'
                    : 'bg-deep-charcoal text-white'
                    }`}>
                    {isFemale ? 'Female' : 'Male'}
                </span>
            </div>

            {/* 아바타 — 이미지 렌더링 (없을 시 기존 이모지) */}
            <div className="w-full aspect-square rounded-[2rem] mb-6 overflow-hidden shadow-card border border-slate-100 flex items-center justify-center relative">
                {character.imageUrl ? (
                    <img
                        src={character.imageUrl}
                        alt={character.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center text-6xl"
                        style={{
                            background: `linear-gradient(135deg, ${av.from}, ${av.to})`,
                        }}
                    >
                        {av.emoji}
                    </div>
                )}
            </div>

            <p className="text-body text-sm line-clamp-2 mb-5">
                {character.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {hashtags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal">

            {/* ── 히어로 헤더 ── */}
            <header className="relative pt-24 pb-16 px-6 text-center overflow-hidden bg-white rounded-section-b shadow-natural mb-6">

                {/* 배지 */}
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-soft-pink border border-mid-pink mb-10 w-fit mx-auto">
                    <span className="text-caption text-vibrant-pink text-center tracking-wide inline-block translate-y-[2px]">Love Psychology Test</span>
                </div>

                {/* 제목 */}
                <h1 className="text-hero mb-5">
                    솔로 나라에서<br />
                    <span className="text-vibrant-pink">나는 무슨 이름일까?</span>
                </h1>

                {/* 서브 */}
                <p className="text-body max-w-xs mx-auto mb-14">
                    심리학 원형 데이터 기반<br />
                    나의 <span className="text-vibrant-pink font-semibold">찐 연애 성향 캐릭터</span> 매칭
                </p>

                {/* 메인 이미지 */}
                <div className="relative w-full max-w-[340px] mx-auto aspect-[4/3] mb-14 group">
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-natural bg-white transition-transform duration-500 group-hover:scale-[1.01]">
                        <img
                            src="/images/main.jpg"
                            alt="연애 성향 테스트 일러스트"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-5 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap border-[3px] border-white">
                        <span className="material-symbols-outlined text-sm text-vibrant-pink">verified</span>
                        100% 싱크로율 분석
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-sm mx-auto px-2">
                    <button onClick={() => navigate('/test')} className="btn-primary">
                        내 캐릭터 확인하기
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>

                {/* 신뢰 지표 */}
                <div className="flex justify-center items-center gap-5 mt-10 text-caption text-slate-400">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        누적 10만+
                    </span>
                    <span className="w-px h-3 bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        만족도 4.9
                    </span>
                    <span className="w-px h-3 bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        익명 보장
                    </span>
                </div>
            </header>

            {/* ── 분석 방법 섹션 ── */}
            <section className="px-6 py-20 bg-off-white">
                <div className="text-center mb-14">
                    <h2 className="text-section-title mb-4">어떻게 분석하나요?</h2>
                    <div className="divider-pink mx-auto mb-5" />
                    <p className="text-body max-w-sm mx-auto">
                        실제 방송 상황 10가지에 답하고,<br />
                        심리학 원형(Archetype) 이론으로 분석합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {[
                        { icon: 'diversity_3', title: '실전 연애 상황', desc: '솔로나라에서 일어날 법한\n리얼한 상황을 제시합니다', pink: true },
                        { icon: 'psychology', title: '심리학 기반 분석', desc: 'Archetype 이론과\n정밀 성향 척도를 적용합니다', pink: false },
                        { icon: 'style', title: '12가지 연애 유형', desc: '나만의 연애 패턴과\n매칭 궁합을 알려드립니다', pink: true },
                    ].map(({ icon, title, desc, pink }) => (
                        <div key={title} className="flex flex-col items-center text-center group">
                            <div className={`mb-5 transition-transform duration-300 group-hover:-translate-y-2 ${pink ? 'text-vibrant-pink' : 'text-deep-charcoal'}`}>
                                <span className="material-symbols-outlined text-[3.5rem] font-light">{icon}</span>
                            </div>
                            <h3 className="text-card-title mb-2">{title}</h3>
                            <p className="text-body text-xs leading-relaxed whitespace-pre-line">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 캐릭터 카드 섹션 ── */}
            <section className="px-6 pt-20 pb-16 panel-section">
                <div className="flex flex-col items-center justify-center text-center mb-10 gap-3">
                    <h2 className="text-section-title">12가지 캐릭터</h2>
                    <span className="text-caption font-semibold tracking-wide text-slate-500 bg-white shadow-sm border border-slate-100 px-4 py-1.5 rounded-full">
                        Total 12 Types
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {CHARACTERS.map((character) => (
                        <CharacterAvatarCard key={character.id} character={character} />
                    ))}
                </div>

                <div className="mt-14 max-w-sm mx-auto">
                    <button onClick={() => navigate('/test')} className="btn-primary">
                        나의 연애 유형 알아보기
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
