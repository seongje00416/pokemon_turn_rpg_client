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
    TeamPokemonInfoHP,
    TeamPokemonInfoHPText,
    PokemonInfoCardName,
} from '@/style/battle/BattleFieldPage_Style'
import '@/style/sprite/pokesprite-pokemon-gen8.css'
import '@/service/battle/BattleService'

import {
    PokemonDetail,
    Pokemon1,
    Pokemon2,
    Pokemon3,
    Pokemon4,
    Opposite1,
    Opposite2,
    Opposite3,
    Opposite4,
} from "@/service/data/PokemonBattleData.ts";
import { useState, useEffect } from 'react'
import {TurnController} from "@/service/battle/BattleService.tsx";

export const BattleFieldPage = ( ) => {

    // 배경 음악 설정
    const [ battleBGM ] = useState( new Audio('src/assets/bgm/battle_bgm.mp3') );

    useEffect(() => {
        battleBGM.volume = 0.1;
        battleBGM.loop = true; // 반복 재생 설정
        battleBGM.play().catch(error => {
            console.log("Audio playback failed:", error);
        });

        return () => {
            battleBGM.pause();
            battleBGM.currentTime = 0;
        };
    }, []);

    // 플레이어측 포켓몬
    const [ pokemon1, setPokemon1 ] = useState<PokemonDetail>( Pokemon1 );
    const [ pokemon2, setPokemon2 ] = useState<PokemonDetail>( Pokemon2 );
    const [ pokemon3, setPokemon3 ] = useState<PokemonDetail>( Pokemon3 );
    const [ pokemon4, setPokemon4 ] = useState<PokemonDetail>( Pokemon4 );
    // 상대측 포켓몬
    const [ opposite1, setOpposite1 ] = useState<PokemonDetail>( Opposite1 );
    const [ opposite2, setOpposite2 ] = useState<PokemonDetail>( Opposite2 );
    const [ opposite3, setOpposite3 ] = useState<PokemonDetail>( Opposite3 );
    const [ opposite4, setOpposite4 ] = useState<PokemonDetail>( Opposite4 );

    // 화면 표시 제어 함수
    const calculateRestHP = ( pokemon: PokemonDetail ) => { return pokemon.currentHP / pokemon.maxHP * 100; }
    const displayPokemonHPText = ( pokemon: PokemonDetail ) => { return pokemon.currentHP + "/" + pokemon.maxHP; }

    // 배틀 제어 함수
    const battleController = () => {
        // 행동 게이지를 통해 현재 턴을 잡은 포켓몬 확인
        const current:PokemonDetail = checkMoveGage();
        // 현재 턴을 잡은 포켓몬의 턴 진행
        TurnController( current );
        // 배틀 종료 여부 확인
        
        // 행동 게이지 조절
        
    }
    // 행동 게이지가 가장 낮은 포켓몬 확인
    const checkMoveGage = () => {
        return pokemon1;
    }

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
                    <MoveGageCard className={ `pokesprite pokemon ${pokemon1.englishName}` } moveGage={pokemon1.moveGage} isOpposite={false} />
                    <MoveGageCard className={ `pokesprite pokemon ${pokemon2.englishName}` } moveGage={pokemon2.moveGage} isOpposite={false} />
                    <MoveGageCard className={ `pokesprite pokemon ${pokemon3.englishName}` } moveGage={pokemon3.moveGage} isOpposite={false} />
                    <MoveGageCard className={ `pokesprite pokemon ${pokemon4.englishName}` } moveGage={pokemon4.moveGage} isOpposite={false} />
                    <MoveGageCard className={ `pokesprite pokemon ${opposite1.englishName}` } moveGage={opposite1.moveGage} isOpposite={true} />
                    <MoveGageCard className={ `pokesprite pokemon ${opposite2.englishName}` } moveGage={opposite2.moveGage} isOpposite={true} />
                    <MoveGageCard className={ `pokesprite pokemon ${opposite3.englishName}` } moveGage={opposite3.moveGage} isOpposite={true} />
                    <MoveGageCard className={ `pokesprite pokemon ${opposite4.englishName}` } moveGage={opposite4.moveGage} isOpposite={true} />
                </MoveGageLine>
            </MoveGageContainer>
            { /* 중단 참여 포켓몬 컨테이너 */ }
            <MiddleContainer>
                { /* 아군 포켓몬 목록 */}
                <LeftTeamContainer>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> {pokemon1.name} </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP( pokemon1 ) } />
                                <TeamPokemonInfoHPText> { displayPokemonHPText( pokemon1 ) } </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={ 'src/assets/pokemon/' + pokemon1.name + '_앞.gif' } />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel isPositive={true} isDeleteable={true}> 특수방어 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [2] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [3] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [1] </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { pokemon2.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP( pokemon2 ) } />
                                <TeamPokemonInfoHPText> { displayPokemonHPText( pokemon2 ) } </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={ 'src/assets/pokemon/' + pokemon2.name + '_앞.gif' } />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={true}> 얼음 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={true}> 화상 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={true} isDeleteable={false}> 물리공격 [2] </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { pokemon3.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP(pokemon3) } />
                                <TeamPokemonInfoHPText> { displayPokemonHPText(pokemon3) } </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={'src/assets/pokemon/' + pokemon3.name + '_앞.gif'} />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { pokemon4.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP(pokemon4)} />
                                <TeamPokemonInfoHPText> { displayPokemonHPText(pokemon4)} </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={'src/assets/pokemon/' + pokemon4.name + '_앞.gif'} />
                    </TeamPokemonCard>
                </LeftTeamContainer>
                { /* 적군 포켓몬 목록 */}
                <RightTeamContainer>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { opposite1.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP(opposite1)} />
                                <TeamPokemonInfoHPText> { displayPokemonHPText(opposite1)} </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={ 'src/assets/pokemon/' + opposite1.name + '_앞.gif'} />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel isPositive={true} isDeleteable={true}> 특수방어 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [2] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [3] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={false}> 화상 [1] </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { opposite2.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP(opposite2)} />
                                <TeamPokemonInfoHPText>  { displayPokemonHPText(opposite2)} </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={'src/assets/pokemon/' + opposite2.name + '_앞.gif'} />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={true}> 얼음 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={false} isDeleteable={true}> 화상 [1] </TeamPokemonInfoStatusLabel>
                                <TeamPokemonInfoStatusLabel isPositive={true} isDeleteable={false}> 물리공격 [2] </TeamPokemonInfoStatusLabel>
                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> {opposite3.name} </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={calculateRestHP(opposite3)} />
                                <TeamPokemonInfoHPText> {displayPokemonHPText(opposite3)} </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={ 'src/assets/pokemon/' + opposite3.name + '_앞.gif'} />
                    </TeamPokemonCard>
                    <TeamPokemonCard>
                        <TeamPokemonInfoWrapper>
                            <TeamPokemonInfoStatusWrapper>

                            </TeamPokemonInfoStatusWrapper>
                            <TeamPokemonInfoName> { opposite4.name } </TeamPokemonInfoName>
                            <TeamPokemonInfoHP>
                                <TeamPokemonInfoHPGage restHP={ calculateRestHP(opposite4)} />
                                <TeamPokemonInfoHPText> {displayPokemonHPText(opposite4)} </TeamPokemonInfoHPText>
                            </TeamPokemonInfoHP>
                        </TeamPokemonInfoWrapper>
                        <TeamPokemonImage src={ 'src/assets/pokemon/' + opposite4.name + '_앞.gif' } />
                    </TeamPokemonCard>
                </RightTeamContainer>
            </MiddleContainer>
            { /* 스킬 및 포켓몬 정보 컨테이너 */ }
            <SkillContainer>
                <PokemonInfoWrapper>
                    <PokemonInfoCard>
                        <PokemonInfoCardName id="guideContext"> 어떤 기술을 사용할까? </PokemonInfoCardName>
                    </PokemonInfoCard>
                </PokemonInfoWrapper>
                <SkillWrapper>
                    <SkillCard pokemonType='fire' isActive={true}>
                        <SkillCardNameText> 불꽃펀치 </SkillCardNameText>
                        <SkillCardTypeText> 물리 </SkillCardTypeText>
                    </SkillCard>
                    <SkillCard pokemonType={"water"} isActive={false}>
                        <SkillCardNameText> 물의 맹세 </SkillCardNameText>
                        <SkillCardTypeText> 특성 </SkillCardTypeText>
                    </SkillCard>
                    <SkillCard pokemonType='grass' isActive={true}>
                        <SkillCardNameText> 하드플랜트 </SkillCardNameText>
                        <SkillCardTypeText> 특수 </SkillCardTypeText>
                    </SkillCard>
                </SkillWrapper>
            </SkillContainer>
            { /* 대화창 컨테이너 */ }
            <ContextContainer>
                <ContextText id="battleContext">
                    효과가 굉장했다!
                </ContextText>
            </ContextContainer>
        </MainContainer>
    )
}

export default BattleFieldPage;