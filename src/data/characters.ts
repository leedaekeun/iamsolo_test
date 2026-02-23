export type Archetype = {
    id: string;
    name: string;      // '영수', '옥순' 등
    gender: 'M' | 'F';
    title: string;     // '분석가', '몽상가' 등
    description: string;
    strengths: string[];
    weaknesses: string[];
    bestMatch: string; // 환상의 짝꿍
    worstMatch: string; // 환장의 짝꿍
    traits: {
        E_I: number; // 외향(100) - 내향(-100)
        N_S: number; // 직관(100) - 감각(-100)
        T_F: number; // 사고(100) - 감정(-100)
        J_P: number; // 판단(100) - 인식(-100)
    }
};

export const CHARACTERS: Archetype[] = [
    // 남성 캐릭터
    {
        id: 'm1_youngsoo',
        name: '영수',
        gender: 'M',
        title: '분석가 (Analyst)',
        description: '어떤 상황에서도 이성과 논리를 잃지 않는 타입. 조용하지만 날카로운 통찰력으로 전체적인 흐름을 파악합니다. 표현은 서툴러도 속이 깊고 책임감이 뛰어납니다.',
        strengths: ['신중함', '논리적 사고', '책임감'],
        weaknesses: ['감정 표현 부족', '지나친 계산'],
        bestMatch: '현숙',
        worstMatch: '정숙',
        traits: { E_I: -60, N_S: 40, T_F: 80, J_P: 70 }
    },
    {
        id: 'm2_youngho',
        name: '영호',
        gender: 'M',
        title: '촉매제 (Catalyst)',
        description: '어디서나 분위기 메이커 역할을 톡톡히 하는 사교적인 인물입니다. 타인의 감정에 공감능력이 뛰어나며, 주변 사람들을 편안하게 해주는 타고난 친화력을 가졌습니다.',
        strengths: ['사교성', '공감 능력', '유머러스함'],
        weaknesses: ['가벼워 보일 수 있음', '거절을 잘 못함'],
        bestMatch: '옥순',
        worstMatch: '영자',
        traits: { E_I: 80, N_S: 20, T_F: -50, J_P: -30 }
    },
    {
        id: 'm3_youngsik',
        name: '영식',
        gender: 'M',
        title: '든든한 보호자 (Protector)',
        description: '안정감을 중시하고 성실함이 몸에 배어 있는 타입. 화려한 언변보다는 묵묵한 행동으로 진심을 증명하며, 한번 맺은 인연을 끝까지 소중히 여깁니다.',
        strengths: ['성실함', '안정감', '헌신적'],
        weaknesses: ['변화에 대한 두려움', '보수적 성향'],
        bestMatch: '영숙',
        worstMatch: '옥순',
        traits: { E_I: -20, N_S: -60, T_F: 30, J_P: 80 }
    },
    {
        id: 'm4_youngchul',
        name: '영철',
        gender: 'M',
        title: '직진남 (Challenger)',
        description: '목표가 생기면 뒤도 돌아보지 않고 돌진하는 맹수 같은 매력을 지녔습니다. 솔직하고 시원시원한 성격으로 밀당 없이 자신의 마음을 투명하게 표현합니다.',
        strengths: ['추진력', '솔직함', '강한 자신감'],
        weaknesses: ['성급함', '타인의 감정에 둔감'],
        bestMatch: '정숙',
        worstMatch: '현숙',
        traits: { E_I: 90, N_S: -20, T_F: 60, J_P: 30 }
    },

    // 여성 캐릭터 
    {
        id: 'f1_oksoon',
        name: '옥순',
        gender: 'F',
        title: '몽상가 (Dreamer)',
        description: '압도적인 비주얼과 특유의 신비로운 분위기로 단숨에 시선을 사로잡는 존재입니다. 자신만의 확고한 세계가 있으며, 언제나 낭만적인 운명을 꿈꿉니다.',
        strengths: ['매력적인 외모', '풍부한 상상력', '개성'],
        weaknesses: ['현실 감각 부족', '변덕스러움'],
        bestMatch: '영호',
        worstMatch: '영식',
        traits: { E_I: 30, N_S: 80, T_F: -60, J_P: -50 }
    },
    {
        id: 'f2_hyunsook',
        name: '현숙',
        gender: 'F',
        title: '현자 (Wise Mentor)',
        description: '뛰어난 지성과 우수한 사회성으로 그룹 내에서 중심을 잡아주는 어른스러운 캐릭터입니다. 갈등이 생겼을 때 객관적인 시각으로 지혜롭게 상황을 중재합니다.',
        strengths: ['지성미', '현명함', '우수한 사회성'],
        weaknesses: ['본인의 감정은 억누름', '완벽주의'],
        bestMatch: '영수',
        worstMatch: '영철',
        traits: { E_I: -10, N_S: 30, T_F: 50, J_P: 80 }
    },
    {
        id: 'f3_youngsook',
        name: '영숙',
        gender: 'F',
        title: '통치자 (Ruler)',
        description: '강단 있고 카리스마 넘치는 성격으로 무리를 리드하는 타입입니다. 호오가 명확하며, 돌려 말하지 않는 화끈한 매력이 있어 따르는 사람이 많습니다.',
        strengths: ['리더십', '결단력', '의리'],
        weaknesses: ['고집이 셈', '위압감 조성 가능성'],
        bestMatch: '영식',
        worstMatch: '영자',
        traits: { E_I: 70, N_S: -40, T_F: 60, J_P: 60 }
    },
    {
        id: 'f4_jungsook',
        name: '정숙',
        gender: 'F',
        title: '호걸 (Curmudgeon)',
        description: '가식 없이 털털하고 직설적인 화법을 구사하는 매력의 소유자입니다. 내숭과는 거리가 멀며, 시원시원하고 호탕한 성격 덕분에 누구와도 금방 친해집니다.',
        strengths: ['솔직함', '털털함', '유쾌함'],
        weaknesses: ['직설적 화법으로 상처를 줌', '눈치가 부족함'],
        bestMatch: '영철',
        worstMatch: '영수',
        traits: { E_I: 80, N_S: 10, T_F: 20, J_P: -40 }
    }
];
