import fs from 'fs';
import { QUESTIONS } from '../src/data/questions';
import { CHARACTERS } from '../src/data/characters';

const ko: any = {
    common: {
        loading: '로딩 중...',
        error: '에러가 발생했습니다.',
        back: '뒤로',
        close: '닫기'
    },
    home: {
        title: '나는 솔로 심리테스트',
        subtitle: '나의 연애 특징은\n어떤 솔로나라 캐릭터와 닮았을까?',
        startBtn: '내 캐릭터 확인하기',
        statUsers: '누적 10만+',
        statSatisfaction: '만족도 4.9',
        statAnonymous: '익명 보장',
        footerDesc: "본 테스트는 ENA '나는 SOLO'의 캐릭터들을 모티브로\n재미를 위해 제작된 비공식 심리테스트입니다.",
        footerCopyright: '© 2024 Solo Love Test. All rights reserved.',
        footerPrivacy: '개인정보처리방침',
        footerAbout: '서비스 소개'
    },
    test: {
        genderSelect: '당신의 성별을 알려주세요',
        male: '남성',
        female: '여성',
        questionBadge: 'QUESTION {{step}}',
        prevBtn: '이전',
        nextBtn: '다음'
    },
    result: {
        titleBase: '당신은 솔로나라의',
        traits: '나의 연애 특징',
        chemistry: '나와 잘 맞는 캐릭터는?',
        bestMatch: '환상의 짝꿍',
        worstMatch: '환장의 짝꿍',
        shareBtn: '테스트 공유하기',
        restartBtn: '테스트 다시하기'
    },
    questions: {} as any,
    characters: {} as any
};

QUESTIONS.forEach(q => {
    ko.questions['q' + q.id] = {
        situation: q.situation,
        text: q.text,
        a1: q.answers[0].text,
        a2: q.answers[1].text
    };
});

CHARACTERS.forEach(c => {
    ko.result[c.id] = c.name;
    ko.characters[c.id] = {
        title: c.title,
        description: c.description,
        loveStyle: c.loveStyle,
        keywords: c.keywords,
        strengths: c.strengths,
        weaknesses: c.weaknesses,
        advice: c.advice
    };
});

fs.writeFileSync('./src/locales/ko.json', JSON.stringify(ko, null, 2));
console.log('ko.json generated successfully!');
