import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(process.cwd(), 'src/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const missingKeys = {
    result: {
        top_title: { ko: "나의 매칭 캐릭터", en: "My Matched Character", ja: "私のマッチングキャラクター", zh: "我的匹配角色" },
        match_result: { ko: "Match Result", en: "Match Result", ja: "Match Result", zh: "Match Result" },
        dating_characteristics: { ko: "Dating Characteristics", en: "Dating Characteristics", ja: "Dating Characteristics", zh: "Dating Characteristics" },
        chemistry_title: { ko: "환상의 케미 매칭", en: "Perfect Chemistry Match", ja: "最高のケミマッチング", zh: "完美的化学反应匹配" },
        bestMatchBadge: { ko: "최고의 궁합", en: "Best Match", ja: "最高の相性", zh: "最佳契合" },
        worstMatchBadge: { ko: "최악의 궁합", en: "Worst Match", ja: "最悪の相性", zh: "最差契合" },
        dating_advice: { ko: "연애 성장 조언", en: "Dating Growth Advice", ja: "恋愛成長アドバイス", zh: "恋爱成长建议" },
        share_copied: { ko: "링크 복사 완료!", en: "Link Copied!", ja: "リンクをコピーしました！", zh: "链接已复制！" },
        share_btn: { ko: "결과 공유하고 데이트 신청", en: "Share Result & Ask for a Date", ja: "結果を共有してデートに誘う", zh: "分享结果并邀约约会" }
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
