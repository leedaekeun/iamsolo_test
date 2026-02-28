import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { CHARACTERS } from '@/data/characters';

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light text-deep-black font-display pb-10">
            {/* Header Area */}
            <div className="bg-primary/10 pb-8 mb-6 rounded-b-[40px]">
                {/* Top Bar */}
                <div className="flex items-center p-4 justify-between sticky top-0 z-10 hidden sm:flex">
                    <div className="flex size-10 shrink-0 items-center justify-center"></div>
                    <h2 className="text-deep-black text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">나는 솔로 테스트</h2>
                </div>

                {/* Hero Section */}
                <div className="px-6 pt-6 flex flex-col items-center animate-slide-down delay-100">
                    <h1 className="text-deep-black tracking-tight text-3xl font-extrabold leading-tight text-center mb-6">
                        나는 솔로<br />어떤 캐릭터 일까?
                    </h1>

                    <div className="w-full aspect-square max-w-[280px] bg-white p-3 rounded-[32px] overflow-hidden mb-2 shadow-sm border border-white/50">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src="/images/main.jpg"
                                alt="메인 일러스트"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col px-6 gap-4 animate-pop-in delay-200 mb-8">
                <Link
                    to="/test"
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    <span className="truncate">내 캐릭터 확인하기</span>
                </Link>
                <div className="flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-neutral-gray text-sm">person</span>
                    <p className="text-neutral-gray text-xs font-semibold">참여자 수 12,345명</p>
                </div>
            </div>

            {/* How it analyzes */}
            <div className="px-6 py-4 animate-slide-up delay-300">
                <h2 className="text-2xl font-extrabold mb-5 text-center tracking-tight">어떻게 분석하나요?</h2>
                <div className="space-y-4">
                    {/* Feature 1 */}
                    <div className="bg-neutral-50 p-6 rounded-[24px] border border-neutral-100">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-primary shadow-sm material-symbols-outlined">favorite</span>
                            <h3 className="text-deep-black text-lg font-bold tracking-tight">실전 연애 상황</h3>
                        </div>
                        <p className="text-neutral-gray text-sm leading-relaxed font-medium">
                            솔로나라에서 일어날 법한 리얼한 상황을 제시합니다.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-neutral-50 p-6 rounded-[24px] border border-neutral-100">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-primary shadow-sm material-symbols-outlined">psychology</span>
                            <h3 className="text-deep-black text-lg font-bold tracking-tight">심리학 기반 분석</h3>
                        </div>
                        <p className="text-neutral-gray text-sm leading-relaxed font-medium">
                            Archetype 이론과 정밀 성향 척도를 적용합니다.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-neutral-50 p-6 rounded-[24px] border border-neutral-100">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex size-10 shrink-0 items-center justify-center bg-white rounded-full text-primary shadow-sm material-symbols-outlined">group</span>
                            <h3 className="text-deep-black text-lg font-bold tracking-tight">12가지 연애 유형</h3>
                        </div>
                        <p className="text-neutral-gray text-sm leading-relaxed font-medium">
                            나만의 연애 패턴과 매칭 궁합을 알려드립니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Characters List Section */}
            <div className="px-6 py-8 animate-slide-up delay-400 bg-white">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-extrabold mb-2 tracking-tight">12가지 캐릭터</h2>
                    <p className="text-neutral-gray text-sm">심리학 원형 데이터 기반 나의 찐 연애 성향</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {CHARACTERS.map((char) => (
                        <div key={char.id} className="bg-background-light p-4 rounded-3xl shadow-soft border border-neutral-100 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                <span className="material-symbols-outlined">{char.gender === 'M' ? 'face' : 'face_3'}</span>
                            </div>
                            <h3 className="font-extrabold text-lg mb-0.5 text-deep-black">{char.name}</h3>
                            <p className="text-[11px] text-primary font-bold mb-2 tracking-wide uppercase">{char.title}</p>
                            <p className="text-[11px] text-neutral-gray leading-relaxed line-clamp-3 font-medium">{char.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
