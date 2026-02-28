import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
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
    const { t } = useTranslation();
    const isFemale = character.gender === 'F';
    const hashtags = character.keywords.slice(0, 3);

    return (
        <div className="card p-7">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <h3 className="text-card-title">{t(`result.${character.id}`)}</h3>
                    <p className="text-caption text-slate-400 mt-1">{t(`characters.${character.id}.title`)}</p>
                </div>
                <span className={`text-caption px-3 py-1 rounded-full ${isFemale
                    ? 'bg-vibrant-pink text-white'
                    : 'bg-deep-charcoal text-white'
                    }`}>
                    {isFemale ? t('common.gender_female') : t('common.gender_male')}
                </span>
            </div>

            {/* 아바타 — 이미지 렌더링 (없을 시 기존 이모지) */}
            <div className="w-full aspect-square rounded-[2rem] mb-6 overflow-hidden shadow-card border border-slate-100 flex items-center justify-center relative">
                {character.imageUrl ? (
                    <img
                        src={character.imageUrl}
                        alt={t(`result.${character.id}`)}
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
                {t(`characters.${character.id}.description`)}
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
    const { t } = useTranslation();

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal">

            {/* ── 히어로 헤더 ── */}
            <header className="relative pt-8 sm:pt-16 pb-6 sm:pb-12 px-6 text-center overflow-hidden bg-white rounded-section-b shadow-natural mb-6">

                {/* 배지 */}
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-soft-pink border border-mid-pink mb-4 sm:mb-6 w-fit mx-auto">
                    <span className="text-caption text-vibrant-pink text-center tracking-wide inline-block translate-y-[2px]">{t('home.badge')}</span>
                </div>

                {/* 제목 */}
                <h1 className="text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight mb-3 sm:mb-4">
                    <Trans i18nKey="home.title_line1" />
                    <span className="text-vibrant-pink"><Trans i18nKey="home.title_line2" /></span>
                </h1>

                {/* 서브 */}
                <p className="text-body max-w-xs mx-auto mb-6 sm:mb-8 text-[14px] sm:text-[15px]">
                    <Trans i18nKey="home.subtitle" components={{ span: <span className="text-vibrant-pink font-semibold" /> }} />
                </p>

                {/* 메인 이미지 */}
                <div className="relative w-full max-w-[260px] sm:max-w-[320px] mx-auto aspect-[4/3] mb-8 sm:mb-10 group">
                    <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-natural bg-white transition-transform duration-500 group-hover:scale-[1.01]">
                        <img
                            src="/images/main.jpg"
                            alt="연애 성향 테스트 일러스트"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-5 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap border-[3px] border-white">
                        <span className="material-symbols-outlined text-sm text-vibrant-pink">verified</span>
                        {t('home.badge_100_sync')}
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-sm mx-auto px-2">
                    <button onClick={() => navigate('/test')} className="btn-primary">
                        {t('home.btn_check_character')}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>

                {/* 신뢰 지표 */}
                <div className="flex justify-center items-center gap-5 mt-10 text-caption text-slate-400">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        {t('home.trust_users')}
                    </span>
                    <span className="w-px h-3 bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        {t('home.trust_satisfaction')}
                    </span>
                    <span className="w-px h-3 bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vibrant-pink inline-block" />
                        {t('home.trust_anonymous')}
                    </span>
                </div>
            </header>

            {/* ── 분석 방법 섹션 ── */}
            <section className="px-6 py-20 bg-off-white">
                <div className="text-center mb-14">
                    <h2 className="text-section-title mb-4">{t('home.method_title')}</h2>
                    <div className="divider-pink mx-auto mb-5" />
                    <p className="text-body max-w-sm mx-auto" dangerouslySetInnerHTML={{ __html: t('home.method_desc') }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {[
                        { icon: 'diversity_3', title: t('home.method_cards.0.title'), desc: t('home.method_cards.0.desc'), pink: true },
                        { icon: 'psychology', title: t('home.method_cards.1.title'), desc: t('home.method_cards.1.desc'), pink: false },
                        { icon: 'style', title: t('home.method_cards.2.title'), desc: t('home.method_cards.2.desc'), pink: true },
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
                    <h2 className="text-section-title">{t('home.characters_title')}</h2>
                    <span className="text-caption font-semibold tracking-wide text-slate-500 bg-white shadow-sm border border-slate-100 px-4 py-1.5 rounded-full">
                        {t('home.characters_total')}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {CHARACTERS.map((character) => (
                        <CharacterAvatarCard key={character.id} character={character} />
                    ))}
                </div>

                <div className="mt-14 max-w-sm mx-auto">
                    <button onClick={() => navigate('/test')} className="btn-primary">
                        {t('home.btn_start_test')}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
