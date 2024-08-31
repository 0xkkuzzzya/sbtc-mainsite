import styled from 'styled-components';
import Mining from '../assets/Mining.webp';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 70px;
    text-align: right;
    margin-bottom: 50px;
`

const BlockLogo = styled.img`
    width: 150px;
    height: 130px;
    margin-bottom: 30px;
    @media (max-width: 800px) {
        width: 100px;
        height: 90px;
    }
`

const BlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 800px) {
        font-size: 23px;
    }
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

export const FifthBlock = () => (
    <BlockContainer>
        <BlockLogo src={Mining} />
        <BlockText>Start <GradientText>mining</GradientText> $SUNBTC.</BlockText>
        <BlockDescription>
            Get NFT GPUs. Open SunBit App. Pay for virtual electricity. Start mining TRON's version of Bitcoin.
        </BlockDescription>
    </BlockContainer>
)