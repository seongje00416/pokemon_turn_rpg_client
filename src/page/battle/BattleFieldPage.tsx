import {
    BattleFieldGradeContainer,
    BattleInfoContainer,
    MainContainer,
    MoveGageContainer,
    MiddleContainer,
    SkillContainer,
    ContextContainer,
    PokemonInfoWrapper,
    SkillWrapper,
    SkillCard,
    SkillCardTypeText,
    SkillCardNameText,
    ContextText,
    PokemonInfoCard,
    MoveGageCard,
    MoveGageLine,
    LeftTeamContainer,
    RightTeamContainer,
    TeamPokemonCard,
    TeamPokemonInfoWrapper,
    TeamPokemonImage,
    TeamPokemonInfoStatusWrapper,
    TeamPokemonInfoStatusLabel,
    TeamPokemonInfoName,
    TeamPokemonInfoHPGage,
    TeamPokemonInfoHP, TeamPokemonInfoHPText
} from '@/style/battle/BattleFieldPage_Style'
import '@/style/sprite/pokesprite-pokemon-gen8.css'

export const BattleFieldPage = () => {
    return (
        <MainContainer>
            { /* 최상단 등급 컨테이너 */ }
            <BattleFieldGradeContainer>

            </BattleFieldGradeContainer>
            { /* 배틀 정보 컨테이너 */ }
            <BattleInfoContainer>
                
            </BattleInfoContainer>
            { /* 행동 게이지 컨테이너 */ }
            <MoveGageContainer>
                <MoveGageLine>
                    <MoveGageCard className="pokesprite pokemon infernape" moveGage={0} isOpposite={true} />
                    <MoveGageCard className="pokesprite pokemon mudkip" moveGage={15} isOpposite={false} />
                    <MoveGageCard className="pokesprite pokemon pikachu" moveGage={20} isOpposite={false} />
                    <MoveGageCard className="pokesprite pokemon dialga" moveGage={29} isOpposite={false} />
                    <MoveGageCard className="pokesprite pokemon mew" moveGage={40} isOpposite={true} />
                    <MoveGageCard className="pokesprite pokemon piplup" moveGage={50} isOpposite={false} />
                    <MoveGageCard className="pokesprite pokemon palkia" moveGage={66} isOpposite={true} />
                    <MoveGageCard className="pokesprite pokemon arceus" moveGage={90} isOpposite={false} />
                </MoveGageLine>
            </MoveGageContainer>
            { /* 중단 참여 포켓몬 컨테이너 */ }
            <MiddleContainer>
                <LeftTeamContainer>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> 초염몽 </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={40} />
                                <TeamPokemonInfoHPText> 150/150 </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src='src/assets/pokemon/초염몽_앞.gif' />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel> 얼음 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> 엠페르트 </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={12} />
                                <TeamPokemonInfoHPText> 150/150 </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src='src/assets/pokemon/엠페르트_앞.gif' />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel> 얼음 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel> 화상 </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> 메가니움 </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={95} />
                                <TeamPokemonInfoHPText> 150/150 </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src='src/assets/pokemon/메가니움_앞.gif' />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> 푸크린 </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={50} />
                                <TeamPokemonInfoHPText> 150/150 </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src='src/assets/pokemon/푸크린_앞.gif' />
                    </TeamPokemonCard>
                </LeftTeamContainer>
                <RightTeamContainer>

                </RightTeamContainer>
            </MiddleContainer>
            { /* 스킬 및 포켓몬 정보 컨테이너 */ }
            <SkillContainer>
                <PokemonInfoWrapper>
                    <PokemonInfoCard>
                        초염몽
                    </PokemonInfoCard>
                </PokemonInfoWrapper>
                <SkillWrapper>
                    <SkillCard pokemonType='fire' isActive='true'>
                        <SkillCardNameText> 불꽃펀치 </SkillCardNameText>
                        <SkillCardTypeText> 물리 </SkillCardTypeText>
                    </SkillCard>
                    <SkillCard pokemonType='water'>
                        <SkillCardNameText> 물의 맹세 </SkillCardNameText>
                        <SkillCardTypeText> 특성 </SkillCardTypeText>
                    </SkillCard>
                    <SkillCard pokemonType='grass' isActive='true'>
                        <SkillCardNameText> 하드플랜트 </SkillCardNameText>
                        <SkillCardTypeText> 특수 </SkillCardTypeText>
                    </SkillCard>
                </SkillWrapper>
            </SkillContainer>
            { /* 대화창 컨테이너 */ }
            <ContextContainer>
                <ContextText>
                    효과가 굉장했다!
                </ContextText>
            </ContextContainer>
        </MainContainer>
    )
}

export default BattleFieldPage;