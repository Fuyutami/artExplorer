import React from 'react'
import styled from 'styled-components'

import Theme from '../../other/Theme'

const Title = styled.h2`
	color: ${Theme.text};
	font-size: 1.4rem;
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: 3rem;
`

const SectionTitle = (props) => {
	return <Title>{props.children}</Title>
}

export default SectionTitle
