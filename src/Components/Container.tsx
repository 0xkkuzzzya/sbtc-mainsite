import styled from 'styled-components';
import SunBTCLogo from '../assets/SunBTCLogo.webp';
import TelegramIcon from '../assets/TgBlack.webp';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.5rem;
    @media (max-width: 800px) {
        font-size: 35px;
    }
`

const FirstBlockDescription = styled.a`
    max-width: 600px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.5rem;
    margin-top: 10px;
    @media (max-width: 800px) {
        font-size: 14px;
        line-height: 1.5rem;
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
    height: 50px;
    background: linear-gradient(90deg, #e87817 0%, #e60f09 100%);
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    border-radius: 15px;
    @media (max-width: 800px) {
        width: 150px;
        height: 45px;
        font-size: 15px;
    }
`

const WhiteButton = styled.button`
    width: 170px;
    height: 50px;
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
        height: 45px;
        font-size: 15px;
    }
`

const TelegramLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: -2px;
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
                    </FirstBlockText>
                    <FirstBlockDescription>
                            SunBTC is a token on the TRON that emulates the economic model of Bitcoin,
                            incorporating features such as NFT GPUs mining, virtual electricity consumption, and periodic halvings.
                    </FirstBlockDescription>
                    <ButtonBlock>
                        <GradientButton>Open App</GradientButton>
                        <WhiteButton> <TelegramLogo src={TelegramIcon} /> Channel</WhiteButton>
                    </ButtonBlock>
                </FirstBlock>
            </div>
        </Container>
    )
} 