import styled from 'styled-components';
import BBLogo from '../assets/SBTCBitcoin.webp';
import { useInView } from 'react-intersection-observer';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: -150px;
    @media screen {
        margin-top: 0px;
    }
`

const BlockLogo = styled.img <{ marginM: string, opacityM: string }>`
    width: 180px;
    height: 180px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
    @media (max-width: 800px) {
        width: 110px;
        height: 110px;
    }
`

const BlockText = styled.a <{ marginM: string, opacityM: string }>`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.2rem;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
`

const BlockDescription = styled.a <{ marginM: string, opacityM: string }>`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 1.8rem;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
    @media (max-width: 800px) {
        font-size: 15px;
        line-height: 1.5rem;
        max-width: 250px;
    }
`

export const SecondBlock = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (

        <BlockContainer ref={ref}>
            <BlockLogo marginM={inView == true ? '0px' : '30px'} opacityM={inView == true ? '1' : '0'} src={BBLogo} />
            <BlockText marginM={inView == true ? '0px' : '30px'} opacityM={inView == true ? '1' : '0'}>21M $SunBTC. Mining. Electricity. Halvings.</BlockText>
            <BlockDescription marginM={inView == true ? '10px' : '30px'} opacityM={inView == true ? '1' : '0'}>
                Miners mine SunBTC with their virtual NFT GPUs, pay for virtual electricity with TRX.
                TRX earned from electricity go to incentives for LP farmers of the SunBTC / TRX pool on SunSwap.
            </BlockDescription>
        </BlockContainer>
    )
}
