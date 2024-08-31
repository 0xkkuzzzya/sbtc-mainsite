import styled from 'styled-components';
import SunBTCLogo from './assets/SunBTCLogo.webp';
import TelegramIcon from './assets/TgBlack.webp';
import BBLogo from './assets/SBTCBitcoin.webp'
import Scales from './assets/Scales.webp'
import Documentation from './assets/Documentation.webp'
import Mining from './assets/Mining.webp'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

const NameBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`

const SunBTCNameBlock = styled.img`
    width: 250px;
    height: 250px;
    @media (max-width: 800px) {
        width: 200px;
        height: 200px;
    }
`

const FirstBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    text-align: center;
`

const FirstBlockText = styled.a`
    font-size: 45px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 30px;
    }
`

const FirstBlockDescription = styled.a`
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 1.2rem;
    @media (max-width: 800px) {
        font-size: 20px;
    }
`

const GradientText = styled.a`
    background: linear-gradient(90deg, #e87817 0%, #e60f09 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    gap: 20px;
`

const GradientButton = styled.button`
    width: 170px;
    height: 45px;
    background: linear-gradient(90deg, #e87817 0%, #e60f09 100%);
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    border-radius: 15px;
    @media (max-width: 800px) {
        width: 150px;
        height: 40px;
        font-size: 15px;
    }
`

const WhiteButton = styled.button`
    width: 170px;
    height: 45px;
    background: #fff;
    color: #000;
    font-size: 17px;
    font-weight: 500;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        width: 150px;
        height: 40px;
        font-size: 15px;
    }
`

const TelegramLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`

const SecondBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const BlockLogo = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 800px) {
        width: 150px;
        height: 150px;
    }
`

const SecondBlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 23px;
    }
`

const SecondBlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    margin-top: 20px;
    line-height: 1.5rem;
    @media (max-width: 800px) {
        font-size: 18px;
    }
`

const ThirdBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    margin-top: 70px;
`

const ThirdBlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 23px;
    }
`

const ThirdBlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    margin-top: 20px;
    line-height: 1.5rem;
    @media (max-width: 800px) {
        font-size: 18px;
    }
`

const FourthBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 70px;
`

const FourthBlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 23px;
    }
`

const FourthBlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    margin-top: 20px;
    line-height: 1.5rem;
    @media (max-width: 800px) {
        font-size: 18px;
    }
`

const FifthBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 70px;
    text-align: right;
`

const FifthBlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 23px;
    }
`

const FifthBlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    margin-top: 20px;
    line-height: 1.5rem;
    @media (max-width: 800px) {
        font-size: 18px;
    }
`


export const MainContainer = () => {
    return (
        <Container>
            <div style={{height: '100vh'}}>
                <NameBlock>
                    <SunBTCNameBlock src={SunBTCLogo} />
                </NameBlock>
                <FirstBlock>
                    <FirstBlockText>
                        <div style={{ marginBottom: '20px' }}>
                            SunBTC: Bitcoin, built on <GradientText>TRON</GradientText>
                        </div>
                        <FirstBlockDescription>
                            SunBTC is a token on the TRON that emulates the economic model of Bitcoin,
                            incorporating features such as NFT GPUs mining, virtual electricity consumption, and periodic halvings.
                        </FirstBlockDescription>
                    </FirstBlockText>
                    <ButtonBlock>
                        <GradientButton>Open App</GradientButton>
                        <WhiteButton> <TelegramLogo src={TelegramIcon} /> Telegram</WhiteButton>
                    </ButtonBlock>
                </FirstBlock>
            </div>

            <SecondBlock>
                <BlockLogo src={BBLogo} />
                <SecondBlockText>21M $SunBTC. Mining. Electricity. Halvings.</SecondBlockText>
                <SecondBlockDescription>
                    Miners mine SunBTC with their virtual NFT GPUs, pay for virtual electricity with TRX. 
                    TRX earned from electricity go to incentives for LP farmers of the SunBTC / TRX pool on SunSwap.
                </SecondBlockDescription>
            </SecondBlock>

            <ThirdBlock>
                <BlockLogo src={Scales} />
                <ThirdBlockText>Not your average TRON memecoin.</ThirdBlockText>
                <ThirdBlockDescription>$SUNBTC is the most fair token on TRON blockchain. No team allocation, no insiders, no whales.</ThirdBlockDescription>
            </ThirdBlock>

            <FourthBlock>
                <BlockLogo src={Documentation} />
                <FourthBlockText><GradientText>100%</GradientText> based on TRON smart-contracts.</FourthBlockText>
                <FourthBlockDescription>
                    SunBTC protocol is a fair-mining smart-contracts based on TRON. $SUNBTC is the first fully programmable community token on TRON.
                </FourthBlockDescription>
            </FourthBlock>

            <FifthBlock>
                <BlockLogo src={Mining} />
                <FifthBlockText>Start <GradientText>mining</GradientText> $SUNBTC.</FifthBlockText>
                <FifthBlockDescription>
                    Get NFT GPUs. Open SunBit App. Pay for virtual electricity. Start mining TRON's version of Bitcoin.
                </FifthBlockDescription>
            </FifthBlock>
        </Container>
    )
} 