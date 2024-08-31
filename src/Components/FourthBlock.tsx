import styled from 'styled-components';
import Documentation from '../assets/Documentation.webp';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 70px;
`

const BlockLogo = styled.img`
    width: 150px;
    height: 130px;
    margin-bottom: 30px;
    @media (max-width: 800px) {
        width: 80px;
        height: 70px;
    }
`

const BlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.2rem;
`

const BlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    margin-top: 20px;
    line-height: 1.5rem;
    @media (max-width: 800px) {
        font-size: 15px;
    }
`

const GradientText = styled.span`
    background: linear-gradient(90deg, #e87817 0%, #e60f09 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`

export const FourthBlock = () => (
    <BlockContainer>
        <BlockLogo src={Documentation} />
        <BlockText><GradientText>100%</GradientText> based on TRON smart-contracts.</BlockText>
        <BlockDescription>
            SunBTC protocol is a fair-mining smart-contracts based on TRON. $SUNBTC is the first fully programmable community token on TRON.
        </BlockDescription>
    </BlockContainer>
)