import {
    BottomButton,
    BottomButtonIcon,
    BottomButtonImage,
    BottomButtonName,
    BottomContainer,
    MainContainer,
    MiddleContainer,
    TopContainer,
    TopDisplayWrapper,
    TopMenuButtonWrapper,
    TopMoneyDisplayCard,
    TopMoneyDisplayCardIcon,
    TopMoneyDisplayCardIconImage,
    TopMoneyDisplayCardValue,
    TopProfileCard,
    TopProfileImageIcon,
    TopProfileImagePart,
    TopProfileInfoPart,
    TopProfileNickName,
    TopProfileUserLevel
} from "@/style/MainPage_Style"
import '@/style/sprite/pokesprite-inventory.css'

import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const navigate = useNavigate()

    const movePage = ( link:string ) => { navigate(link); }

    return (
        <MainContainer>
            <TopContainer>
                <TopProfileCard>
                    <TopProfileImagePart>
                        <TopProfileImageIcon src="src/assets/profile/profile_jirachi.png" />
                    </TopProfileImagePart>
                    <TopProfileInfoPart>
                        <TopProfileNickName> SilverCrater </TopProfileNickName>
                        <TopProfileUserLevel>
                            d
                        </TopProfileUserLevel>
                    </TopProfileInfoPart>
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
                <BottomButton onClick={ () => movePage("/")}>
                    <BottomButtonIcon>
                        <BottomButtonImage src="src/assets/icon/main_shop.jpg"/>
                    </BottomButtonIcon>
                    <BottomButtonName> 상점 </BottomButtonName>
                </BottomButton>
                <BottomButton onClick={ () => movePage("/myPokemon")}>
                    <BottomButtonIcon>
                        <BottomButtonImage src="src/assets/icon/main_pokemon.png"/>
                    </BottomButtonIcon>
                    <BottomButtonName> 포켓몬 </BottomButtonName>
                </BottomButton>
                <BottomButton onClick={ () => movePage("/selectPokemon")}>
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