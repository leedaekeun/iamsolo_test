export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);
    const resultId = url.searchParams.get('resultId');

    // get the original index.html response from static assets
    const response = await next();

    if (!resultId) {
        return response;
    }

    // 간단한 캐릭터 데이터 모음
    const characters = {
        'm1_youngsoo': { name: '영수', title: '분석가 (Analyst)' },
        'm2_youngho': { name: '영호', title: '촉매제 (Catalyst)' },
        'm3_youngsik': { name: '영식', title: '든든한 보호자 (Protector)' },
        'm4_youngchul': { name: '영철', title: '직진남 (Challenger)' },
        'f1_oksoon': { name: '옥순', title: '몽상가 (Dreamer)' },
        'f2_hyunsook': { name: '현숙', title: '현자 (Wise Mentor)' },
        'f3_youngsook': { name: '영숙', title: '통치자 (Ruler)' },
        'f4_jungsook': { name: '정숙', title: '호걸 (Curmudgeon)' }
    };

    const char = characters[resultId];
    if (!char) {
        return response;
    }

    const match = url.searchParams.get('match') || '0';
    const newTitle = `나는 솔로 테스트 — 내 캐릭터는 ${char.name}?`;
    const newDescription = `나와 싱크로율 ${match}%인 연애 성향 캐릭터를 확인해보세요! 💕`;

    // 지금은 OG 이미지 동적 생성을 제거했으므로 고정 이미지를 사용하거나 각 캐릭터별 정적 이미지를 활용
    const newImage = `${url.origin}/images/q10.png`; // 예: 가장 이쁜 일러스트 이미지 등으로 대체

    return new HTMLRewriter()
        .on('meta[property="og:title"]', {
            element(e) { e.setAttribute('content', newTitle); }
        })
        .on('meta[property="og:description"]', {
            element(e) { e.setAttribute('content', newDescription); }
        })
        .on('meta[property="og:image"]', {
            element(e) { e.setAttribute('content', newImage); }
        })
        .on('title', {
            element(e) { e.setInnerContent(newTitle); }
        })
        .transform(response);
}
