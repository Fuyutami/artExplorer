import React from 'react'
import styled from 'styled-components'
import Theme from '../../other/Theme'

const Btn = styled.button`
	width: 3.5rem;
	height: 3.5rem;
	padding: 0.8rem;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	background-color: transparent;

	:hover {
		background-color: ${Theme.btnInactiveBG};
	}

	:active {
		transform: scale(0.95);
	}
	:not(:last-child) {
		margin-right: 1rem;
	}
`

export const Button1 = (props) => {
	return (
		<>
			<Btn>{props.children}</Btn>
		</>
	)
}
