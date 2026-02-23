import { CHARACTERS } from '@/data/characters';
import ResultClient from './ResultClient';

// 동적 OG 메타데이터 생성 (서버 사이드)
export async function generateMetadata({ params, searchParams }: { params: Promise<{ character: string }>, searchParams: Promise<{ match: string }> }) {
    const unresolvedParams = await params;
    const characterId = unresolvedParams.character;
    const match = (await searchParams).match || '0';

    const character = CHARACTERS.find(c => c.id === characterId);
    if (!character) return { title: '결과를 찾을 수 없습니다' };

    // 배포된 환경의 호스트 URL 구성
    const hostUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const ogImageUrl = `${hostUrl}/api/og?name=${encodeURIComponent(character.name)}&title=${encodeURIComponent(character.title)}&match=${match}`;

    return {
        title: `나는 솔로 테스트 - 나는 ${character.name}!`,
        description: `나와 매칭된 캐릭터는 ${character.name}(${character.title}) 입니다. 일치 확률: ${match}%`,
        openGraph: {
            title: `나의 '나는 솔로' 매칭 캐릭터는?`,
            description: `싱크로율 ${match}%! 지금 바로 당신의 캐릭터를 확인해보세요.`,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${character.name} 매칭 결과`,
                },
            ],
        },
    };
}

export default async function ResultPage({ params }: { params: Promise<{ character: string }> }) {
    const unresolvedParams = await params;
    return <ResultClient characterId={unresolvedParams.character} />;
}
