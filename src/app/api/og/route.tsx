import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Get parameters from URL
        const name = searchParams.get('name') || '나는 솔로';
        const match = searchParams.get('match') || '0';
        const title = searchParams.get('title') || '캐릭터 수집가';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0f172a', // Tailwind slate-900
                        padding: '40px',
                        position: 'relative',
                    }}
                >
                    {/* Background decorative elements */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-10%',
                            left: '-10%',
                            width: '60%',
                            height: '60%',
                            backgroundColor: 'rgba(236, 72, 153, 0.2)', // Pink 500
                            filter: 'blur(100px)',
                            borderRadius: '50%',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-10%',
                            right: '-10%',
                            width: '60%',
                            height: '60%',
                            backgroundColor: 'rgba(168, 85, 247, 0.2)', // Purple 500
                            filter: 'blur(100px)',
                            borderRadius: '50%',
                        }}
                    />

                    {/* Main Content Box */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(30, 41, 59, 0.8)', // slate-800
                            border: '2px solid rgba(51, 65, 85, 1)', // slate-700
                            borderRadius: '40px',
                            padding: '60px 80px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            zIndex: 10,
                        }}
                    >
                        <p
                            style={{
                                fontSize: 32,
                                color: '#f472b6', // pink-400
                                marginBottom: 20,
                                fontWeight: 600,
                                letterSpacing: 2,
                            }}
                        >
                            나와 매칭된 &apos;나는 솔로&apos; 캐릭터는?
                        </p>

                        <h1
                            style={{
                                fontSize: 80,
                                color: '#ffffff',
                                fontWeight: 900,
                                margin: 0,
                                lineHeight: 1.1,
                                textAlign: 'center',
                            }}
                        >
                            {name}
                        </h1>

                        <p
                            style={{
                                fontSize: 40,
                                color: '#94a3b8', // slate-400
                                marginTop: 10,
                                marginBottom: 40,
                            }}
                        >
                            ({title})
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(15, 23, 42, 0.5)', // slate-900
                                padding: '20px 40px',
                                borderRadius: '9999px',
                                border: '1px solid rgba(236, 72, 153, 0.3)', // pink-500
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 36,
                                    color: '#e2e8f0', // slate-200
                                    marginRight: 15,
                                }}
                            >
                                나와의 일치 확률:
                            </span>
                            <span
                                style={{
                                    fontSize: 52,
                                    fontWeight: 800,
                                    color: '#f472b6', // pink-400
                                }}
                            >
                                {match}%
                            </span>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
