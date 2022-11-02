import React, { useState } from 'react'
import styled from 'styled-components'
import ArtistSection from './sections/ArtistSection'
import FilterPanel from './sections/FilterPanel'
import GroupPanel from './sections/GroupPanel'
import Header from './sections/Header'

const Container = styled.main`
	width: 70%;
	height: 100%;
`
const appState = {
	groups: [],
	activeGroup: { title: 'New 1', artists: [] },
	filters: [
		{ id: 'anime', name: 'Anime', active: false },
		{ id: 'concept art', name: 'Concept Art', active: false },
		{ id: 'digital art', name: 'Digital Art', active: false },
		{ id: 'landscape', name: 'Landscape', active: false },
		{ id: 'photography', name: 'Photography', active: false },
		{ id: 'portrait', name: 'Portrait', active: false },
		{ id: 'traditional', name: 'Traditional', active: false },
	],
}

const Home = () => {
	const [state, setState] = useState(appState)
	return (
		<>
			<Container>
				<Header />
				<GroupPanel />
				<FilterPanel filters={state.filters} />
				<ArtistSection />
			</Container>
		</>
	)
}

export default Home
