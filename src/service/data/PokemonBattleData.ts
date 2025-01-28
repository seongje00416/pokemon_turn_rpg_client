
// 배틀 필드에 필요한 데이터 인터페이스
export interface PokemonDetail {
    name: string;               // 한글 이름
    englishName: string;        // 영어 이름 : 이미지 및 스프라이트 지정을 위한 영어 이름
    level: number;              // 레벨
    maxHP: number;              // 최대 HP
    attack: number;             // 물리 공격력
    specialAttack: number;      // 특수 공격력
    defense: number;            // 물리 방어력
    specialDefense: number;     // 특수 방어력
    speed: number;              // 속도
    accuracy: number;           // 명중률
    avoidance: number;          // 회피율
    currentHP: number;          // 현재 HP
    moveGage: number;           // 행동 게이지
    state: PokemonState[];      // 적용되어 있는 상태 이상
}
interface PokemonState {
    name: string;               // 상태이상 이름
    turn: number;               // 지속 턴수
    isPositive: boolean;        // 이로운 효과 여부
    canDelete: boolean;         // 해제 가능 여부
}

// 테스트를 위한 더미 데이터
export const Pokemon1:PokemonDetail = {
    name: "초염몽",
    englishName: "infernape",
    level: 60,
    maxHP: 150,
    attack: 100,
    specialAttack: 80,
    defense: 90,
    specialDefense: 80,
    speed: 90,
    accuracy: 20,
    avoidance: 20,
    currentHP: 60,
    moveGage: 20,
    state: []
} as const;
export const Pokemon2:PokemonDetail = {
    name: "물짱이",
    englishName: "mudkip",
    level: 60,
    maxHP: 130,
    attack: 60,
    specialAttack: 50,
    defense: 90,
    specialDefense: 90,
    speed: 50,
    accuracy: 10,
    avoidance: 10,
    currentHP: 130,
    moveGage: 26,
    state: []
} as const;
export const Pokemon3:PokemonDetail = {
    name: "피카츄",
    englishName: "pikachu",
    level: 60,
    maxHP: 100,
    attack: 30,
    specialAttack: 70,
    defense: 50,
    specialDefense: 50,
    speed: 80,
    accuracy: 40,
    avoidance: 10,
    currentHP: 100,
    moveGage: 40,
    state: []
} as const;
export const Pokemon4:PokemonDetail = {
    name: "디아루가",
    englishName: "dialga",
    level: 60,
    maxHP: 180,
    attack: 100,
    specialAttack: 130,
    defense: 100,
    specialDefense: 100,
    speed: 90,
    accuracy: 30,
    avoidance: 20,
    currentHP: 180,
    moveGage: 5,
    state: []
} as const;
export const Opposite1:PokemonDetail = {
    name: "뮤",
    englishName: "mew",
    level: 60,
    maxHP: 110,
    attack: 110,
    specialAttack: 110,
    defense: 110,
    specialDefense: 110,
    speed: 110,
    accuracy: 50,
    avoidance: 20,
    currentHP: 110,
    moveGage: 75,
    state: []
} as const;
export const Opposite2:PokemonDetail = {
    name: "팽도리",
    englishName: "piplup",
    level: 60,
    maxHP: 90,
    attack: 60,
    specialAttack: 20,
    defense: 90,
    specialDefense: 90,
    speed: 60,
    accuracy: 20,
    avoidance: 10,
    currentHP: 90,
    moveGage: 65,
    state: []
} as const;
export const Opposite3:PokemonDetail = {
    name: "펄기아",
    englishName: "palkia",
    level: 60,
    maxHP: 170,
    attack: 100,
    specialAttack: 160,
    defense: 110,
    specialDefense: 110,
    speed: 100,
    accuracy: 70,
    avoidance: 30,
    currentHP: 110,
    moveGage: 32,
    state: []
} as const;
export const Opposite4:PokemonDetail = {
    name: "아르세우스",
    englishName: "arceus",
    level: 60,
    maxHP: 150,
    attack: 150,
    specialAttack: 150,
    defense: 150,
    specialDefense: 150,
    speed: 150,
    accuracy: 70,
    avoidance: 70,
    currentHP: 150,
    moveGage: 42,
    state: []
} as const;