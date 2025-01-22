import {
    BackButton,
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

import { useNavigate } from 'react-router-dom'

export const MyPokemonListPage = () => {

    const navigate = useNavigate();

    const movePokemonDetailPage = () => {
        navigate( '/myPokemon' )
    }

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
                    <RightPokemonCard onClick={ () => movePokemonDetailPage() }>
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
                <BackButton onClick={ () => navigate( '/' ) }> 뒤로 </BackButton>
            </BottomContainer>
        </MainContainer>
    )
}

export default MyPokemonListPage;