import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localesDir = path.resolve(__dirname, '../src/locales');

const footerTranslations = {
    ko: {
        brand_title: "나는 솔로 연애유형 테스트",
        brand_desc: "본 테스트는 ENA '나는 SOLO'의 캐릭터들을 모티브로<br/>재미를 위해 제작된 비공식 심리테스트입니다.",
        nav_home: "홈",
        nav_test: "테스트 시작",
        nav_privacy: "개인정보처리방침",
        nav_about: "서비스 소개",
        disclaimer: "본 서비스는 개인적인 즐거움을 위해 제작되었으며,<br/>실제 방송 및 출연진과 공식적인 연관이 없습니다.",
        ads_notice: "광고 문의 및 오류 제보",
        copyright: "© {{year}} Solo Love Test. All rights reserved."
    },
    en: {
        brand_title: "I am Solo Dating Test",
        brand_desc: "This unofficial psychological test was created for fun,<br/>inspired by the characters from ENA's 'I am SOLO'.",
        nav_home: "Home",
        nav_test: "Start Test",
        nav_privacy: "Privacy Policy",
        nav_about: "About",
        disclaimer: "This service is created for personal entertainment<br/>and has no official affiliation with the actual broadcast or cast.",
        ads_notice: "Ad inquiries & Bug reports",
        copyright: "© {{year}} Solo Love Test. All rights reserved."
    },
    ja: {
        brand_title: "私はSOLO 恋愛タイプテスト",
        brand_desc: "このテストはENA「私はSOLO」のキャラクターをモチーフに<br/>お楽しみのために作成された非公式の心理テストです。",
        nav_home: "ホーム",
        nav_test: "テスト開始",
        nav_privacy: "プライバシーポリシー",
        nav_about: "サービス紹介",
        disclaimer: "本サービスは個人的な娯楽のために作成されており、<br/>実際の放送や出演者とは公式な関係はありません。",
        ads_notice: "広告の問い合わせとエラー報告",
        copyright: "© {{year}} Solo Love Test. All rights reserved."
    },
    zh: {
        brand_title: "我是SOLO 恋爱类型测试",
        brand_desc: "本测试是以ENA《我是SOLO》中的角色为原型，<br/>为增添乐趣而制作的非官方心理测试。",
        nav_home: "首页",
        nav_test: "开始测试",
        nav_privacy: "隐私政策",
        nav_about: "关于我们",
        disclaimer: "本服务仅供个人娱乐，<br/>与实际广播及演员无官方联系。",
        ads_notice: "广告咨询与错误报告",
        copyright: "© {{year}} Solo Love Test. All rights reserved."
    }
};

const langs = ['ko', 'en', 'ja', 'zh'];

for (const lang of langs) {
    const filePath = path.join(localesDir, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (!data.common.footer) {
        data.common.footer = {};
    }
    data.common.footer = { ...data.common.footer, ...footerTranslations[lang] };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Updated ${lang}.json`);
}
