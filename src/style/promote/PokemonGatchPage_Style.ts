import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
// 상단 재화 표시 컨테이너
export const TopContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: right;
    align-items: center;
    border-bottom: 2px solid gray;
`
export const MoneyCard = styled.div`
    width: 10%;
    height: 60%;
    border: 2px solid gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 1%;
    font-weight: bold;
`
export const MoneyCardIcon = styled.span`
    
`
// 중단 가챠 목록 컨테이너
export const MiddleContainer = styled.div`
    width: 100%;
    height: 75%;
    background: url( "src/assets/background/wild_forest.png" );
    background-size: 100% auto;  // 세로 길이에 맞춤
    background-repeat: no-repeat;  // 이미지 반복 방지
    background-position: center;
`
//      가챠 목록 화면
export const GatchaListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25%;
    background: url( "src/assets/background/poke_rader.png" );
    background-size: auto 30%;  // 세로 길이에 맞춤
    background-repeat: no-repeat;  // 이미지 반복 방지
    background-position: center;
`
export const GatchaListSideWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3%;
`
export const GatchaCard = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    border: 10px solid red;
    border-radius: 15px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: dodgerblue;
        opacity: 0.9;
        z-index: 0;
    }
`
export const GatchaCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;  // 가상 요소를 위한 position 설정

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("src/assets/background/rader_line.png");
        background-size: 125% auto;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.3;
        z-index: 0;
        filter: grayscale(100%);
    }
`
export const GatchaCardLeftWrapper = styled.div`
    width: 40%;
    margin-left: 3%;
    height: 90%;
    z-index: 1;
    border: 2px solid lightgray;
`
export const GatchaCardLeftImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const GatchaCardRightWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3%;
`
export const GatchaCardRightTitle = styled.p`
    width: 100%;
    height: 30%;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
    color: black;
    text-align: center;
    z-index: 1;
`
export const GatchaCardRightButton = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    border: 2px solid darkgreen;
    border-radius: 10px;
    z-index: 1;
    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    
`
export const GatchaCardRightButtonIcon = styled.span`
    
`
export const GatchaCardRightButtonText = styled.span<GatchaCardRightButtonTextProps>`
    font-size: 1.1rem;
    font-weight: bold;
    margin-inline: 5%;
    color: ${ props => props.isEnough ? "black" : "darkred" }
`
interface GatchaCardRightButtonTextProps {
    isEnough: boolean
}
// 가챠 화면 모달
export const GatchaModalBackground = styled.div<GatchaModalBackgroundProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${ props => props.isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
interface GatchaModalBackgroundProps {
    isVisible: boolean;
}
export const GatchaModalContainer = styled.div`
    width: 80%;
    height: 70%;
    border: 1px solid white;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const GatchaModalItemContainer = styled.div<GatchaModalItemContainerProps>`
    width: 90%;
    height: 80%;
    display: ${ props => props.isVisible ? "grid" : "none" };
    grid-template-columns: repeat(5, 1fr);  
    grid-template-rows: repeat(2, 1fr);     
    gap: 3%;                              
    justify-content: center;
    align-items: center;
`
export const GatchaModalItemSingleContainer = styled.div<GatchaModalItemContainerProps>`
    width: 90%;
    height: 80%;
    justify-content: center;
    align-items: center;
    display: ${ props => props.isVisible ? "flex" : "none" };
`
interface GatchaModalItemContainerProps {
    isVisible: boolean;
}
export const GatchaModalButtonContainer = styled.div`
    width: 90%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const GatchaModalItemCard = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const GatchaModalItemCardImage = styled.img`
    width: auto;
    height: 100%;
`
export const GatchaModalItemSingleCard = styled.div`
    width: 30%;
    height: 60%;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const GatchaModalButton = styled.div`
    width: 10%;
    height: 50%;
    border: 1px solid gray;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 3%;
    font-weight: bold;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

// 하단 버튼 및 컨텍스트 컨테이너
export const BottomContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: whitesmoke;
    gap: 5%;
    border-top: 3px solid gray;
`
//      컨텍스트 컨테이터
export const ContextContainer = styled.div`
    width: 95%;
    height: 50%;
    border: 3px solid gray;
    border-radius: 15px;
`
//      버튼 컨테이너
export const ButtonContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: right;
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
