import styled from 'styled-components';
import Scales from '../assets/Scales.webp';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    margin-top: 70px;
`

const BlockLogo = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
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

export const ThirdBlock = () => (
    <BlockContainer>
        <BlockLogo src={Scales} />
        <BlockText>Not your average TRON memecoin.</BlockText>
        <BlockDescription>$SUNBTC is the most fair token on TRON blockchain. No team allocation, no insiders, no whales.</BlockDescription>
    </BlockContainer>
)