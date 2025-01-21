import {
    BottomContainer,
    LeftContainer,
    LeftPokemonImage,
    MainContainer,
    MiddleContainer,
    RightContainer,
    RightPokemonCard,
    RightPokemonCardIcon,
    RightPokemonCardLevel, RightPokemonCardName,
    TopContainer, TopPokemonMiniInfoName, TopPokemonMiniInfoType, TopPokemonMiniInfoWrapper, TopTitle,
} from '@/style/promote/MyPokemonListPage_Style'
import '@/style/sprite/pokesprite-pokemon-gen8.css'

export const MyPokemonListPage = () => {
    return (
        <MainContainer>
            <TopContainer>
                <TopPokemonMiniInfoWrapper>
                    <TopPokemonMiniInfoName> 초염몽 </TopPokemonMiniInfoName>
                    <TopPokemonMiniInfoType color={"red"}> 불꽃 </TopPokemonMiniInfoType>
                </TopPokemonMiniInfoWrapper>
                <TopTitle> 보유 포켓몬 목록 </TopTitle>
            </TopContainer>
            <MiddleContainer>
                <LeftContainer>
                    <LeftPokemonImage src="src/assets/pokemon/초염몽_앞.gif" />
                </LeftContainer>
                <RightContainer>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard><RightPokemonCard>
                    <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>
                    <RightPokemonCard>
                        <RightPokemonCardIcon src="/src/assets/pokemon/초염몽_앞.gif" />
                        <RightPokemonCardLevel> Lv. 60 </RightPokemonCardLevel>
                        <RightPokemonCardName> 초염몽 </RightPokemonCardName>
                    </RightPokemonCard>


                </RightContainer>
            </MiddleContainer>
            <BottomContainer>
                dd
            </BottomContainer>
        </MainContainer>
    )
}

export default MyPokemonListPage;