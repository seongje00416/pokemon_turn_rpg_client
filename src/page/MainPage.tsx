import {
    BottomButton,
    BottomButtonIcon,
    BottomButtonImage,
    BottomButtonName,
    BottomContainer,
    MainContainer,
    MiddleContainer,
    TopContainer,
    TopDisplayWrapper, TopMenuButtonWrapper,
    TopMoneyDisplayCard,
    TopMoneyDisplayCardIcon, TopMoneyDisplayCardIconImage, TopMoneyDisplayCardValue,
    TopProfileCard
} from "@/style/MainPage_Style"
import '@/style/sprite/pokesprite-inventory.css'

export const MainPage = () => {
    return (
        <MainContainer>
            <TopContainer>
                <TopProfileCard>

                </TopProfileCard>
                <TopDisplayWrapper>
                    <TopMoneyDisplayCard>
                        <TopMoneyDisplayCardIcon>
                            <TopMoneyDisplayCardIconImage className='pokesprite ball poke' />
                        </TopMoneyDisplayCardIcon>
                        <TopMoneyDisplayCardValue> 100,000 </TopMoneyDisplayCardValue>
                    </TopMoneyDisplayCard>
                    <TopMoneyDisplayCard>
                        <TopMoneyDisplayCardIcon>
                            <TopMoneyDisplayCardIconImage className='pokesprite ball great' />
                        </TopMoneyDisplayCardIcon>
                        <TopMoneyDisplayCardValue> 300 </TopMoneyDisplayCardValue>
                    </TopMoneyDisplayCard>
                    <TopMoneyDisplayCard>
                        <TopMoneyDisplayCardIcon>
                            <TopMoneyDisplayCardIconImage className='pokesprite ball ultra' />
                        </TopMoneyDisplayCardIcon>
                        <TopMoneyDisplayCardValue> 50 </TopMoneyDisplayCardValue>
                    </TopMoneyDisplayCard>
                    <TopMoneyDisplayCard>
                        <TopMoneyDisplayCardIcon>
                            <TopMoneyDisplayCardIconImage className='pokesprite flute white' />
                        </TopMoneyDisplayCardIcon>
                        <TopMoneyDisplayCardValue> 100,000 </TopMoneyDisplayCardValue>
                    </TopMoneyDisplayCard>
                    <TopMoneyDisplayCard>
                        <TopMoneyDisplayCardIcon>
                            <TopMoneyDisplayCardIconImage className='pokesprite valuable-item relic-gold' />
                        </TopMoneyDisplayCardIcon>
                        <TopMoneyDisplayCardValue> 100,000 </TopMoneyDisplayCardValue>
                    </TopMoneyDisplayCard>
                </TopDisplayWrapper>
                <TopMenuButtonWrapper>

                </TopMenuButtonWrapper>
            </TopContainer>
            <MiddleContainer>

            </MiddleContainer>
            <BottomContainer>
                <BottomButton>
                    <BottomButtonIcon>
                        <BottomButtonImage src="src/assets/icon/main_shop.jpg"/>
                    </BottomButtonIcon>
                    <BottomButtonName> 상점 </BottomButtonName>
                </BottomButton>
                <BottomButton>
                    <BottomButtonIcon>
                        <BottomButtonImage src="src/assets/icon/main_pokemon.png"/>
                    </BottomButtonIcon>
                    <BottomButtonName> 포켓몬 </BottomButtonName>
                </BottomButton>
                <BottomButton>
                    <BottomButtonIcon>
                        <BottomButtonImage src="src/assets/icon/main_battle.png"/>
                    </BottomButtonIcon>
                    <BottomButtonName> 배틀 </BottomButtonName>
                </BottomButton>
            </BottomContainer>
        </MainContainer>
    )
}

export default MainPage;