import React from 'react';
import { MainContainer } from './Components/Container';
import { styled } from 'styled-components';
import { Header } from './Header';
import { SecondBlock } from './Components/SecondBlock';
import { ThirdBlock } from './Components/ThirdBlock';
import { FourthBlock } from './Components/FourthBlock';
import { FifthBlock } from './Components/FifthBlock';

const Container = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	margin: auto;
	@media (max-width: 800px) {
		width: 90%;
	}
`

function App() {
	return (
		<Container>
			<Header />
			<MainContainer />
			<SecondBlock />
			<ThirdBlock />
			<FourthBlock />
			<FifthBlock />
		</Container>
	);
}

export default App;
