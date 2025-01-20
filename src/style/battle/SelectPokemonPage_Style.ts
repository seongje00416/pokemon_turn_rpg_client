import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: whitesmoke;
`
// 상단 배틀 정보 컨테이너
export const TopContainer = styled.div`
    width: 100%;
    height: 5%;
    justify-content: center;
    align-items: center;
    background-color: red;
    border-bottom: 5px black solid;
`
// 중단 포켓몬 선택 컨테이너
export const MiddleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
// 하단 버튼 컨테이너
export const BottomContainer = styled.div`
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-top: 5px black solid;
`
// 적군 팀 컨테이너
export const OppositeTeamContainer = styled.div`
    width: 30%;
    height: 80%;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`
// 아군 팀 컨테이너
export const MyTeamContainer = styled.div`
    width: 30%;
    height: 80%;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`
export const TeamUserWrapper = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;
    align-items: center;
    border-bottom: 3px dotted gray;
    margin-bottom: 20px;
    width: 80%;
`
export const TeamUserText = styled.p`
    font-weight: bold;
    font-size: 20px;
`
export const TeamEntryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 80%;
`
export const TeamEntryPokemonCard = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    padding-top: 20px;
    margin: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
`
export const TeamEntryPokemonCardImage = styled.img`
    height: 70%;
    width: auto;
`
export const TeamEntryPokemonCardText = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`
// 포켓몬 선택 컨테이너
export const PokemonSelectContainer = styled.div`
    width: 20%;
    height: 80%;
    background-color: white;
`
export const PokemonSelectWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 82%;
    overflow-y: scroll;
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-top: 25%;
    padding-bottom: 5%;
`
export const PokemonSelectCard = styled.div`
    width: 80%;
    height: 8%;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    align-items: center;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`
export const PokemonCardImage = styled.img`
    width: auto;
    height: 100%;
`
export const PokemonCardName = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
`
export const PokemonCardNameText = styled.p`
    font-weight: bold;   
    font-size: 20px;
`