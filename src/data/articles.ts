export interface Article {
    id: string;
    titleKo: string;
    titleEn: string;
    titleJa: string;
    titleZh: string;
    descKo: string;
    descEn: string;
    descJa: string;
    descZh: string;
    contentKo: string;
    contentEn: string;
    contentJa: string;
    contentZh: string;
    thumbnail: string;
    date: string;
}

export const articles: Article[] = [
    {
        id: '1',
        titleKo: '연애 초반, 상대방의 호감을 확인하는 3가지 신호',
        titleEn: '3 Signs to Confirm Their Interest in the Early Stages of Dating',
        titleJa: '恋愛初期、相手の好意を確認する3つのサイン',
        titleZh: '恋爱初期，确认对方好感的3个信号',
        descKo: '소개팅이나 썸 단계에서 상대방이 나에게 진짜 관심이 있는지 헷갈린다면? 심리학 행동 패턴으로 분석해드립니다.',
        descEn: 'Confused if they are really interested during the talking stage? We analyze it through psychological behavioral patterns.',
        descJa: '合コンやサムの段階で相手が本当に自分に気があるのか迷ったら？心理学の行動パターンで分析します。',
        descZh: '在相亲或暧昧阶段不知道对方是否真的对你感兴趣？我们将通过心理行为模式进行分析。',
        contentKo: `<p className="mb-4">연애의 시작점에서는 누구나 상대방의 마음을 궁금해합니다. 특히 '썸' 단계에서는 상대방의 작은 행동 하나에도 의미를 부여하게 되죠.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 눈맞춤의 빈도와 길이</h3>
<p className="mb-4">가장 본능적인 호감 신호는 바로 시선입니다. 대화 중 상대방이 내 눈을 피하지 않고 길게 마주친다면 호감의 표시일 확률이 높습니다. 특히 내가 다른 곳을 보고 있을 때 나를 빤히 쳐다보다가 눈이 마주쳤을 때 시선을 돌린다면 무의식적인 호감이 작용하고 있다는 증거입니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 신체적 거리와 미러링 효과</h3>
<p className="mb-4">사람은 무의식적으로 관심 있는 사람에게 몸을 향하게 됩니다. 대화 중 상체가 나를 향해 기울어져 있거나, 테이블 위에 올려둔 팔이 내 쪽으로 향해 있다면 호감 신호입니다. 또한 내가 물을 마실 때 상대방도 물을 마시는 등 비슷한 행동을 따라하는 '미러링 효과'가 나타난다면 심리적 거리감이 매우 좁혀졌다는 뜻입니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 연락의 빈도와 '질'</h3>
<p className="mb-4">단순히 연락이 자주 오는 것도 중요하지만, 연락의 '질'이 더 중요합니다. 내가 보낸 메시지에 성의 있게 대답하고, 대화의 꼬리를 무는 질문을 계속 이어간다면 나와의 대화를 즐기고 있다는 의미입니다. 특별한 용건이 없는데도 일상적인 사진을 찍어 보내거나 자신의 소소한 일상을 공유하려 한다면 당신에게 마음을 열고 있다는 강력한 신호입니다.</p>`,
        contentEn: `<p className="mb-4">At the beginning of a relationship, everyone is curious about the other person's feelings. Especially during the 'talking stage', we tend to assign meaning to every little action they take.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. Frequency and Duration of Eye Contact</h3>
<p className="mb-4">The most instinctual sign of interest is eye contact. If they hold your gaze without looking away during conversations, there's a high chance of attraction. Especially if you catch them staring when you're looking elsewhere, and they quickly avert their eyes when you look back—that's proof of subconscious interest.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. Physical Distance and Mirroring</h3>
<p className="mb-4">People unconsciously lean toward those they are interested in. If their upper body is leaning towards you, or their arms rest pointing in your direction, it's a green light. Also, if they display 'mirroring'—like taking a sip of water right after you do—it means the psychological distance has significantly narrowed.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. Frequency and 'Quality' of Texts</h3>
<p className="mb-4">While frequent texting is important, the 'quality' matters more. If they reply thoughtfully and keep asking follow-up questions to maintain the conversation, they enjoy talking to you. If they share daily photos or mundane updates without a specific reason, it's a strong signal they are opening up to you.</p>`,
        contentJa: `<p className="mb-4">恋愛の始まりでは、誰もが相手の気持ちを気にします。特に「サム（友達以上恋人未満）」の段階では、相手の小さな行動一つ一つに意味を見出してしまいます。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. アイコンタクトの頻度と長さ</h3>
<p className="mb-4">最も本能的な好意のサインは視線です。会話中に相手が目をそらさずに長く見つめてくる場合、好意がある可能性が高いです。特に、あなたが別の場所を見ている時にじっと見つめられ、目が合った瞬間に視線をそらすなら、無意識の好意が働いている証拠です。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 物理的な距離とミラーリング効果</h3>
<p className="mb-4">人は無意識のうちに気になる人の方へ体を向けます。会話中に上半身があなたの方に傾いていたり、テーブルに置いた腕があなたの方に向いていれば好意のサインです。また、あなたが水を飲んだ時に相手も飲むなど、同じ行動をとる「ミラーリング効果」が見られれば、心理的距離が非常に縮まっていることを意味します。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 連絡の頻度と「質」</h3>
<p className="mb-4">単に連絡が頻繁に来ることも重要ですが、連絡の「質」の方が重要です。あなたのメッセージに丁寧に応答し、会話を途切れさせないように質問を続けるなら、会話を楽しんでいる証拠です。特別な用事もないのに日常の写真を送ってきたり、些細な出来事を共有しようとするなら、あなたに心を開いているという強力なサインです。</p>`,
        contentZh: `<p className="mb-4">在恋爱初期，每个人都对对方的想法感到好奇。特别是在“暧昧”阶段，我们很容易对对方的每一个小动作赋予意义。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 眼神接触的频率和长度</h3>
<p className="mb-4">最本能的好感信号就是视线。如果在交谈中对方不避开你的眼睛并且长时间对视，那么很有可能是好感的表现。特别是当你看着别处时，对方盯着你看，而当你们目光相遇时对方又移开视线，这就是潜意识产生好感的证据。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 身体距离与镜像效应</h3>
<p className="mb-4">人们会下意识地把身体倾向自己感兴趣的人。如果在交谈中对方的上半身向你倾斜，或者放在桌子上的手臂朝向你，那就是好感的信号。此外，如果你喝水时对方也跟着喝水，出现这种模仿行为的“镜像效应”，就意味着心理距离已经大大缩短。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 联系的频率与“质量”</h3>
<p className="mb-4">虽然频繁联系很重要，但联系的“质量”更重要。如果对方认真回复你的信息，并不断提出问题来延续话题，就说明对方很享受与你的交流。如果没有特别的事情，却发来日常照片或分享生活琐事，那就是对方正在向你敞开心扉的强烈信号。</p>`,
        thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-05-10',
    },
    {
        id: '2',
        titleKo: '회피형 연인과 안정적으로 데이트하는 법',
        titleEn: 'How to Date Securely with an Avoidant Partner',
        titleJa: '回避型の恋人と安定してデートする方法',
        titleZh: '如何与回避型恋人稳定约会',
        descKo: '연락이 안 되면 불안해지나요? 회피형 애착 유형을 가진 연인을 이해하고 평화로운 관계를 유지하는 꿀팁.',
        descEn: 'Do you get anxious when they do not reply? Tips on understanding an avoidant attachment style partner and maintaining a peaceful relationship.',
        descJa: '連絡が取れないと不安になりますか？回避型愛着スタイルを持つ恋人を理解し、平和な関係を維持するヒント。',
        descZh: '如果不联系就会焦虑吗？理解回避型依恋伴侣并保持和平关系的技巧。',
        contentKo: `<p className="mb-4">애착 유형 중 '회피형'은 연애 과정에서 독립성을 가장 중요하게 생각합니다. 너무 가까워지는 것을 무의식적으로 두려워하기 때문이죠.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 연락 빈도에 집착하지 않기</h3>
<p className="mb-4">회피형 연인은 연락 빈도가 애정의 척도라고 생각하지 않습니다. 그들이 연락을 뜸하게 하는 것은 당신을 사랑하지 않아서가 아니라, 혼자만의 재충전 시간이 필요하기 때문일 수 있습니다. 이럴 때는 강요하기보다 그들의 개인 시간을 존중해 주는 태도가 필요합니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 갈등 상황에서 시간 주기</h3>
<p className="mb-4">싸움이 발생했을 때 회피형 연인은 동굴로 들어가려 합니다. 이때 억지로 대화를 시도하며 상대를 몰아붙이면 그들은 더 깊이 숨어버립니다. "네가 생각이 정리될 때까지 기다릴게"라며 한 발 물러서 주는 여유를 보여주세요. 이들은 안전지대가 확보되었다고 느낄 때 비로소 밖으로 나옵니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 독립적인 나의 삶 즐기기</h3>
<p className="mb-4">회피형 연인과 건강하게 만나기 위해서는 당신 자신도 독립적인 삶의 영역을 구축하는 것이 중요합니다. 연애가 삶의 전부가 되지 않도록 본인만의 취미, 친구들과의 모임에 시간을 투자하세요. 연인에게 지나치게 의존하지 않는 모습을 보여줄 때, 회피형 연인은 당신을 더욱 매력적이고 편안한 상대로 인식합니다.</p>`,
        contentEn: `<p className="mb-4">Among attachment styles, the 'avoidant' type values independence the most in dating. This is because they subconsciously fear getting too close.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. Don't Obsess Over Texting Frequency</h3>
<p className="mb-4">Avoidant partners don't consider texting frequency a measure of affection. When they contact you less, it's not a lack of love; it's because they need time alone to recharge. An attitude of respecting their personal time without forcing them is necessary.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. Give Them Space During Conflicts</h3>
<p className="mb-4">During an argument, an avoidant partner tends to retreat into their 'cave'. Forcing a conversation then will only push them deeper into hiding. Show some leniency by stepping back and saying, "I'll wait until you've gathered your thoughts." They will only come out when they feel the environment is safe.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. Enjoy Your Own Independent Life</h3>
<p className="mb-4">To maintain a healthy relationship with an avoidant partner, building your own independent life is crucial. Invest time in hobbies and friends so that dating isn't your entire life. When you show that you're not overly dependent, an avoidant partner will find you more attractive and comfortable to be around.</p>`,
        contentJa: `<p className="mb-4">愛着スタイルの中で「回避型」は、恋愛において独立性を最も重視します。あまりにも親密になることを無意識に恐れるためです。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 連絡の頻度にこだわらない</h3>
<p className="mb-4">回避型の恋人は、連絡の頻度を愛情のバロメーターとは考えていません。連絡が途絶えがちなのは、あなたを愛していないからではなく、一人で充電する時間が必要だからかもしれません。そんな時は無理に連絡を強いるのではなく、彼らの個人的な時間を尊重する態度が必要です。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 葛藤が生じた時は時間を与える</h3>
<p className="mb-4">喧嘩になった時、回避型の恋人は自分の殻に閉じこもろうとします。この時に無理に会話を試みて追い詰めると、彼らはさらに深く隠れてしまいます。「考えがまとまるまで待つね」と一歩引く余裕を見せてください。彼らは安全圏が確保されたと感じた時に初めて外に出てきます。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 自立した自分の人生を楽しむ</h3>
<p className="mb-4">回避型の恋人と健全に付き合うためには、あなた自身も自立した人生の領域を築くことが重要です。恋愛が人生の全てにならないよう、自分自身の趣味や友人との集まりに時間を投資してください。恋人に過度に依存しない姿を見せる時、回避型の恋人はあなたをさらに魅力的で気楽な相手として認識します。</p>`,
        contentZh: `<p className="mb-4">在依恋类型中，“回避型”在恋爱过程中最看重独立性。因为他们潜意识里害怕过于亲密。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 不要执着于联系频率</h3>
<p className="mb-4">回避型恋人并不认为加强联系是感情的标准。他们不经常联系你，可能不是因为不爱你，而是因为需要独处的充电时间。这时候，比起强迫，更需要一种尊重他们私人时间的态度。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 在冲突情况下给予时间</h3>
<p className="mb-4">发生争吵时，回避型恋人会想躲进“洞穴”里。如果此时强行试图沟通并逼迫对方，他们会躲得更深。请展现出退后一步的从容：“我会等你理清头绪。”当他们觉得已经有了安全地带时，才会走出来。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 享受自己独立的生活</h3>
<p className="mb-4">为了与回避型恋人保持健康的交往，建立自己独立的生活领域非常重要。把时间投入到自己的爱好和朋友圈中，不要让恋爱成为生活的全部。当你表现出不过度依赖恋人的一面时，回避型恋人会认为你更有魅力、让你觉得更自在。</p>`,
        thumbnail: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-05-15',
    },
    {
        id: '3',
        titleKo: '장기 연애의 비결: 권태기를 극복하는 대화법',
        titleEn: 'Secret to Long-term Relationships: Communication to Overcome Slumps',
        titleJa: '長期恋愛の秘訣：倦怠期を乗り越える会話術',
        titleZh: '长期恋爱的秘诀：克服倦怠期的沟通技巧',
        descKo: '오래된 연인이라면 누구나 겪는 권태기. 서로의 감정을 해치지 않고 위기를 기회로 바꾸는 소통의 기술을 알아봅니다.',
        descEn: 'Every long-term couple faces a slump. Explore communication techniques to turn a crisis into an opportunity without hurting feelings.',
        descJa: '長く付き合っている恋人なら誰もが経験する倦怠期。お互いの感情を傷つけずにピンチをチャンスに変えるコミュニケーション術。',
        descZh: '长期情侣都会经历倦怠期。探索沟通技巧，在不伤害感情的情况下将危机转化为机遇。',
        contentKo: `<p className="mb-4">1년, 3년, 5년... 연애 기간이 길어질수록 초반의 설렘은 익숙함으로 자리 잡습니다. 이 익숙함이 편안함이 될 수도 있지만, 자칫 '권태기'라는 위기로 찾아오기도 합니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. '나' 전달법 (I-Message) 사용하기</h3>
<p className="mb-4">"너는 왜 맨날 연락을 안 해?"라는 비난조의 말 대신, "네가 바빠서 연락이 없으면, 내가 소외된 것 같아서 서운해"라고 말해보세요. 상대의 행동을 지적하는 것이 아니라, 그 행동으로 인한 '나의 감정'을 전달하는 것이 핵심입니다. 이는 상대방이 방어기제를 펴지 않고 당신의 말에 귀 기울이게 만듭니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 일주일에 한 번, 딥 토크 타임</h3>
<p className="mb-4">서로 바쁜 일상을 보내다 보면 감정적인 교류 없이 일상적인 대화만 나누게 됩니다. 일주일에 한 번은 핸드폰을 내려놓고 서로의 눈을 맞추며 깊은 대화를 나누는 시간을 정하세요. "요즘 가장 스트레스받는 일은 뭐야?", "우리가 처음 데이트했을 때 가장 좋았던 기억은?" 등 일상에서 벗어난 질문들이 관계에 새로운 활력을 불어넣습니다.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 작은 감사를 표현하는 습관</h3>
<p className="mb-4">친해질수록 당연하게 여겨지는 것들이 많습니다. 데이트 코스를 짜온 연인에게, 혹은 내 이야기를 잘 들어준 상대에게 "고마워"라고 표현하세요. 아주 사소한 일이라도 인정받고 존중받는다는 느낌은 권태로운 관계에 윤활유 역할을 합니다. 당연함을 고마움으로 바꾸는 순간, 관계의 온도는 다시 올라갑니다.</p>`,
        contentEn: `<p className="mb-4">One year, three years, five years... As a relationship extends, initial butterflies get replaced by comfort. While comfort is great, it can sometimes creep in as a 'slump'.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. Use 'I-Messages'</h3>
<p className="mb-4">Instead of a blaming "Why do you never text me?", try saying, "When you get busy and don't text, I feel a bit left out and sad." The core idea is to express 'your feelings' caused by the behavior, rather than attacking the behavior itself. This lowers defenses and helps them truly listen to you.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. Deep Talk Time, Once a Week</h3>
<p className="mb-4">Busy daily lives often reduce conversations to mere logistical updates. Set a time once a week to put down your phones, look into each other's eyes, and have a deep conversation. Questions outside the mundane, like "What's stressing you out the most lately?" or "What's your favorite memory of our first date?" can breathe new life into the relationship.</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. The Habit of Expressing Small Gratitudes</h3>
<p className="mb-4">The closer you get, the more things you take for granted. Say "Thank you" to an partner who planned a date, or simply listened well to your stories. Feeling acknowledged and respected, even for minor acts, acts as a lubricant for a stale relationship. The moment you turn expectations into gratitude, the temperature of the relationship rises again.</p>`,
        contentJa: `<p className="mb-4">1年、3年、5年…交際期間が長くなるにつれて、初期のトキメキは慣れへと変わっていきます。この慣れが安心感になることもありますが、時に「倦怠期」というピンチとして訪れることもあります。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 「私（I）」を主語にして伝える（Iメッセージ）</h3>
<p className="mb-4">「どうしていつも連絡してくれないの？」という非難がましい言葉の代わりに、「忙しくて連絡がないと、私が疎外されているように感じて寂しいな」と言ってみましょう。相手の行動を指摘するのではなく、その行動から来る「自分の感情」を伝えることが肝心です。これにより、相手は防御姿勢をとることなくあなたの言葉に耳を傾けるようになります。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 週に一度のディープトークタイム</h3>
<p className="mb-4">お互いに忙しい日常を送っていると、感情的な交流のない事務的な会話ばかりになりがちです。週に一度はスマートフォンを置き、お互いの目を見つめながら深い話をする時間を決めてみましょう。「最近一番ストレスに感じていることは何？」「初めてのデートで一番楽しかった思い出は？」など、日常から離れた質問が関係性に新しい活力を吹き込みます。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 小さな感謝を表現する習慣</h3>
<p className="mb-4">親しくなればなるほど、当たり前のように感じられることが増えます。デートコースを考えてくれた恋人に、あるいは自分の話をよく聞いてくれた相手に「ありがとう」と表現してください。本当に些細なことでも、認められ尊重されているという感覚は、退屈な関係性の潤滑油の役割を果たします。当たり前を感謝に変えた瞬間、関係性の温度は再び上昇します。</p>`,
        contentZh: `<p className="mb-4">1年、3年、5年……随着恋爱时间变长，最初的心动会逐渐沉淀为习惯。这种习惯可能会变成一种舒服的相处模式，但也可能悄然带来名为“倦怠期”的危机。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">1. 使用“我视角（I-Message）”表达</h3>
<p className="mb-4">与其用指责的语气说“你为什么老是不联系我？”，不如试着说：“如果你因为忙不联系我，我会觉得被冷落，会感到难过。”这里的核心不是去指出对方的行为有多糟糕，而是去传达该行为引起的“你自己的情绪”。这样对方就不会产生防御心理，反而能真正倾听你的话。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">2. 每周一次的深度对话时间</h3>
<p className="mb-4">如果两人都在忙碌度日，很可能只会进行一些毫无情感交流的日常琐事沟通。试着每周定个时间放下手机走心交流，看着彼此的眼睛来一场深度对话。“最近最让你感到压力的事是什么？”、“我们第一次约会时，让你最开心的回忆是什么？”诸如此类超越日常的问题，能为你们的关系注入全新活力。</p>
<h3 className="text-xl font-bold mt-6 mb-3 text-deep-charcoal">3. 养成表达微小感谢的习惯</h3>
<p className="mb-4">关系越亲密，就越容易把许多事情当成理所当然。对于精心安排约会行程的伴侣，或者是耐心倾听你倾诉的对方，请真心说一句“谢谢”。哪怕只是极其微不足道的小事，那种被认可和被尊重的感觉，也能在枯燥的关系中起到润滑剂的作用。当把“理所当然”转换为“心怀感激”的瞬间，你们关系的温度便会再次回升。</p>`,
        thumbnail: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: '2024-05-20',
    }
];
