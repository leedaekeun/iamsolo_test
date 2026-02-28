import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(process.cwd(), 'src/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const missingKeys = {
    test: {
        title: { ko: "나는 솔로 캐릭터 테스트", en: "Solo Character Test", ja: "私はソロ キャラクターテスト", zh: "我是单身 角色测试" },
        genderSelectTitle: { ko: "나의 <span className=\"text-vibrant-pink\">성별</span>은?", en: "What is my <span className=\"text-vibrant-pink\">Gender</span>?", ja: "私の<span className=\"text-vibrant-pink\">性別</span>は？", zh: "我的<span className=\"text-vibrant-pink\">性别</span>是？" },
        genderSelectDesc: { ko: "선택에 따라 결과 캐릭터가 달라져요", en: "The result character changes based on your selection", ja: "選択によって結果のキャラクターが変わります", zh: "结果角色会根据您的选择而变化" },
        maleMatch: { ko: "남성 매칭", en: "Male Match", ja: "男性マッチング", zh: "男性匹配" },
        femaleMatch: { ko: "여성 매칭", en: "Female Match", ja: "女性マッチング", zh: "女性匹配" },
        maleSub: { ko: "Male", en: "Male", ja: "Male", zh: "Male" },
        femaleSub: { ko: "Female", en: "Female", ja: "Female", zh: "Female" },
        genderNotice: { ko: "💕 어떤 성별을 선택해도 테스트를 즐길 수 있어요", en: "💕 You can enjoy the test regardless of the gender you choose", ja: "💕 どの性別を選んでもテストを楽しめます", zh: "💕 无论选择什么性别都可以享受测试" }
    }
};

langs.forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Merge missing keys
    for (const [section, keys] of Object.entries(missingKeys)) {
        if (!data[section]) data[section] = {};
        for (const [key, translations] of Object.entries(keys)) {
            data[section][key] = translations[lang];
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Updated ${lang}.json`);
});
