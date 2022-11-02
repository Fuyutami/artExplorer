import React from 'react'
import styled from 'styled-components'

import Theme from '../../other/Theme'

const Container = styled.header`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const Title = styled.h1`
	font-family: 'Orbitron', sans-serif;
	font-size: 2.8rem;
	transform: skew(-15deg);
	color: ${Theme.text};
	margin-bottom: 2rem;

	::selection {
		color: ${Theme.text};
		background: ${Theme.accentColor};
	}
`

const About = styled.p`
	color: ${Theme.text};
	font-size: 1.2rem;
	::selection {
		color: ${Theme.text};
		background: ${Theme.accentColor};
	}
`

const Header = () => {
	return (
		<Container>
			<Title>Artist Explorer</Title>

			<About>Discover artists behind the stable diffusion.</About>
		</Container>
	)
}

export default Header
