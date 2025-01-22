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
    LeftContentSkillActivation,
    LeftContentSkillType,
    LeftContainerSkillInformationName,
    LeftContainerSkillInformationDescription,
    LeftContainerSkillInformationTypeHighlight,
    LeftContainerSkillInformationHighlightText,
    LeftContainerSkillInformationSpecialStatus,
    LeftContainerEquipmentLeftWrapper,
    LeftContainerEquipmentRightWrapper,
    LeftContainerEquipmentNormalItemCard,
    LeftContainerEquipmentSpecialItemCard,
    LeftContainerEquipmentHoldItemCard,
    LeftContainerEquipmentRightItemInformationCard,
    LeftContainerEquipmentRightItemInformationName,
    LeftContainerEquipmentRightItemInformationDescriptionWrapper,
    LeftContainerEquipmentRightItemInformationDescriptionOption,
    LeftContainerEquipmentRightItemInformationDescriptionValue,
    LeftContainerEquipmentRightItemInformationDescriptionText,
    LeftContainerEquipmentRightItemInformationButtonWrapper,
    LeftContainerEquipmentRightItemInformationButton,
    LeftContainerEquipmentRightItemListWrapper,
    LeftContainerEquipmentRightItemListCard,
    LeftContainerEquipmentRightItemIcon,
    LeftContainerEquipmentRightItemName,
    LeftContainerEquipmentRightItemImage, LeftContainerEquipmentRightSpecialItemInformationWrapper,
} from '@/style/promote/MyPokemonPage_Style'
import '@/style/sprite/pokesprite-inventory.css'

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
                        <LeftContentEquipmentContainer isCurrent={true}>
                            <LeftContainerEquipmentLeftWrapper>
                                <LeftContainerEquipmentNormalItemCard>

                                </LeftContainerEquipmentNormalItemCard>
                                <LeftContainerEquipmentNormalItemCard>

                                </LeftContainerEquipmentNormalItemCard>
                                <LeftContainerEquipmentNormalItemCard>

                                </LeftContainerEquipmentNormalItemCard>
                                <LeftContainerEquipmentNormalItemCard>

                                </LeftContainerEquipmentNormalItemCard>
                                <LeftContainerEquipmentNormalItemCard>

                                </LeftContainerEquipmentNormalItemCard>
                                <LeftContainerEquipmentSpecialItemCard>

                                </LeftContainerEquipmentSpecialItemCard>
                                <LeftContainerEquipmentHoldItemCard>

                                </LeftContainerEquipmentHoldItemCard>
                            </LeftContainerEquipmentLeftWrapper>
                            <LeftContainerEquipmentRightWrapper>
                                <LeftContainerEquipmentRightItemListWrapper>
                                    <LeftContainerEquipmentRightItemListCard isSelected={true}>
                                        <LeftContainerEquipmentRightItemIcon>
                                            <LeftContainerEquipmentRightItemImage className="pokesprite ev-item power-anklet" />
                                        </LeftContainerEquipmentRightItemIcon>
                                        <LeftContainerEquipmentRightItemName> 파워 앵클릿 </LeftContainerEquipmentRightItemName>
                                    </LeftContainerEquipmentRightItemListCard>
                                    <LeftContainerEquipmentRightItemListCard isSelected={false}>
                                        <LeftContainerEquipmentRightItemIcon>
                                            <LeftContainerEquipmentRightItemImage className="pokesprite ev-item power-band" />
                                        </LeftContainerEquipmentRightItemIcon>
                                        <LeftContainerEquipmentRightItemName> 파워 밴드 </LeftContainerEquipmentRightItemName>
                                    </LeftContainerEquipmentRightItemListCard>
                                    <LeftContainerEquipmentRightItemListCard isSelected={false}>
                                        <LeftContainerEquipmentRightItemIcon>
                                            <LeftContainerEquipmentRightItemImage className="pokesprite ev-item power-weight" />
                                        </LeftContainerEquipmentRightItemIcon>
                                        <LeftContainerEquipmentRightItemName> 파워 웨이트 </LeftContainerEquipmentRightItemName>
                                    </LeftContainerEquipmentRightItemListCard>
                                </LeftContainerEquipmentRightItemListWrapper>
                                <LeftContainerEquipmentRightItemInformationCard>
                                    <LeftContainerEquipmentRightItemInformationName> 파워앵클릿 </LeftContainerEquipmentRightItemInformationName>
                                    <LeftContainerEquipmentRightItemInformationDescriptionWrapper isCurrent={true}>
                                        <LeftContainerEquipmentRightItemInformationDescriptionOption> 특수 공격력 </LeftContainerEquipmentRightItemInformationDescriptionOption>
                                        <LeftContainerEquipmentRightItemInformationDescriptionValue> 30 </LeftContainerEquipmentRightItemInformationDescriptionValue>
                                    </LeftContainerEquipmentRightItemInformationDescriptionWrapper>
                                    <LeftContainerEquipmentRightItemInformationDescriptionWrapper isCurrent={true}>
                                        <LeftContainerEquipmentRightItemInformationDescriptionOption> 속도 </LeftContainerEquipmentRightItemInformationDescriptionOption>
                                        <LeftContainerEquipmentRightItemInformationDescriptionValue> 15 </LeftContainerEquipmentRightItemInformationDescriptionValue>
                                    </LeftContainerEquipmentRightItemInformationDescriptionWrapper>
                                    <LeftContainerEquipmentRightSpecialItemInformationWrapper isCurrent={false}>
                                        초염몽이 사용하는 기술들이 데미지를 10% 상승시킨다.
                                    </LeftContainerEquipmentRightSpecialItemInformationWrapper>
                                    <LeftContainerEquipmentRightItemInformationDescriptionText>
                                        착용자의 특수 공격력을 상승시키는 아이템.
                                    </LeftContainerEquipmentRightItemInformationDescriptionText>
                                    <LeftContainerEquipmentRightItemInformationButtonWrapper>
                                        <LeftContainerEquipmentRightItemInformationButton> 해제 </LeftContainerEquipmentRightItemInformationButton>
                                        <LeftContainerEquipmentRightItemInformationButton> 변경 </LeftContainerEquipmentRightItemInformationButton>
                                    </LeftContainerEquipmentRightItemInformationButtonWrapper>
                                </LeftContainerEquipmentRightItemInformationCard>
                            </LeftContainerEquipmentRightWrapper>
                        </LeftContentEquipmentContainer>
                        { /* 기술 화면 */ }
                        <LeftContentSkillContainer isCurrent={false}>
                            <LeftContentSkillListWrapper>
                                <LeftContentSkillCard>
                                    <LeftContentSkillName> 불꽃펀치 </LeftContentSkillName>
                                    <LeftContentSkillActivation> 액티브 </LeftContentSkillActivation>
                                    <LeftContentSkillType pokemonType="fire" />
                                </LeftContentSkillCard>
                                <LeftContentSkillCard>
                                    <LeftContentSkillName> 냉동펀치 </LeftContentSkillName>
                                    <LeftContentSkillActivation> 패시브 </LeftContentSkillActivation>
                                    <LeftContentSkillType pokemonType="ice" />
                                </LeftContentSkillCard>
                                <LeftContentSkillCard>
                                    <LeftContentSkillName> 번개펀치 </LeftContentSkillName>
                                    <LeftContentSkillActivation> 액티브 </LeftContentSkillActivation>
                                    <LeftContentSkillType pokemonType="electric" />
                                </LeftContentSkillCard>
                            </LeftContentSkillListWrapper>
                            <LeftContentSkillInformationWrapper>
                                <LeftContainerSkillInformationName> 불꽃펀치 </LeftContainerSkillInformationName>
                                <LeftContainerSkillInformationDescription>
                                    적에게 <LeftContainerSkillInformationTypeHighlight> 불꽃 </LeftContainerSkillInformationTypeHighlight> 타입의
                                    <LeftContainerSkillInformationHighlightText> 물리 </LeftContainerSkillInformationHighlightText> 피해를 준다.
                                    n% 확률로 적에게 n턴간 <LeftContainerSkillInformationSpecialStatus> 화상 </LeftContainerSkillInformationSpecialStatus> 을 부여한다.
                                </LeftContainerSkillInformationDescription>
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