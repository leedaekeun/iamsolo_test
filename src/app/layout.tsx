import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
    variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
    title: "나는 솔로 연애세포 테스트 — 나의 매칭 캐릭터는?",
    description: "심리학적 원형 데이터를 기반으로 한 나는 솔로 캐릭터 매칭 테스트. 총 10문항으로 나의 연애 성향 캐릭터를 확인해보세요!",
    keywords: ["나는솔로", "연애 테스트", "심리 테스트", "MBTI", "연애 성향"],
    openGraph: {
        title: "나는 솔로 연애세포 테스트",
        description: "나의 연애 성향 캐릭터를 확인해보세요!",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={notoSansKR.variable}>
            <body className={`${notoSansKR.className} antialiased`} style={{ background: '#fff8fb' }}>
                {/* 전체 배경 장식 */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div
                        className="bg-bubble"
                        style={{
                            width: '45vw',
                            height: '45vw',
                            top: '-10%',
                            left: '-10%',
                            background: 'radial-gradient(circle, rgba(255,180,220,0.25) 0%, transparent 70%)',
                        }}
                    />
                    <div
                        className="bg-bubble"
                        style={{
                            width: '40vw',
                            height: '40vw',
                            bottom: '-8%',
                            right: '-8%',
                            background: 'radial-gradient(circle, rgba(255,140,200,0.20) 0%, transparent 70%)',
                        }}
                    />
                    <div
                        className="bg-bubble"
                        style={{
                            width: '25vw',
                            height: '25vw',
                            top: '40%',
                            right: '5%',
                            background: 'radial-gradient(circle, rgba(255,210,230,0.18) 0%, transparent 70%)',
                        }}
                    />
                </div>

                {/* 앱 컨테이너 */}
                <main
                    className="relative mx-auto min-h-screen"
                    style={{
                        maxWidth: '430px',
                        background: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 0 60px rgba(255,100,160,0.12), 0 0 0 1px rgba(255,200,220,0.3)',
                        zIndex: 1,
                    }}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
