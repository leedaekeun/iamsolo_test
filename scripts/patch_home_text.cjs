const fs = require('fs');

const locales = ['ko', 'en', 'ja', 'zh'];

const modifications = {
    ko: {
        title_line1: "솔로나라에서\n",
        title_line2: "나는 무슨 이름일까?",
        subtitle: "심리학 원형 데이터 기반\n<span className=\"text-vibrant-pink font-semibold\">나의 찐 연애 성향 캐릭터 매칭</span>"
    },
    en: {
        title_line1: "In Solo Land,\n",
        title_line2: "what would my name be?",
        subtitle: "Based on psychological archetype data\n<span className=\"text-vibrant-pink font-semibold\">My true dating character match</span>"
    },
    ja: {
        title_line1: "SOLO LANDで\n",
        title_line2: "私の名前は何だろう？",
        subtitle: "心理学の元型データに基づく\n<span className=\"text-vibrant-pink font-semibold\">私の本当の恋愛キャラクター診断</span>"
    },
    zh: {
        title_line1: "在单身即地狱(Solo Land)里，\n",
        title_line2: "我会叫什么名字？",
        subtitle: "基于心理学原型数据\n<span className=\"text-vibrant-pink font-semibold\">我的真实恋爱性格角色匹配</span>"
    }
};

locales.forEach(lang => {
    const filePath = `src/locales/${lang}.json`;
    if (fs.existsSync(filePath)) {
        const rawdata = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(rawdata);

        if (!data.home) data.home = {};
        data.home.title_line1 = modifications[lang].title_line1;
        data.home.title_line2 = modifications[lang].title_line2;
        data.home.subtitle = modifications[lang].subtitle;

        fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
        console.log(`Updated ${lang}.json`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
