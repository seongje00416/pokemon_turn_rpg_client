import styled from "styled-components";

interface CurrentProps {
    isCurrent?: boolean;
}
interface SelectedProps {
    isSelected?: boolean;
}
interface PokemonTypeProps {
    pokemonType: string;
}



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
    display: flex;
    align-items: center;
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
export const LeftContentInformationContainer = styled.div<CurrentProps>`
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
//      장비 컨테이너
export const LeftContentEquipmentContainer = styled.div<CurrentProps>`
    width: 100%;
    height: 100%;
    display: ${ props => props.isCurrent ? "flex" : "none" };
    justify-content: center;
    align-items: center;
`
export const LeftContainerEquipmentLeftWrapper = styled.div`
    width: 8%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1%;
`
export const LeftContainerEquipmentNormalItemCard = styled.div`
    width: 80%;
    height: 10%;
    border: 2px solid black;
    border-radius: 5px;
    background: rgba( 127, 127, 127, 0.7);
`
export const LeftContainerEquipmentSpecialItemCard = styled.div`
    width: 80%;
    height: 10%;
    border: 2px solid gray;
    border-radius: 5px;
    background: rgba( 127, 127, 127, 0.7);
`
export const LeftContainerEquipmentHoldItemCard = styled.div`
    width: 80%;
    height: 10%;
    border: 2px solid lightgray;
    margin-top: 50%;
    border-radius: 5px;
    background: rgba( 127, 127, 127, 0.7);
`
export const LeftContainerEquipmentRightWrapper = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const LeftContainerEquipmentRightItemListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 45%;
    justify-content: center;
    align-items: center;
    gap: 1%;
    overflow-y: auto;
`
export const LeftContainerEquipmentRightItemListCard = styled.div<SelectedProps>`
    width: 90%;
    height: auto;
    display: flex;
    border-radius: 5px;
    background-color: ${ props => props.isSelected ? "yellow" : "none" };
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const LeftContainerEquipmentRightItemIcon = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`
export const LeftContainerEquipmentRightItemImage = styled.span`

`
export const LeftContainerEquipmentRightItemName = styled.p`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-weight: bold;
    color: black;
    font-size: 18px;
`
export const LeftContainerEquipmentRightItemInformationCard = styled.div`
    width: 90%;
    height: 50%;
    background-color: white;
    border-radius: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
`
export const LeftContainerEquipmentRightItemInformationName = styled.p`
    margin: 3%;
    height: 10%;
    font-weight: bold;
    font-size: 1.2rem;
`
export const LeftContainerEquipmentRightItemInformationDescriptionWrapper = styled.div<CurrentProps>`
    display: ${ props => props.isCurrent ? "flex" : "none" };
    margin: 3%;
    height: 5%;
    width: 90%;
    font-size: 1rem;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LeftContainerEquipmentRightItemInformationDescriptionOption = styled.p`
    margin: 0;
`
export const LeftContainerEquipmentRightItemInformationDescriptionValue = styled.p`
    margin: 0;
`
export const LeftContainerEquipmentRightItemInformationDescriptionText = styled.p`
    height: 45%;
    width: 90%;
    border-top: 2px solid lightgray;
    text-align: center;
    margin: 1%;
    padding: 1%;
`
export const LeftContainerEquipmentRightSpecialItemInformationWrapper = styled.div<CurrentProps>`
    display: ${ props => props.isCurrent ? "flex" : "none" };
    margin: 3%;
    height: 5%;
    width: 90%;
    font-size: 1rem;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LeftContainerEquipmentRightItemInformationButtonWrapper = styled.p`
    margin: 3%;
    height: 10%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
`
export const LeftContainerEquipmentRightItemInformationButton = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding-inline: 3%;
    padding-block: 1%;
    font-weight: bold;
    
    &:hover {
        cursor: pointer;
        opacity: 70%;
    }
`

export const LeftContentSkillContainer = styled.div<CurrentProps>`
    width: 100%;
    height: 100%;
    display: ${ props => props.isCurrent ? "flex" : "none" };
    flex-direction: column;
    align-items: center;
`
export const LeftContentSkillListWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3%;
`
export const LeftContentSkillCard = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 10%;
    border-radius: 15px;
    background-color: white;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`
export const LeftContentSkillName = styled.div`
    width: 70%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`
export const LeftContentSkillType = styled.div<PokemonTypeProps>`
    width: 15%;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${ props => {
        switch( props.pokemonType ){
            case "fire":
                return 'darkred'
            case "ice":
                return 'skyblue'
            case "electric":
                return 'yellow'
            default:
                return 'lightgray'
        }
    }}
`
export const LeftContentSkillActivation = styled.div`
    width: 15%;
    font-weight: bold;
`
export const LeftContentSkillInformationWrapper = styled.div`
    width: 95%;
    height: 40%;
    background-color: white;
    border: 3px solid gray;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
`
export const LeftContainerSkillInformationName = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 3%;
`
export const LeftContainerSkillInformationDescription = styled.p`
    font-size: 1.1rem;
    margin-inline: 3%;
`
export const LeftContainerSkillInformationSpecialStatus = styled.span`
    font-weight: bold;
    color: red;
`
export const LeftContainerSkillInformationHighlightText = styled.span`
    font-weight: bold;
`
export const LeftContainerSkillInformationTypeHighlight = styled.span`
    font-weight: bold;
    color: darkred;
`


// 우측 포켓몬 일러스트 컨테이너
export const RightContainer = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const RightPokemonNameWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: right;
    align-items: center;
    background: linear-gradient(-70deg, black 85%, rgba( 0, 0, 0, 0 ) 90%);
    gap: 5%;
`
export const RightPokemonName = styled.p`
    width: 55%;
    font-weight: bold;
    font-size: 24px;
    color: white;
`
export const RightPokemonImage = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightPokemonImageIcon = styled.img`
    width: 50%;
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