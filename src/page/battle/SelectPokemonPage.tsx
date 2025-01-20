import {
    PokemonCardImage,
    MainContainer,
    MyTeamContainer,
    OppositeTeamContainer,
    PokemonSelectCard,
    PokemonSelectContainer,
    PokemonCardName,
    PokemonCardNameText,
    PokemonSelectWrapper,
    TeamUserWrapper,
    TeamEntryWrapper,
    TeamUserText,
    TeamEntryPokemonCard, TeamEntryPokemonCardImage, TeamEntryPokemonCardText
} from "@/style/battle/SelectPokemonPage_Style"

export const SelectPokemonPage = () => {
    return (
        <MainContainer>
            <OppositeTeamContainer>
                <TeamUserWrapper>
                    <TeamUserText> 적군 정보 </TeamUserText>
                </TeamUserWrapper>
                <TeamEntryWrapper>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/초염몽_앞.gif" />
                        <TeamEntryPokemonCardText> 초염몽 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/엠페르트_앞.gif" />
                        <TeamEntryPokemonCardText> 엠페르트 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/후딘_앞.gif" />
                        <TeamEntryPokemonCardText> 후딘 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/메가니움_앞.gif" />
                        <TeamEntryPokemonCardText> 메가니움 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                </TeamEntryWrapper>
            </OppositeTeamContainer>
            <MyTeamContainer>
                <TeamUserWrapper>
                    <TeamUserText> 아군 정보 </TeamUserText>
                </TeamUserWrapper>
                <TeamEntryWrapper>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/라이츄_앞.gif" />
                        <TeamEntryPokemonCardText> 라이츄 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/딱구리_앞.gif" />
                        <TeamEntryPokemonCardText> 딱구리 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/후딘_앞.gif" />
                        <TeamEntryPokemonCardText> 후딘 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                    <TeamEntryPokemonCard>
                        <TeamEntryPokemonCardImage src="src/assets/pokemon/푸크린_앞.gif" />
                        <TeamEntryPokemonCardText> 푸크린 Lv.50 </TeamEntryPokemonCardText>
                    </TeamEntryPokemonCard>
                </TeamEntryWrapper>
            </MyTeamContainer>
            <PokemonSelectContainer>
                <PokemonSelectWrapper>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/초염몽_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 초염몽 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/메가니움_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 메가니움 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/엠페르트_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 엠페르트 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/망나뇽_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 망나뇽 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/괴력몬_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 괴력몬 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/라이츄_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 라이츄 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/딱구리_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 딱구리 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/팬텀_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 팬텀 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/푸크린_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 푸크린 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                    <PokemonSelectCard>
                        <PokemonCardImage src="src/assets/pokemon/후딘_앞.gif" />
                        <PokemonCardName>
                            <PokemonCardNameText> 후딘 </PokemonCardNameText>
                        </PokemonCardName>
                    </PokemonSelectCard>
                </PokemonSelectWrapper>
            </PokemonSelectContainer>
        </MainContainer>
    )
}

export default SelectPokemonPage;