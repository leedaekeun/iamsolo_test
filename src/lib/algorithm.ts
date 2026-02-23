import { Archetype, CHARACTERS } from '../data/characters';
import { Answer } from '../data/questions';

export type UserResult = {
    character: Archetype;
    matchPercentage: number;
};

// 사용자의 답변 배열을 통해 총 성향 점수를 계산합니다
export const calculateUserTraits = (answers: Answer[]) => {
    return answers.reduce(
        (acc, curr) => {
            acc.E_I += curr.weight.E_I;
            acc.N_S += curr.weight.N_S;
            acc.T_F += curr.weight.T_F;
            acc.J_P += curr.weight.J_P;
            return acc;
        },
        { E_I: 0, N_S: 0, T_F: 0, J_P: 0 }
    );
};

// 두 성향 간의 거리(유사도)를 계산합니다 (유클리디안 거리 기반 백분율)
export const calculateMatchPercentage = (
    userTraits: { E_I: number; N_S: number; T_F: number; J_P: number },
    charTraits: { E_I: number; N_S: number; T_F: number; J_P: number }
) => {
    const diffEI = Math.pow(userTraits.E_I - charTraits.E_I, 2);
    const diffNS = Math.pow(userTraits.N_S - charTraits.N_S, 2);
    const diffTF = Math.pow(userTraits.T_F - charTraits.T_F, 2);
    const diffJP = Math.pow(userTraits.J_P - charTraits.J_P, 2);

    // 최대 거리는 요소 4개 * (100 - (-100))^2 = 4 * 40000 = 160000
    // 하지만 질문 개수에 따라 사용자 점수 범위가 다르므로 스케일링
    // 임의로 최대 예상 거리를 30000으로 잡고 정규화 (추후 밸런싱 필요)
    const MAX_DISTANCE_SQ = 30000;

    const distanceSq = diffEI + diffNS + diffTF + diffJP;

    let matchScore = 100 - (distanceSq / MAX_DISTANCE_SQ) * 100;

    // 50% 밑으로 떨어지면 몰입감이 떨어지므로 최소 보정값 55% 설정
    if (matchScore < 55) {
        matchScore = 55 + Math.random() * 10;
    }

    // 소수점 1자리까지 리턴
    return Number(matchScore.toFixed(1));
};

export const getBestMatch = (
    answers: Answer[],
    genderPreference: 'M' | 'F'
): UserResult => {
    const userTraits = calculateUserTraits(answers);

    // 성별 필터링
    const targets = CHARACTERS.filter((c) => c.gender === genderPreference);

    let bestMatch: Archetype = targets[0];
    let highestPercentage = 0;

    targets.forEach((char) => {
        const percentage = calculateMatchPercentage(userTraits, char.traits);
        if (percentage > highestPercentage) {
            highestPercentage = percentage;
            bestMatch = char;
        }
    });

    return {
        character: bestMatch,
        matchPercentage: highestPercentage,
    };
};
