import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(process.cwd(), 'src/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const missingKeys = {
    common: {
        nav_articles: { ko: "연애 심리 칼럼", en: "Dating Articles", ja: "恋愛心理コラム", zh: "恋爱心理专栏" },
        nav_contact: { ko: "문의하기", en: "Contact Us", ja: "お問い合わせ", zh: "联系我们" },
        nav_terms: { ko: "이용약관", en: "Terms of Service", ja: "利用規約", zh: "服务条款" }
    },
    articles: {
        header: { ko: "연애 심리 칼럼", en: "Dating Psychology Articles", ja: "恋愛心理コラム", zh: "恋爱心理专栏" },
        description: { ko: "이성을 사로잡는 마법의 열쇠, 심리 분석으로 풀어보는 실전 연애 치트키", en: "The magic key to capturing hearts, practical dating cheat sheets unlocked through psychological analysis.", ja: "異性の心をつかむ魔法の鍵、心理分析で解き明かす実践的恋愛チートシート。", zh: "俘获异性心灵的魔法钥匙，心理分析解锁实战恋爱秘籍。" },
        readMore: { ko: "칼럼 읽기", en: "Read Article", ja: "コラムを読む", zh: "阅读专栏" },
        backToList: { ko: "목록으로 돌아가기", en: "Back to List", ja: "リストに戻る", zh: "返回列表" },
        relatedArticles: { ko: "추천 칼럼", en: "Recommended Articles", ja: "おすすめコラム", zh: "推荐专栏" }
    },
    terms: {
        header: { ko: "서비스 이용약관", en: "Terms of Service", ja: "利用規約", zh: "服务条款" },
        date: { ko: "시행일: 2025년 1월 1일", en: "Effective Date: January 1, 2025", ja: "施行日：2025年1月1日", zh: "生效日期：2025年1月1日" },
        s1_title: { ko: "제1조 (목적)", en: "Article 1 (Purpose)", ja: "第1条（目的）", zh: "第一条（目的）" },
        s1_content: { ko: "본 약관은 '나는솔로 연애유형 테스트'(이하 '서비스')의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.", en: "The purpose of these Terms of Service is to define the rights, obligations, and responsibilities between the Company and the User regarding the use of the Service.", ja: "本規約は、サービスの利用に関し、会社と利用者の権利、義務、および責任事項を規定することを目的とします。", zh: "本条款旨在规定公司与用户之间关于使用服务的权利、义务和责任。" },
        s2_title: { ko: "제2조 (책임제한)", en: "Article 2 (Limitation of Liability)", ja: "第2条（責任制限）", zh: "第二条（责任限制）" },
        s2_content: { ko: "본 테스트의 결과는 심리학적 원형 이론에 기반한 오락 및 자기 이해 목적의 성향 분석이며, 의학적·상담적 진단이 아닙니다. 회사는 서비스 이용으로 인해 발생하는 직간접적인 손해에 대해 책임지지 않습니다.", en: "The results of this test are for entertainment and self-understanding purposes based on psychological theories, and are not medical or psychological diagnoses. The company is not liable for any direct or indirect damages arising from the use of the service.", ja: "本テストの結果は心理学の理論に基づいた娯楽および自己理解目的の傾向分析であり、医学的または心理学的な診断ではありません。会社は、サービスの利用によって生じる直接的または間接的な損害について責任を負いません。", zh: "此测试的结果仅用于基于心理学理论的娱乐和自我理解目的，并不构成医学或心理学诊断。对于因使用本服务而引起的任何直接或间接损害，本公司概不负责。" },
        go_home: { ko: "홈으로 돌아가기", en: "Go back to Home", ja: "ホームに戻る", zh: "回到首页" }
    },
    contact: {
        header: { ko: "문의하기", en: "Contact Us", ja: "お問い合わせ", zh: "联系我们" },
        description: { ko: "광고 제휴 및 서비스 관련 문의는 아래 이메일로 보내주시기 바랍니다.", en: "For advertising partnerships and service-related inquiries, please send an email to the address below.", ja: "広告提携およびサービスに関するお問い合わせは、下記のメールアドレスまでお送りください。", zh: "有关广告合作和服务相关咨询，请发送电子邮件至以下地址。" },
        email: { ko: "contact@sololovetest.com", en: "contact@sololovetest.com", ja: "contact@sololovetest.com", zh: "contact@sololovetest.com" },
        response_time: { ko: "영업일 기준 1~2일 내에 답변해 드립니다.", en: "We will respond within 1-2 business days.", ja: "営業日基準で1〜2日以内に回答いたします。", zh: "我们将在1-2个工作日内回复。" },
        go_home: { ko: "홈으로 돌아가기", en: "Go back to Home", ja: "ホームに戻る", zh: "回到首页" }
    },
    cookie: {
        message: { ko: "본 사이트는 원활한 서비스 제공과 맞춤형 광고 노출을 위해 쿠키를 사용합니다.", en: "This site uses cookies to provide smooth service and personalized ads.", ja: "当サイトでは、スムーズなサービスの提供とカスタマイズされた広告表示のためにクッキーを使用しています。", zh: "本网站使用cookie以提供流畅的服务和个性化广告。" },
        accept: { ko: "동의", en: "Accept", ja: "同意する", zh: "同意" },
        decline: { ko: "거절", en: "Decline", ja: "拒否する", zh: "拒绝" },
        policy: { ko: "개인정보처리방침 보기", en: "View Privacy Policy", ja: "プライバシーポリシーを見る", zh: "查看隐私政策" }
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
