import React from 'react'
import styled from 'styled-components'
import Theme from '../../other/Theme'
import SectionTitle from '../subComponent/SectionTitle'

const Container = styled.div`
	position: relative;
	padding: 4rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`
const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

const ArtistsContainer = styled.div`
	width: 100%;
	height: 400px;
	overflow: scroll;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${Theme.background2};
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${Theme.accentColor};
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	}
`
const ArtistWrapper = styled.div`
	background-color: ${Theme.background2};
	width: 100%;
	height: 150px;
	cursor: pointer;
`

const ArtistSection = () => {
	return (
		<>
			<Container>
				<SectionHeader>
					<SectionTitle>Artists</SectionTitle>
				</SectionHeader>
				<ArtistsContainer>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
					<ArtistWrapper></ArtistWrapper>
				</ArtistsContainer>
			</Container>
		</>
	)
}

export default ArtistSection
