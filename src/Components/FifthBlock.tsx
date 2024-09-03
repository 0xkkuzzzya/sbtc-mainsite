import styled from 'styled-components';
import Mining from '../assets/Mining.webp';
import { useInView } from 'react-intersection-observer';

const BlockContainer = styled.div <{ marginM: string, opacityM: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    margin-bottom: 50px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
`

const BlockLogo = styled.img`
    width: 130px;
    height: 115px;
    margin-bottom: 15px;
    @media (max-width: 800px) {
        width: 75px;
        height: 68px;
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
    line-height: 1.8rem;
    margin-top: 20px;
    @media (max-width: 800px) {
        font-size: 15px;
        line-height: 1.5rem;
        max-width: 270px;
        margin-top: 10px;
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
        <BlockContainer marginM={inView == true ? '100px' : '150px'} opacityM={inView == true ? '1' : '0'} ref={ref}>
            <BlockLogo src={Mining} />
            <BlockText>Start <GradientText>mining</GradientText> $SUNBTC.</BlockText>
            <BlockDescription>
                Get NFT GPUs. Open SunBit App. Pay for virtual electricity. Start mining TRON's version of Bitcoin.
            </BlockDescription>
        </BlockContainer>
    )
}