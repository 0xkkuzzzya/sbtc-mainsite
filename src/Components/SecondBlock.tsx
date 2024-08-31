import styled from 'styled-components';
import BBLogo from '../assets/SBTCBitcoin.webp';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: -150px;
    @media screen {
        margin-top: -30px;
    }
`

const BlockLogo = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 800px) {
        width: 150px;
        height: 150px;
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

export const SecondBlock = () => (
    <BlockContainer>
        <BlockLogo src={BBLogo} />
        <BlockText>21M $SunBTC. Mining. Electricity. Halvings.</BlockText>
        <BlockDescription>
            Miners mine SunBTC with their virtual NFT GPUs, pay for virtual electricity with TRX. 
            TRX earned from electricity go to incentives for LP farmers of the SunBTC / TRX pool on SunSwap.
        </BlockDescription>
    </BlockContainer>
)