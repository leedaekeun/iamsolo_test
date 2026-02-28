import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(process.cwd(), 'src/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const missingKeys = {
    result: {
        shareTitle: { ko: "나는 솔로 테스트 — 내 캐릭터는 {{name}}?", en: "I am Solo Test — My Character is {{name}}?", ja: "私はソロテスト — 私のキャラクターは {{name}}?", zh: "我是单身测试 — 我的角色是 {{name}}?" },
        shareText: { ko: "연애 성향 캐릭터를 확인해보세요! 💕", en: "Check your dating archetype! 💕", ja: "あなたの恋愛傾向キャラクターを確認しましょう！💕", zh: "查看你的恋爱类型角色！💕" },
        copyAlert: { ko: "링크를 직접 복사해주세요: ", en: "Please copy the link manually: ", ja: "リンクを手動でコピーしてください: ", zh: "请手动复制链接: " }
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
});
