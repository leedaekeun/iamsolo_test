import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(process.cwd(), 'src/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const missingKeys = {
    about: {
        header: { ko: "서비스 소개", en: "About Us", ja: "サービス紹介", zh: "服务介绍" },
        title: { ko: "나는 솔로 테스트 <br />(I am Solo Test)", en: "I am Solo Test <br />(Love Archetype)", ja: "私はソロテスト <br />(I am Solo Test)", zh: "我是单身测试 <br />(I am Solo Test)" },
        desc1: {
            ko: "환영합니다! '나는 솔로 테스트'는 복잡한 인간관계와 연애의 심리를 쉽고 재미있게 풀어내기 위해 기획된 무료 심리 성향 분석 웹서비스입니다. 단순한 재미를 넘어, 사용자 본인도 미처 몰랐던 무의식적인 행동 패턴과 연애 스타일을 거울처럼 비춰주는 것을 목표로 하고 있습니다.",
            en: "Welcome! 'I am Solo Test' is a free psychological archetype analysis web service designed to easily and funnily unravel the complex psychology of human relationships and romance. Beyond simple fun, it aims to mirror your unconscious behavior patterns and dating styles.",
            ja: "ようこそ！「私はソロテスト」は、複雑な人間関係と恋愛の心理を簡単かつ楽しく解き明かすために企画された無料の心理分析ウェブサービスです。単純な楽しみを超えて、ユーザー自身も気づかなかった無意識の行動パターンや恋愛スタイルを鏡のように映し出すことを目指しています。",
            zh: "欢迎！“我是单身测试”是一个免费的心理类型分析网络服务，旨在轻松有趣地解开复杂的人际关系和恋爱心理。除了单纯的乐趣，它还旨在像镜子一样反映你甚至没有意识到的潜意识行为模式和恋爱风格。"
        },
        desc2: {
            ko: "현대 사회에서 우리는 각자 다양한 가면(Persona)을 쓰고 살아갑니다. 하지만 누군가를 깊이 사랑하게 되는 연애의 순간만큼은 가장 본질적인 자아가 드러나기 마련입니다. 이 테스트는 바로 그 지점을 포착하여 당신이 어떤 사람인지, 어떤 사랑을 원하는지 묻고 답합니다.",
            en: "In modern society, we all wear different masks (Persona) and live our lives. But in the moment of love, when deeply loving someone, the most essential self inevitably emerges. This test captures exactly that point, asking and answering who you are and what kind of love you want.",
            ja: "現代社会において、私たちはそれぞれ異なる仮面（ペルソナ）を被って生きています。しかし、誰かを深く愛する恋愛の瞬間にこそ、最も本質的な自己が現れるものです。このテストはまさにその点を捉え、あなたがどのような人で、どのような愛を望んでいるのかを問い、答えます。",
            zh: "在现代社会中，我们都戴着不同的面具（Persona）生活。但在深爱某人的恋爱时刻，最本质的自我必然会展现出来。这个测试准确地捕捉到了这一点，询问并回答了你是谁以及你想要什么样的爱情。"
        },
        bg_title: { ko: "심리학적 배경", en: "Psychological Background", ja: "心理学的背景", zh: "心理学背景" },
        bg_desc: {
            ko: "본 테스트의 결과 도출 알고리즘은 칼 융(Carl Jung)의 분석심리학적 원형(Archetype) 이론과 성격 유형 지표의 4가지 선호 경향성을 차용하여 자체적으로 구성되었습니다.",
            en: "The algorithm for deriving the results of this test is structured independently by borrowing Carl Jung's analytical psychological Archetype theory and the four preference tendencies of personality type indicators.",
            ja: "本テストの結果導出アルゴリズムは、カール・ユング（Carl Jung）の分析心理学的元型（アーキタイプ）理論と性格類型指標の4つの選好傾向を借用して独自に構成されています。",
            zh: "本测试的结果推导算法借鉴了卡尔·荣格（Carl Jung）的分析心理学原型（Archetype）理论和性格类型指标的四个偏好倾向，独立构建而成。"
        },
        list_ei: {
            ko: "<strong className=\"text-vibrant-pink\">E/I (에너지 방향):</strong> 관계의 주도권과 에너지 발산 방향",
            en: "<strong className=\"text-vibrant-pink\">E/I (Energy Direction):</strong> Initiative in relationships and direction of energy emission",
            ja: "<strong className=\"text-vibrant-pink\">E/I (エネルギーの方向):</strong> 関係の主導権とエネルギー発散の方向",
            zh: "<strong className=\"text-vibrant-pink\">E/I (能量方向):</strong> 关系的主导权和能量发散方向"
        },
        list_ns: {
            ko: "<strong className=\"text-vibrant-pink\">N/S (인식 방식):</strong> 데이트나 상대를 파악할 때의 직관 vs 경험",
            en: "<strong className=\"text-vibrant-pink\">N/S (Perception Method):</strong> Intuition vs. experience when going on dates or understanding partners",
            ja: "<strong className=\"text-vibrant-pink\">N/S (認識方式):</strong> デートや相手を把握する際の直感 vs 経験",
            zh: "<strong className=\"text-vibrant-pink\">N/S (认知方式):</strong> 约会或了解对方时的直觉 vs 经验"
        },
        list_tf: {
            ko: "<strong className=\"text-vibrant-pink\">T/F (판단 방식):</strong> 갈등 상황에서 논리 vs 감정적 공감",
            en: "<strong className=\"text-vibrant-pink\">T/F (Judgment Method):</strong> Logic vs. emotional empathy in conflict situations",
            ja: "<strong className=\"text-vibrant-pink\">T/F (判断方式):</strong> 葛藤状況での論理 vs 感情的共感",
            zh: "<strong className=\"text-vibrant-pink\">T/F (判断方式):</strong> 冲突情况下的逻辑 vs 情感共鸣"
        },
        list_jp: {
            ko: "<strong className=\"text-vibrant-pink\">J/P (생활 양식):</strong> 연애 과정을 이끌어가는 계획 vs 즉흥",
            en: "<strong className=\"text-vibrant-pink\">J/P (Lifestyle):</strong> Planning vs. improvisation that leads the dating process",
            ja: "<strong className=\"text-vibrant-pink\">J/P (生活様式):</strong> 恋愛プロセスを牽引する計画 vs 即興",
            zh: "<strong className=\"text-vibrant-pink\">J/P (生活方式):</strong> 引导恋爱过程的计划 vs 即兴"
        },
        result_guide_title: { ko: "결과 유형 안내", en: "Result Type Guide", ja: "結果タイプ案内", zh: "结果类型指南" },
        result_guide_desc1: {
            ko: "사용자의 응답 데이터를 기반으로 총 12가지(남성 6인, 여성 6인)의 매력적인 '솔로나라' 캐릭터 중 하나가 결과로 도출됩니다. 의젓한 분석가 '영수', 통치자 '영숙', 팩트폭격기 '정숙' 등 각 캐릭터는 현실의 연애 군상을 생생하게 반영하고 있습니다.",
            en: "Based on the user's response data, one of 12 attractive 'Solo Land' characters (6 men, 6 women) is derived as a result. Each character, such as the stoic analyst 'Youngsoo', the ruler 'Youngsook', and the fact-bomber 'Jungsook', vividly reflects real-world dating archetypes.",
            ja: "ユーザーの回答データを基に、計12種類（男性6人、女性6人）の魅力的な「ソロ国」キャラクターのいずれかが結果として導き出されます。立派な分析家「ヨンス」、統治者「ヨンスク」、ファクト爆撃機「ジョンスク」など、各キャラクターは現実の恋愛群像を生き生きと反映しています。",
            zh: "根据用户的回答数据，将推导出 12 个（6 名男性，6 名女性）各具魅力的“单身国度”角色中的一个作为结果。稳重的分析师“荣洙”、统治者“荣淑”、事实轰炸机“静淑”等各个角色，生动地反映了现实中的恋爱群像。"
        },
        result_guide_desc2: {
            ko: "도출된 결과 페이지에서는 단순히 캐릭터 이름뿐만 아니라, 당신의 장점과 단점, 찰떡궁합인 파트너 유형, 그리고 더 나은 관계를 위한 진심 어린 연애 조언 3가지가 함께 제공됩니다. 결과를 친구나 연인과 공유하며 서로의 다름을 이해하는 계기로 삼아보세요.",
            en: "The derived result page provides not only the character name but also your strengths and weaknesses, the perfect partner type, and three sincere dating advice for a better relationship. Try sharing the results with friends or lovers to use it as an opportunity to understand each other's differences.",
            ja: "導き出された結果ページでは、単にキャラクター名だけでなく、あなたの長所と短所、相性抜群のパートナータイプ、そしてより良い関係のための心からの恋愛アドバイス3つが一緒に提供されます。結果を友達や恋人と共有し、お互いの違いを理解するきっかけにしてみてください。",
            zh: "得出的结果页面不仅提供角色名称，还提供你的优点和缺点、完美契合的伴侣类型，以及三个真诚的恋爱建议，以建立更好的关系。尝试与朋友或恋人分享结果，以此作为了解彼此差异的机会。"
        },
        caution_badge: { ko: "주의사항", en: "Caution", ja: "注意事項", zh: "注意事项" },
        caution_desc: {
            ko: "본 심리테스트는 오락 및 흥미 유발을 목적으로 제작되었습니다. 의학적이거나 전문적인 심리 상담을 대체할 수 없으며, 결과는 개인의 성향을 완벽하게 규정짓지 않습니다. 가벼운 마음으로 즐겨주시고, 타인을 이해하는 작은 창구로 활용해 주시기 바랍니다.",
            en: "This psychological test is produced for the purpose of entertainment and interest. It cannot replace medical or professional psychological counseling, and the results do not perfectly define an individual's disposition. Please enjoy it lightly and use it as a small window to understand others.",
            ja: "本心理テストは娯楽および興味喚起を目的に制作されました。医学的または専門的な心理相談を代替することはできず、結果は個人の性向を完璧に規定するものではありません。軽い気持ちで楽しんでいただき、他人を理解する小さな窓口として活用してください。",
            zh: "本心理测试旨在提供娱乐和激发兴趣。它不能取代医学或专业的心理咨询，结果也不能完美地定义个人的性格。请轻松地享受它，并将其作为了解他人的小窗口。"
        },
        start_btn: { ko: "테스트 시작하기", en: "Start Test", ja: "テストを始める", zh: "开始测试" }
    },
    privacy: {
        header: { ko: "개인정보처리방침", en: "Privacy Policy", ja: "プライバシーポリシー", zh: "隐私政策" },
        date: { ko: "시행일: 2025년 1월 1일 &nbsp;·&nbsp; 최종 수정: 2025년 12월 1일", en: "Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Modified: December 1, 2025", ja: "施行日: 2025年1月1日 &nbsp;·&nbsp; 最終修正: 2025年12月1日", zh: "生效日期：2025年1月1日 &nbsp;·&nbsp; 最后修改：2025年12月1日" },
        summary: {
            ko: "<strong className=\"text-vibrant-pink\">나는솔로 연애유형 테스트</strong>는 회원 가입이 없으며 성명, 연락처 등 개인 식별 정보를 수집하지 않습니다. 단, Google AdSense 광고 서비스 운영을 위해 쿠키가 사용될 수 있습니다.",
            en: "<strong className=\"text-vibrant-pink\">I am Solo Dating Archetype Test</strong> has no membership registration and does not collect personally identifiable information such as name and contact details. However, cookies may be used for the operation of the Google AdSense advertising service.",
            ja: "<strong className=\"text-vibrant-pink\">私はソロ恋愛タイプテスト</strong>は会員登録がなく、氏名、連絡先などの個人識別情報を収集しません。ただし、Google AdSense 広告サービスの運営のためにCookieが使用される場合があります。",
            zh: "<strong className=\"text-vibrant-pink\">我是单身恋爱类型测试</strong>没有会员注册，不收集姓名、联系方式等个人识别信息。但是，可能会出于运营 Google AdSense 广告服务的目的使用 Cookie。"
        },
        s1_title: { ko: "1. 서비스 소개", en: "1. Service Introduction", ja: "1. サービス紹介", zh: "1. 服务介绍" },
        s1_p1: {
            ko: "나는솔로 연애유형 테스트(이하 '서비스')는 인기 연애 예능 프로그램 '나는 솔로'를 테마로 하여, 심리학의 원형(Archetype) 이론과 성향 분석을 결합한 연애 심리 성향 분석 서비스입니다.",
            en: "The I am Solo Dating Archetype Test (hereinafter 'Service') is a dating psychology tendency analysis service that combines the Archetype theory of psychology and tendency analysis with the popular dating entertainment program 'I am Solo' as the theme.",
            ja: "私はソロ恋愛タイプテスト（以下「サービス」）は、人気恋愛バラエティ番組「私はソロ」をテーマに、心理学の元型（アーキタイプ）理論と傾向分析を組み合わせた恋愛心理分析サービスです。",
            zh: "“我是单身恋爱类型测试”（以下简称“服务”）是一项结合心理学原型（Archetype）理论和倾向分析的恋爱心理偏好分析服务，以热门恋爱综艺节目《我是单身》为主题。"
        },
        s1_p2: {
            ko: "본 서비스는 별도의 회원 가입, 로그인 없이 누구나 이용 가능한 무료 서비스입니다.",
            en: "This service is a free service available to anyone without separate membership registration or login.",
            ja: "本サービスは、別途の会員登録やログインなしに誰でも利用可能な無料サービスです。",
            zh: "本服务是任何人无需单独注册会员或登录即可使用的免费服务。"
        },
        s2_title: { ko: "2. 수집하는 개인정보", en: "2. Personal Information Collected", ja: "2. 収集する個人情報", zh: "2. 收集的个人信息" },
        s2_p1: {
            ko: "본 서비스는 사용자의 <strong className=\"text-deep-charcoal\">성명, 생년월일, 이메일, 전화번호 등 개인 식별 정보를 일절 수집하지 않습니다.</strong>",
            en: "This service <strong className=\"text-deep-charcoal\">does not collect personally identifiable information such as the user's name, date of birth, email, or phone number.</strong>",
            ja: "本サービスは、ユーザーの<strong className=\"text-deep-charcoal\">氏名、生年月日、電子メール、電話番号などの個人識別情報を一切収集しません。</strong>",
            zh: "本服务<strong className=\"text-deep-charcoal\">绝不收集用户的姓名、出生日期、电子邮件或电话号码等个人识别信息。</strong>"
        },
        s2_p2: { ko: "테스트 응답 결과는 결과 페이지 URL의 파라미터로만 처리되며, 별도 서버에 저장되거나 제3자에게 전달되지 않습니다.", en: "The test response results are processed only as parameters of the result page URL, and are not stored on a separate server or passed on to third parties.", ja: "テストの回答結果は結果ページのURLのパラメーターとしてのみ処理され、別のサーバーに保存されたり、第三者に渡されたりすることはありません。", zh: "测试回答结果仅作为结果页面 URL 的参数处理，不会存储在单独的服务器上，也不会传递给第三方。" },
        s2_items: { ko: "✅ 수집 항목", en: "✅ Items Collected", ja: "✅ 収集項目", zh: "✅ 收集的项目" },
        s2_none: { ko: "수집하는 개인정보 없음 (비식별 서비스)", en: "No personal information collected (non-identifying service)", ja: "収集する個人情報なし（非識別サービス）", zh: "未收集个人信息（非识别服务）" },
        s3_title: { ko: "3. 쿠키(Cookie) 및 유사 기술", en: "3. Cookies and Similar Technologies", ja: "3. Cookie および類似の技術", zh: "3. Cookie 及类似技术" },
        s3_p1: { ko: "본 서비스는 서비스 품질 개선 및 광고 게재를 위해 쿠키를 사용할 수 있습니다. 쿠키란 웹사이트 방문 시 브라우저에 저장되는 소규모 데이터 파일입니다.", en: "This service may use cookies to improve service quality and post advertisements. A cookie is a small data file stored in your browser when you visit a website.", ja: "本サービスは、サービス品質の向上および広告掲載のためにCookieを使用する場合があります。Cookieとは、ウェブサイト訪問時にブラウザに保存される小規模なデータファイルです。", zh: "本服务可能会使用 Cookie 来提高服务质量和投放广告。Cookie 是在您访问网站时存储在浏览器中的小数据文件。" },
        s3_p2: { ko: "<strong className=\"text-deep-charcoal\">쿠키 거부 방법:</strong> 브라우저 설정 메뉴에서 쿠키 수락 여부를 직접 설정하실 수 있습니다. 단, 쿠키를 비활성화할 경우 일부 서비스 이용에 제한이 생길 수 있습니다.", en: "<strong className=\"text-deep-charcoal\">How to reject cookies:</strong> You can set whether to accept cookies yourself in your browser's settings menu. However, if you disable cookies, there may be restrictions on using some services.", ja: "<strong className=\"text-deep-charcoal\">Cookie 拒否方法:</strong> ブラウザの設定メニューで、Cookie を受け入れるかどうかを自分で設定できます。ただし、Cookie を無効にすると、一部のサービスの利用が制限される場合があります。", zh: "<strong className=\"text-deep-charcoal\">如何拒绝 Cookie：</strong> 您可以在浏览器的设置菜单中自行设置是否接受 Cookie。但是，如果您禁用 Cookie，可能会对使用某些服务产生限制。" },
        s3_li1: { ko: "Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터", en: "Chrome: Settings → Privacy and security → Cookies and other site data", ja: "Chrome: 設定 → プライバシーとセキュリティ → Cookie と他のサイトデータ", zh: "Chrome：设置 → 隐私和安全 → Cookie 和其他站点数据" },
        s3_li2: { ko: "Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터 차단", en: "Safari: Preferences → Privacy → Block all cookies", ja: "Safari: 環境設定 → プライバシー → すべての Cookie をブロック", zh: "Safari：偏好设置 → 隐私 → 阻止所有 Cookie" },
        s3_li3: { ko: "Firefox: 옵션 → 개인정보 및 보안 → 쿠키와 사이트 데이터", en: "Firefox: Options → Privacy & Security → Cookies and Site Data", ja: "Firefox: オプション → プライバシーとセキュリティ → Cookie とサイトデータ", zh: "Firefox：选项 → 隐私与安全 → Cookie 和站点数据" },
        s4_title: { ko: "4. 제3자 광고 서비스 (Google AdSense)", en: "4. Third-Party Advertising Service (Google AdSense)", ja: "4. 第三者広告サービス (Google AdSense)", zh: "4. 第三方广告服务 (Google AdSense)" },
        s4_p1: { ko: "본 서비스는 <strong className=\"text-deep-charcoal\">Google LLC가 제공하는 Google AdSense</strong> 광고 서비스를 이용합니다. Google AdSense는 사용자의 관심사에 맞는 맞춤형 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.", en: "This service uses the <strong className=\"text-deep-charcoal\">Google AdSense</strong> advertising service provided by Google LLC. Google AdSense may use cookies to display personalized ads that match user interests.", ja: "本サービスは、<strong className=\"text-deep-charcoal\">Google LLCが提供するGoogle AdSense</strong> 広告サービスを利用しています。Google AdSenseは、ユーザーの関心に合わせた 맞춤형 広告を表示するためにCookieを使用する場合があります。", zh: "本服务使用由 <strong className=\"text-deep-charcoal\">Google LLC 提供的 Google AdSense</strong> 广告服务。Google AdSense 可能会使用 Cookie 来显示符合用户兴趣的个性化广告。" },
        s4_p2: { ko: "Google은 사용자의 쿠키를 사용하여 해당 사이트 및 인터넷상의 다른 사이트 방문을 기반으로 광고를 제공합니다. Google이 광고 쿠키를 사용하는 방식에 대한 자세한 내용은 아래 링크를 참고하세요.", en: "Google uses user cookies to serve ads based on their visits to that site and other sites on the Internet. For more information on how Google uses advertising cookies, please refer to the link below.", ja: "GoogleはユーザーのCookieを使用して、そのサイトやインターネット上の他のサイトへの訪問に基づいて広告を提供します。Googleが広告Cookieを使用する方法の詳細については、以下のリンクを参照してください。", zh: "Google 使用用户 Cookie，根据他们对该网站以及互联网上其他网站的访问情况投放广告。有关 Google 如何使用广告 Cookie 的更多信息，请参阅以下链接。" },
        s4_link1: { ko: "→ Google 개인정보처리방침", en: "→ Google Privacy Policy", ja: "→ Google プライバシーポリシー", zh: "→ Google 隐私政策" },
        s4_link2: { ko: "→ Google 광고 맞춤 설정 페이지", en: "→ Google Ads Settings Page", ja: "→ Google 広告設定ページ", zh: "→ Google 广告设置页面" },
        s4_warn: { ko: "⚠️ Google 광고 파트너 사이트에서 Google의 광고를 보셨다면, Google 쿠키도 사용된 것입니다. 위 '광고 맞춤 설정 페이지'에서 맞춤형 광고를 비활성화할 수 있습니다.", en: "⚠️ If you saw Google ads on a Google ad partner site, Google cookies are also used. You can opt out of personalized advertising on the 'Ads Settings Page' above.", ja: "⚠️ Google の広告パートナー サイトで Google の広告を見た場合、Google の Cookie も使用されています。上記の「広告設定ページ」でパーソナライズド広告を無効にできます。", zh: "⚠️ 如果您在 Google 广告合作伙伴的网站上看到了 Google 的广告，则也使用了 Google 的 Cookie。您可以在上述“广告设置页面”上选择停用个性化广告。" },
        s5_title: { ko: "5. 외부 링크", en: "5. External Links", ja: "5. 外部リンク", zh: "5. 外部链接" },
        s5_p1: { ko: "본 서비스에 포함된 외부 링크를 통해 다른 웹사이트로 이동하신 경우, 해당 사이트의 개인정보처리방침이 적용됩니다. 본 서비스는 외부 사이트의 개인정보 처리에 대한 책임을 지지 않습니다.", en: "If you move to another website through an external link included in this service, the privacy policy of that site applies. This service is not responsible for the processing of personal information on external sites.", ja: "本サービスに含まれる外部リンクを通じて他のウェブサイトに移動した場合、そのサイトのプライバシーポリシーが適用されます。本サービスは、外部サイトの個人情報処理に対する責任を負いません。", zh: "如果您通过本服务中包含的外部链接跳转到其他网站，则适用该网站的隐私政策。本服务不对外部站点的个人信息处理负责。" },
        s6_title: { ko: "6. 면책 조항", en: "6. Disclaimer", ja: "6. 免責事項", zh: "6. 免责声明" },
        s6_p1: { ko: "본 테스트의 결과는 심리학적 원형 이론에 기반한 <strong className=\"text-deep-charcoal\">오락 및 자기 이해 목적의 성향 분석</strong>이며, 의학적·심리상담적 진단이 아닙니다.", en: "The result of this test is an <strong className=\"text-deep-charcoal\">archetype analysis based on psychological archetype theory for the purpose of entertainment and self-understanding</strong>, not a medical or psychological counseling diagnosis.", ja: "本テストの結果は心理学的元型理論に基づいた<strong className=\"text-deep-charcoal\">娯楽および自己理解目的の傾向分析</strong>であり、医学的・心理相談的診断ではありません。", zh: "本测试的结果是基于心理学原型理论的<strong className=\"text-deep-charcoal\">以娱乐和自我认知为目的的倾向分析</strong>，并非医学或心理咨询诊断。" },
        s6_p2: { ko: "결과는 개인의 성향을 일부 반영할 수 있으나, 절대적 기준이 되지 않습니다. 전문적인 심리 상담이 필요한 경우 관련 전문가에게 문의하시기 바랍니다.", en: "The result may partially reflect individual tendencies, but it is not an absolute standard. If professional psychological counseling is needed, please contact a related expert.", ja: "結果は個人の性向を一部反映する場合がありますが、絶対的な基準にはなりません。専門的な心理相談が必要な場合は、関連する専門家にお問い合わせください。", zh: "结果可能部分反映个人倾向，但并非绝对标准。如果需要专业的心理咨询，请联系相关专家。" },
        s7_title: { ko: "7. 개인정보처리방침의 변경", en: "7. Changes to the Privacy Policy", ja: "7. プライバシーポリシーの変更", zh: "7. 隐私政策的变更" },
        s7_p1: { ko: "본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 변경될 수 있습니다. 변경 시 본 페이지 상단에 '최종 수정일'을 업데이트하여 공지합니다.", en: "This privacy policy may be changed according to laws, policies, or service changes. In the event of a change, we will notify you by updating the 'Last Modified' date at the top of this page.", ja: "本プライバシーポリシーは、法令、ポリシー、またはサービスの変更に応じて変更される場合があります。変更があった場合は、本ページの上部にある「最終修正日」を更新してお知らせします。", zh: "本隐私政策可能因法律、政策或服务变更而更改。发生更改时，我们将通过更新本页面顶部的“最后修改”日期来通知您。" },
        s8_title: { ko: "8. 개인정보 관련 문의", en: "8. Inquiries Regarding Personal Information", ja: "8. 個人情報に関するお問い合わせ", zh: "8. 关于个人信息的询问" },
        s8_p1: { ko: "개인정보처리방침에 관한 문의사항이 있으시면 아래 경로로 연락 주시기 바랍니다.", en: "If you have any questions about the Privacy Policy, please contact us via the route below.", ja: "プライバシーポリシーに関するご質問がある場合は、下記の経路でご連絡ください。", zh: "如果您对隐私政策有任何疑问，请通过以下途径联系我们。" },
        s8_box1: { ko: "서비스 운영", en: "Service Operation", ja: "サービス運営", zh: "服务运营" },
        s8_box2: { ko: "나는솔로 연애유형 테스트", en: "I am Solo Dating Archetype Test", ja: "私はソロ恋愛タイプテスト", zh: "我是单身恋爱类型测试" },
        go_home: { ko: "홈으로 돌아가기", en: "Return Home", ja: "ホームに戻る", zh: "返回主页" }
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
