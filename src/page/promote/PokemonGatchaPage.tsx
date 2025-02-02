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
    MiddleContainer, MoneyCard, MoneyCardIcon,
    TopContainer
} from '@/style/promote/PokemonGatchPage_Style'
import '@/style/sprite/pokesprite-inventory.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export const PokemonGatchaPage = () => {

    const navigate = useNavigate();

    // 뽑기 모달 화면 조절 상태값
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isSingleGatcha, setSingleGatcha ] = useState(false);
    const [ isMultiGatcha, setMultiGatcha ] = useState(false);

    const gatchaModalController = ( isMulti: boolean ) => {
        setSingleGatcha( !isMulti );
        setMultiGatcha( isMulti );
        setIsModalOpen( true );
    }

    // 사용자 보유 재화 상태값
    const [ poke, setPoke ] = useState(0);
    const [ great, setGreat ] = useState(1);
    const [ ultra, setUltra ] = useState(100);

    const gatchaController = ( type:string, amount:number ) => {
        if ( !gatchaApplyChecker( type, amount ) ) return false;
        ballCountController( type, amount );
        if( amount === 10 ) gatchaModalController( true );
        else gatchaModalController( false );
    }

    const gatchaApplyChecker = ( type:string, amount: number ) => {
        switch( type ) {
            case "poke" :
                return poke >= amount;
            case "great" :
                return great >= amount;
            case "ultra" :
                return ultra >= amount;
            default:
                return;
        }
    }

    const ballCountController = ( type:string, amount: number ) => {
        switch ( type ) {
            case "poke" :
                setPoke( poke - amount );
                break;
            case "great" :
                setGreat( great - amount );
                break;
            case "ultra" :
                setUltra( ultra - amount );
                break;
            default:
                return;
        }
    }

    return (
        <MainContainer>
            <TopContainer>
                <MoneyCard>
                    <MoneyCardIcon className="pokesprite ball poke" /> { poke }
                </MoneyCard>
                <MoneyCard>
                    <MoneyCardIcon className="pokesprite ball great" /> { great }
                </MoneyCard>
                <MoneyCard>
                    <MoneyCardIcon className="pokesprite ball ultra" /> { ultra }
                </MoneyCard>
            </TopContainer>
            <MiddleContainer>
                { /* 뽑기시 나오는 Modal 창 */ }
                <GatchaModalBackground isVisible={ isModalOpen }>
                    <GatchaModalContainer>
                        <GatchaModalItemContainer isVisible={ isMultiGatcha } >
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
                        <GatchaModalItemSingleContainer isVisible={ isSingleGatcha }>
                            <GatchaModalItemSingleCard> kkk </GatchaModalItemSingleCard>
                        </GatchaModalItemSingleContainer>
                        <GatchaModalButtonContainer>
                            <GatchaModalButton onClick={ () => setIsModalOpen(false) }> 확인 </GatchaModalButton>
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
                                    <GatchaCardRightButton onClick={ () => gatchaController( "poke", 1 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball poke' />
                                        <GatchaCardRightButtonText isEnough={ poke > 0 }> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton onClick={ () => gatchaController( "poke", 10 ) } >
                                        <GatchaCardRightButtonIcon className='pokesprite ball poke' />
                                        <GatchaCardRightButtonText isEnough={ poke >= 10 }> 뽑기 x 10 </GatchaCardRightButtonText>
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
                                    <GatchaCardRightButton onClick={ () => gatchaController( "ultra", 1 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball ultra' />
                                        <GatchaCardRightButtonText isEnough={ ultra >= 1 }> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton onClick={ () => gatchaController( "ultra", 10 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball ultra' />
                                        <GatchaCardRightButtonText isEnough={ ultra >= 10 }> 뽑기 x 10 </GatchaCardRightButtonText>
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
                                    <GatchaCardRightButton onClick={ () => gatchaController( "great", 1 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText isEnough={ great >= 1 }> 뽑기 x 1</GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton onClick={ () => gatchaController( "great", 10 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText isEnough={ great >= 10 }> 뽑기 x 10 </GatchaCardRightButtonText>
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
                                    <GatchaCardRightButton onClick={ () => gatchaController( "great", 1 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText isEnough={ great >= 1 }> 뽑기 x 1 </GatchaCardRightButtonText>
                                    </GatchaCardRightButton>
                                    <GatchaCardRightButton onClick={ () => gatchaController( "great", 10 ) }>
                                        <GatchaCardRightButtonIcon className='pokesprite ball great' />
                                        <GatchaCardRightButtonText isEnough={ great >= 10 }> 뽑기 x 10 </GatchaCardRightButtonText>
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