import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
`
// 상단 정보 컨테이너
export const TopContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const TopProfileCard = styled.div`
    width: 25%;
    height: 90%;
    display: flex;
    border: 2px solid gray;
    border-radius: 5px;
    margin: 2%;
`
export const TopDisplayWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 2%;
`
export const TopMoneyDisplayCard = styled.div`
    width: 15%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid gray;
    border-radius: 5px;
`
export const TopMoneyDisplayCardIcon = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TopMoneyDisplayCardIconImage = styled.span`
    
`
export const TopMoneyDisplayCardValue = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`
export const TopMenuButtonWrapper = styled.div`
    width: 10%;
    height: 95%;
`
// 중단 로비 컨테이너
export const MiddleContainer = styled.div`
    height: 75%;
`
// 하단 입장 컨테이너
export const BottomContainer = styled.div`
    width: 94%;
    height: 20%;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-inline: 3%;
`
export const BottomButton = styled.div`
    width: 8%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin: 1%;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const BottomButtonIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BottomButtonImage = styled.img`
    width: 90%;
    height: auto;
`
export const BottomButtonName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
`