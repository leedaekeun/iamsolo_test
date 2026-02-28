import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { CHARACTERS, Archetype } from '@/data/characters';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-off-white text-deep-charcoal font-sans selection:bg-vibrant-pink selection:text-white pb-0">

            {/* Header Section */}
            <header className="relative pt-24 pb-16 px-6 text-center overflow-hidden bg-white rounded-b-[3.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-6">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-soft-pink/40 mb-10 backdrop-blur-sm border border-soft-pink">
                    <span className="text-[10px] font-bold text-vibrant-pink tracking-widest uppercase">Love Psychology Test</span>
                </div>

                <div className="relative mb-8 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal leading-[1.2] tracking-tight">
                        나는 솔로<br />
                        <span className="text-deep-charcoal">어떤 캐릭터 일까?</span>
                    </h1>
                </div>

                <p className="text-slate-grey mb-14 max-w-xs mx-auto text-sm font-medium leading-relaxed tracking-wide">
                    심리학 원형 데이터 기반<br />
                    나의 <span className="text-vibrant-pink font-semibold">찐 연애 성향 캐릭터</span> 매칭
                </p>

                <div className="relative w-full max-w-[340px] mx-auto aspect-[4/3] mb-14 group z-10">
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-natural bg-white transform transition-transform duration-700 hover:scale-[1.01]">
                        <img
                            src="/main_new.png"
                            alt="Main Illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white px-6 py-3 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap border-[3px] border-white">
                        <span className="material-symbols-outlined text-sm text-vibrant-pink">verified</span>
                        100% 싱크로율
                    </div>
                </div>

                <div className="px-2 max-w-sm mx-auto">
                    <button
                        onClick={() => navigate('/test')}
                        className="w-full bg-vibrant-pink text-white font-bold text-lg py-4 rounded-full shadow-btn transform active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-[#E00055] hover:shadow-lg"
                    >
                        내 캐릭터 확인하기
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>

                <div className="flex justify-center items-center gap-6 mt-12 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-vibrant-pink"></span>
                        누적 10만+
                    </div>
                    <div className="w-px h-3 bg-slate-200"></div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-vibrant-pink"></span>
                        만족도 4.9
                    </div>
                    <div className="w-px h-3 bg-slate-200"></div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-vibrant-pink"></span>
                        익명 보장
                    </div>
                </div>
            </header>

            {/* Analysis Points Section */}
            <section className="px-6 py-20 bg-off-white relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-deep-charcoal mb-4">
                        어떻게 분석하나요?
                    </h2>
                    <div className="w-10 h-1 bg-vibrant-pink mx-auto rounded-full mb-6 opacity-80"></div>
                    <p className="text-slate-grey leading-relaxed text-sm max-w-sm mx-auto font-medium">
                        실제 방송 상황 10가지에 답하고,<br />
                        심리학 원형(Archetype) 이론으로 분석합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 text-vibrant-pink transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-[3.5rem] font-light">diversity_3</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-deep-charcoal text-lg mb-3">실전 연애 상황</h3>
                            <p className="text-xs text-slate-grey leading-relaxed tracking-wide">솔로나라에서 일어날 법한<br />리얼한 상황을 제시합니다</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 text-deep-charcoal transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-[3.5rem] font-light">psychology</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-deep-charcoal text-lg mb-3">심리학 기반 분석</h3>
                            <p className="text-xs text-slate-grey leading-relaxed tracking-wide">Archetype 이론과<br />정밀 성향 척도를 적용합니다</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 text-vibrant-pink transition-transform group-hover:-translate-y-2 duration-300">
                            <span className="material-symbols-outlined text-[3.5rem] font-light">style</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-deep-charcoal text-lg mb-3">12가지 연애 유형</h3>
                            <p className="text-xs text-slate-grey leading-relaxed tracking-wide">나만의 연애 패턴과<br />매칭 궁합을 알려드립니다</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Character Cards Section */}
            <section className="px-6 py-24 bg-white rounded-t-[3.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] flex-1">
                <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-deep-charcoal">
                        12가지 캐릭터
                    </h2>
                    <span className="text-[10px] font-bold text-slate-500 bg-off-white border border-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Total 12 Types</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {CHARACTERS.map((character: Archetype) => {
                        const isFemale = ["옥순", "현숙", "영숙", "정숙", "순자", "영자"].includes(character.name);

                        // Extracting 3 keywords for hashtags
                        const hashtags = [
                            character.strengths[0] || "긍정적",
                            character.strengths[1] || "매력적",
                            character.strengths[2] || "독특함"
                        ].slice(0, 3);

                        return (
                            <div key={character.id} className="bg-white rounded-[2rem] p-7 shadow-soft-card border border-slate-50 transition-all hover:shadow-xl hover:translate-y-[-2px]">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-deep-charcoal">{character.name}</h3>
                                        {/* Fallback to subtitle or title translated logic */}
                                        <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1.5">
                                            {character.id.replace('_', ' ')}
                                        </p>
                                    </div>
                                    <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wide ${isFemale ? 'bg-vibrant-pink text-white' : 'bg-deep-charcoal text-white'}`}>
                                        {isFemale ? 'Female' : 'Male'}
                                    </span>
                                </div>

                                <div className="w-full aspect-square bg-slate-50 rounded-2xl mb-7 overflow-hidden relative shadow-inner">
                                    <img
                                        src={character.imageUrl}
                                        alt={character.name}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <p className="text-sm text-slate-600 mb-7 leading-7 font-medium line-clamp-2">
                                    {character.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {hashtags.map((tag, idx) => (
                                        <span key={idx} className="px-3.5 py-2 bg-lavender-tag text-deep-purple text-[11px] font-bold rounded-xl tracking-tight">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 px-2 pb-8 max-w-sm mx-auto">
                    <button
                        onClick={() => navigate('/test')}
                        className="w-full bg-vibrant-pink text-white font-bold text-lg py-4 rounded-full shadow-btn transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                    >
                        나의 연애 유형 알아보기
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
