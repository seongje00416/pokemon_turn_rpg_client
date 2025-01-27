import {
    BackButton,
    BottomContainer,
    ButtonContainer,
    ContextContainer,
    GatchaCard,
    GatchaCardLeftImage,
    GatchaCardLeftWrapper,
    GatchaCardRightButton,
    GatchaCardRightButtonIcon,
    GatchaCardRightButtonText,
    GatchaCardRightTitle,
    GatchaCardRightWrapper,
    GatchaCardWrapper,
    GatchaListContainer,
    GatchaListSideWrapper,
    GatchaModalBackground, GatchaModalButton,
    GatchaModalButtonContainer,
    GatchaModalContainer, GatchaModalItemCard,
    GatchaModalItemContainer, GatchaModalItemSingleCard, GatchaModalItemSingleContainer,
    MainContainer,
    MiddleContainer,
    TopContainer
} from '@/style/promote/PokemonGatchPage_Style'
import '@/style/sprite/pokesprite-inventory.css'
import { useNavigate } from "react-router-dom";

export const PokemonGatchaPage = () => {

    const navigate = useNavigate();

    return (
        <MainContainer>
            <TopContainer>

            </TopContainer>
            <MiddleContainer>
                { /* 뽑기시 나오는 Modal 창 */ }
                <GatchaModalBackground isVisible={true}>
                    <GatchaModalContainer>
                        <GatchaModalItemContainer isVisible={false} >
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                            <GatchaModalItemCard> ddd </GatchaModalItemCard>
                        </GatchaModalItemContainer>
                        <GatchaModalItemSingleContainer isVisible={true}>
                            <GatchaModalItemSingleCard> kkk </GatchaModalItemSingleCard>
                        </GatchaModalItemSingleContainer>
                        <GatchaModalButtonContainer>
                            <GatchaModalButton> 확인 </GatchaModalButton>
                        </GatchaModalButtonContainer>
                    </GatchaModalContainer>
                </GatchaModalBackground>
                <GatchaListContainer>
                    <GatchaListSideWrapper>
                        <GatchaCard>
                            <GatchaCardWrapper>
                                <GatchaCardLeftWrapper>
                                    <GatchaCardLeftImage src="src/assets/background/gatcha_continued.png" />
                                </GatchaCardLeftWrapper>
                                <GatchaCardRightWrapper>
                                    <GatchaCardRightTitle>
                                        상시 포획
                                    </GatchaCardRightTitle>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball poke' />
                                        <GatchaCardRightButtonText> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball poke' />
                                        <GatchaCardRightButtonText> 뽑기 x 10 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                </GatchaCardRightWrapper>
                            </GatchaCardWrapper>
                        </GatchaCard>
                        <GatchaCard>
                            <GatchaCardWrapper>
                                <GatchaCardLeftWrapper>
                                    <GatchaCardLeftImage src="src/assets/background/gatcha_legendary.png" />
                                </GatchaCardLeftWrapper>
                                <GatchaCardRightWrapper>
                                    <GatchaCardRightTitle>
                                        전설 포획
                                    </GatchaCardRightTitle>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball master' />
                                        <GatchaCardRightButtonText> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball master' />
                                        <GatchaCardRightButtonText> 뽑기 x 10 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                </GatchaCardRightWrapper>
                            </GatchaCardWrapper>
                        </GatchaCard>
                    </GatchaListSideWrapper>
                    <GatchaListSideWrapper>
                        <GatchaCard>
                            <GatchaCardWrapper>
                                <GatchaCardLeftWrapper>
                                    <GatchaCardLeftImage src="src/assets/pokemon/엠페르트_앞.gif" />
                                </GatchaCardLeftWrapper>
                                <GatchaCardRightWrapper>
                                    <GatchaCardRightTitle>
                                        한정 포획
                                    </GatchaCardRightTitle>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText> 뽑기 x 1</GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText> 뽑기 x 10 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                </GatchaCardRightWrapper>
                            </GatchaCardWrapper>
                        </GatchaCard>
                        <GatchaCard>
                            <GatchaCardWrapper>
                                <GatchaCardLeftWrapper>
                                    <GatchaCardLeftImage src="src/assets/pokemon/초염몽_앞.gif" />
                                </GatchaCardLeftWrapper>
                                <GatchaCardRightWrapper>
                                    <GatchaCardRightTitle>
                                        기간 포획
                                    </GatchaCardRightTitle>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText> 뽑기 x 10 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                </GatchaCardRightWrapper>
                            </GatchaCardWrapper>
                        </GatchaCard>
                    </GatchaListSideWrapper>
                </GatchaListContainer>
            </MiddleContainer>
            <BottomContainer>
                <ContextContainer>

                </ContextContainer>
                <ButtonContainer>
                    <BackButton onClick={ () => navigate( "/" ) }> 뒤로 </BackButton>
                </ButtonContainer>
            </BottomContainer>
        </MainContainer>
    )
}

export default PokemonGatchaPage;