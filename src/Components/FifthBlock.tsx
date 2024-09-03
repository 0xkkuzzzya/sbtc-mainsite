import styled from 'styled-components';
import Mining from '../assets/Mining.webp';
import { useInView } from 'react-intersection-observer';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 100px;
    text-align: right;
    margin-bottom: 50px;
`

const BlockLogo = styled.img <{ marginM: string, opacityM: string }>`
    width: 130px;
    height: 115px;
    margin-bottom: 20px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
    @media (max-width: 800px) {
        width: 75px;
        height: 68px;
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
        max-width: 270px;
    }
`

const GradientText = styled.span`
    background: linear-gradient(90deg, #e87817 0%, #e60f09 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`

export const FifthBlock = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <BlockContainer ref={ref}>
            <BlockLogo marginM={inView == true ? '0px' : '30px'} opacityM={inView == true ? '1' : '0'} src={Mining} />
            <BlockText marginM={inView == true ? '0px' : '30px'} opacityM={inView == true ? '1' : '0'}>Start <GradientText>mining</GradientText> $SUNBTC.</BlockText>
            <BlockDescription marginM={inView == true ? '10px' : '30px'} opacityM={inView == true ? '1' : '0'}>
                Get NFT GPUs. Open SunBit App. Pay for virtual electricity. Start mining TRON's version of Bitcoin.
            </BlockDescription>
        </BlockContainer>
    )
}