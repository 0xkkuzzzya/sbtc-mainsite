import styled from 'styled-components';
import Scales from '../assets/Scales.webp';
import { useInView } from 'react-intersection-observer';

const BlockContainer = styled.div <{ marginM: string, opacityM: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
`

const BlockLogo = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
        width: 75px;
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
    line-height: 1.8rem;
    margin-top: 20px;
    @media (max-width: 800px) {
        font-size: 15px;
        line-height: 1.5rem;
        max-width: 250px;
        margin-top: 10px;
    }
`

export const ThirdBlock = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <BlockContainer marginM={inView == true ? '100px' : '150px'} opacityM={inView == true ? '1' : '0'} ref={ref}>
            <BlockLogo src={Scales} />
            <BlockText>Not your average TRON memecoin.</BlockText>
            <BlockDescription>$SUNBTC is the most fair token on TRON blockchain. No team allocation, no insiders, no whales.</BlockDescription>
        </BlockContainer>
    )
}