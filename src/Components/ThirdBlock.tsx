import styled from 'styled-components';
import Scales from '../assets/Scales.webp';
import { useInView } from 'react-intersection-observer';

const BlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    margin-top: 100px;
`

const BlockLogo = styled.img <{ marginM: string, opacityM: string }>`
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all 1s ease-in-out;
    @media (max-width: 800px) {
        width: 75px;
        height: 70px;
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

export const ThirdBlock = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <BlockContainer ref={ref}>
            <BlockLogo marginM={inView == true ? '0px' : '50px'} opacityM={inView == true ? '1' : '0'} src={Scales} />
            <BlockText marginM={inView == true ? '0px' : '50px'} opacityM={inView == true ? '1' : '0'}>Not your average TRON memecoin.</BlockText>
            <BlockDescription marginM={inView == true ? '10px' : '50px'} opacityM={inView == true ? '1' : '0'}>$SUNBTC is the most fair token on TRON blockchain. No team allocation, no insiders, no whales.</BlockDescription>
        </BlockContainer>
    )
}