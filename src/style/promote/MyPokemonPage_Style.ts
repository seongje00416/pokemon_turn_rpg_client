import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-70deg, white 60%, red 61% 65%, orangered 66%);
`
export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
`
export const ButtonContainer = styled.div`
    height: 10%;
    width: 100%;
    background-color: whitesmoke;
`
// 좌측 상세 정보 컨테이너
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;
`
export const LeftCategoryWrapper = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba( 147, 147, 147, 0.3 );
    margin-top: 2%;
    gap: 5%;
`
export const LeftCategoryItem = styled.div`
    width: 20%;
    text-align: center;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    
    &:hover {
        cursor: pointer;
        border-color: black;
        color: black;
    }
`
export const LeftContentWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LeftContentInformationContainer = styled.div`
    width: 100%;
    height: 95%;
    background: linear-gradient( 90deg, lightgray 5%, white 5% );
    display: ${ props => props.isCurrent ? "flex" : "none" };
    flex-direction: column;
`
export const LeftContainerInformationStatContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1%;
`
export const InformationStatWrapper = styled.div`
    display: flex;
    width: 80%;
    height: 10%;
    justify-content: center;
    align-items: center;
`
export const InformationStatName = styled.p`
    margin: 0;
    width: 25%;
    border-right: 1px solid lightgray;
    margin-right: 5%;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
`
export const InformationStatValue = styled.p`
    margin: 0;
    width: 70%;
`
export const InformationStatValueDifference = styled.span`
    color: green;
`
export const InformationStatValueResult = styled.span`
    color: lightgray;
    margin-left: 10%;
`

export const LeftContainerInformationDetailContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    background: linear-gradient( 90deg, lightgray 40%, white 40% );
    border-top: 3px solid lightgray;
    flex-direction: column;
`
export const LeftContainerInformationDetailWrapper = styled.div`
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LeftContainerInformationDetailName = styled.div`
    width: 40%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
`
export const LeftContainerInformationDetailValue = styled.div`
    width: 60%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`
export const LeftContentEquipmentContainer = styled.div`

`
export const LeftContentSkillContainer = styled.div`

`

// 우측 포켓몬 일러스트 컨테이너
export const RightContainer = styled.div`
    width: 55%;
    height: 100%;
`