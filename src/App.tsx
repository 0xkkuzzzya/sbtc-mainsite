import React from 'react';
import { MainContainer } from './Container';
import { styled } from 'styled-components';
import { Header } from './Header';

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
		</Container>
	);
}

export default App;
