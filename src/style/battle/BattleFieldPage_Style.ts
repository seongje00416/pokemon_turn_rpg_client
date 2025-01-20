import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
// 최상단 화면 장식 컨테이너
export const BattleFieldGradeContainer = styled.div`
    width: 100%;
    height: 5%;
    background-color: red;
    border-bottom: 5px black solid;
`

// 상단 게임 정보 컨테이너
export const BattleInfoContainer = styled.div`
    width: 100%;
    height: 5%;
    background-color: lightgray;
    border-bottom: 1px gray solid;
`


// 상단 행동 게이지 표시 컨테이너
export const MoveGageContainer = styled.div`
    width: 100%;
    height: 5%;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MoveGageLine = styled.div`
    width: 95%;
    height: 75%;
    border-inline: 3px solid gray;
    background-color: lightgray;
    padding-inline: 1%;
    display: flex;
    position: relative;
`
export const MoveGageCard = styled.span`
    transform: translateY(-42%);
    position: absolute;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: ${props => props.isOpposite ? 'red' : 'blue' };
    left: ${props => props.moveGage}%
`

// 중단 포켓몬 표시 컨테이너
export const MiddleContainer = styled.div`
    width: 100%;
    height: 50%;
`

// 하단 스킬 정보 및 선택 컨테이너
export const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    height: 15%;
    background-color: whitesmoke;
    border-bottom: 1px gray solid;
`
//      해당 포켓몬 정보
export const PokemonInfoWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const PokemonInfoCard = styled.div`
    width: 90%;
    margin: 1%;
`
//      포켓몬 스킬 목록
export const SkillWrapper = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    gap: 1%;
    justify-content: center;
    align-items: center;
`
export const SkillCard = styled.div`
    margin-block: 1%;
    width: 30%;
    height: 60%;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-width: 3px;
    border-radius: 5px;
    background-color: white;
    border-style: ${props => props.isActive ? 'solid' : 'dotted' };
    border-color: ${props => {
        switch(props.pokemonType) {
            case 'fire':
                return 'red'; // 초록색
            case 'water':
                return 'blue'; // 파란색
            case 'grass':
                return 'green'; // 빨간색
            default:
                return 'gray'; // 기본 회색
        }
    }};
    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`
export const SkillCardNameText = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
`
export const SkillCardTypeText = styled.p`
    font-size: 1rem;
    margin: 0;
    margin-top: 5px;
`

// 최하단 배틀 컨텍스트 컨테이너
export const ContextContainer = styled.div`
    width: 95%;
    height: 15%;
    margin: 1%;
    border: 3px solid gray;
    border-radius: 5px;
`
export const ContextText = styled.p`
    margin: 1%;
    font-size: 1.3rem;
    font-weight: bold;
`