import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-70deg, orangered 40%, red 41% 45%, white 46%);
`
// 상단 정보 바
export const TopContainer = styled.div`
    display: flex;
    width: 85%;
    height: 10%;
    opacity: 70%;
    margin-top: 1%;
    background-color: gray;
    justify-content: right;
    align-items: center;
    padding-right: 15%;
`
export const TopTitle = styled.div`
    font-size: 24px;
    opacity: 100%;
`
// 중단 내용 컨테이너
export const MiddleContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
`
// 좌측 포켓몬 간단 정보
export const LeftContainer = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const LeftPokemonImage = styled.img`
    width: 40%;
`
// 우측 포켓몬 목록
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 90%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding-block: 3%;
`
export const RightPokemonCard = styled.div`
    display: flex;
    width: 90%;
    height: 15%;
    justify-content: center;
    align-items: center;
    
    &:hover {
        border: 1px solid darkred;
        border-radius: 15px;
        cursor: pointer;
    }
`
export const RightPokemonCardIcon = styled.img`
    margin-inline: 5%;
    height: 60%;
`
export const RightPokemonCardLevel = styled.p`
    width: 20%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`
export const RightPokemonCardName = styled.p`
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`
// 하단 버튼 컨테이너
export const BottomContainer = styled.div`
    width: 100%;
    height: 8%;
    background: whitesmoke;
`