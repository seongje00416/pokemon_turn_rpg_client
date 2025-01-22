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
    width: 100%;
    height: 10%;
    margin-top: 1%;
    background: linear-gradient( -70deg, rgba(128, 128, 128, 0.8) 45%, rgba(128, 128, 128, 0.3) 50% );
    justify-content: center;
    align-items: center;
`
export const TopPokemonMiniInfoWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: left;
    align-items: center;
`
export const TopPokemonMiniInfoName = styled.p`
    width: 20%;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
`
export const TopPokemonMiniInfoType = styled.p`
    font-size: 18px;
    background: ${props => props.color };
    color: white;
    font-weight: bold;
    border: 1px solid ${props => props.color };
    border-radius: 5px;
    padding-inline: 1%;
`
export const TopTitle = styled.div`
    font-size: 28px;
    color: black;
    font-weight: bold;
    width: 25%;
    opacity: 100%;
    text-align: center;
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
    width: 70%;
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
    width: 30%;
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
    display: flex;
    align-items: center;
`
export const BackButton = styled.div`
    width: 10%;
    height: 50%;
    margin-inline: 2%;
    border: 2px solid gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
        opacity: 80%;
        background-color: lightgray;
    }    
`