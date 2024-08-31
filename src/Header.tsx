import styled from "styled-components";
import SunBTCMainLogo from './assets/SunBTCMainLogo.webp';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100px;
`

const NameBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const SunBTCNameBlock = styled.img`
    width: 50px;
    height: 50px;
    @media (max-width: 800px) {
        width: 45px;
        height: 45px;
    }
`

const Name = styled.a`
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    margin-top: 5px;
    @media (max-width: 800px) {
        font-size: 25px;
    }
`

export const Header = () => {
    return (
        <HeaderContainer>
            <NameBlock>
                <SunBTCNameBlock src={SunBTCMainLogo} />
                <Name>SunBTC</Name>
            </NameBlock>
        </HeaderContainer>
    )
}
