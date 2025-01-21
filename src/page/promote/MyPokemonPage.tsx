import {
    MainContainer,
    LeftContainer,
    RightContainer,
    LeftCategoryWrapper,
    LeftCategoryItem,
    ContentContainer,
    ButtonContainer,
    LeftContentWrapper,
    LeftContentInformationContainer,
    LeftContainerInformationStatContainer,
    LeftContainerInformationDetailContainer,
    InformationStatWrapper,
    InformationStatName,
    InformationStatValue,
    InformationStatValueDifference,
    InformationStatValueResult,
    LeftContainerInformationDetailWrapper,
    LeftContainerInformationDetailName,
    LeftContainerInformationDetailValue,
    LeftContentEquipmentContainer,
    LeftContentSkillContainer,
    LeftContentSkillListWrapper,
    LeftContentSkillCard,
    LeftContentSkillInformationWrapper,
    LeftContentSkillName,
    LeftContentSkillActivation, LeftContentSkillType,
} from '@/style/promote/MyPokemonPage_Style'

export const MyPokemonPage = () => {
    return (
        <MainContainer>
            <ContentContainer>
                <LeftContainer>
                    <LeftCategoryWrapper>
                        <LeftCategoryItem> 정보 </LeftCategoryItem>
                        <LeftCategoryItem> 장비 </LeftCategoryItem>
                        <LeftCategoryItem> 기술 </LeftCategoryItem>
                    </LeftCategoryWrapper>
                    <LeftContentWrapper>
                        { /* 정보 화면 */ }
                        <LeftContentInformationContainer isCurrent={false}>
                            <LeftContainerInformationStatContainer>
                                <InformationStatWrapper>
                                    <InformationStatName> HP </InformationStatName>
                                    <InformationStatValue>
                                        190
                                        <InformationStatValueResult> 150 </InformationStatValueResult>
                                        <InformationStatValueDifference> ( +40 ) </InformationStatValueDifference>
                                    </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 물리 공격력 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 특수 공격력 </InformationStatName>
                                    <InformationStatValue> 50 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 물리 방어력 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 특수 방어력 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 속도 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 명중률 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                                <InformationStatWrapper>
                                    <InformationStatName> 회피율 </InformationStatName>
                                    <InformationStatValue> 90 </InformationStatValue>
                                </InformationStatWrapper>
                            </LeftContainerInformationStatContainer>
                            <LeftContainerInformationDetailContainer>
                                <LeftContainerInformationDetailWrapper>
                                    <LeftContainerInformationDetailName> 이름 </LeftContainerInformationDetailName>
                                    <LeftContainerInformationDetailValue> 초염몽 </LeftContainerInformationDetailValue>
                                </LeftContainerInformationDetailWrapper>
                                <LeftContainerInformationDetailWrapper>
                                    <LeftContainerInformationDetailName> 레벨 </LeftContainerInformationDetailName>
                                    <LeftContainerInformationDetailValue> 60 </LeftContainerInformationDetailValue>
                                </LeftContainerInformationDetailWrapper>
                                <LeftContainerInformationDetailWrapper>
                                    <LeftContainerInformationDetailName> 타입 </LeftContainerInformationDetailName>
                                    <LeftContainerInformationDetailValue> 불꽃 </LeftContainerInformationDetailValue>
                                </LeftContainerInformationDetailWrapper><LeftContainerInformationDetailWrapper>
                                <LeftContainerInformationDetailName> 포지션 </LeftContainerInformationDetailName>
                                <LeftContainerInformationDetailValue> 스위퍼 </LeftContainerInformationDetailValue>
                            </LeftContainerInformationDetailWrapper>

                            </LeftContainerInformationDetailContainer>
                        </LeftContentInformationContainer>
                        { /* 장비 화면 */ }
                        <LeftContentEquipmentContainer isCurrent={false}>

                        </LeftContentEquipmentContainer>
                        { /* 기술 화면 */ }
                        <LeftContentSkillContainer isCurrent={true}>
                            <LeftContentSkillListWrapper>
                                <LeftContentSkillCard> s </LeftContentSkillCard>
                                <LeftContentSkillCard> s </LeftContentSkillCard>
                                <LeftContentSkillCard> s </LeftContentSkillCard>
                                <LeftContentSkillCard>
                                    <LeftContentSkillName> 불꽃펀치 </LeftContentSkillName>
                                    <LeftContentSkillActivation> 액티브 </LeftContentSkillActivation>
                                    <LeftContentSkillType> </LeftContentSkillType>
                                </LeftContentSkillCard>
                            </LeftContentSkillListWrapper>
                            <LeftContentSkillInformationWrapper>

                            </LeftContentSkillInformationWrapper>
                        </LeftContentSkillContainer>
                    </LeftContentWrapper>
                </LeftContainer>
                <RightContainer>

                </RightContainer>
            </ContentContainer>
            <ButtonContainer>

            </ButtonContainer>
        </MainContainer>
    )
}

export default MyPokemonPage;