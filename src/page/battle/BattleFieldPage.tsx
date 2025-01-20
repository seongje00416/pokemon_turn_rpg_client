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
    MoveGageCard, MoveGageLine
} from '@/style/battle/BattleFieldPage_Style'
import '@/style/sprite/pokesprite-pokemon-gen8.css'

export const BattleFieldPage = () => {
    return (
        <MainContainer>
            <BattleFieldGradeContainer>

            </BattleFieldGradeContainer>
            <BattleInfoContainer>

            </BattleInfoContainer>
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
            <MiddleContainer>

            </MiddleContainer>
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
            <ContextContainer>
                <ContextText>
                    효과가 굉장했다!
                </ContextText>
            </ContextContainer>
        </MainContainer>
    )
}

export default BattleFieldPage;