import React from 'react'
import styled from 'styled-components'

import Theme from '../../other/Theme'

const Container = styled.div`
	position: relative;
	min-width: 100px;
	height: 30px;
	:not(:last-child) {
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
`
const Input = styled.input`
	position: absolute;
	display: none;

	:checked ~ label {
		color: ${Theme.btnActiveText};
	}

	:checked ~ .fill {
		background-color: ${Theme.btnActiveBG};
		border: 1px solid ${Theme.accentColor};
	}
`
const Label = styled.label`
	width: 100%;
	height: 100%;
	color: ${Theme.btnInactiveText};
	font-size: 1.2rem;
	font-weight: 400;
	user-select: none;
	-moz-user-select: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.7rem 1rem;
`

const Fill = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: -10;
	background-color: ${Theme.btnInactiveBG};
	width: 100%;
	height: 100%;
	border-radius: 20px;
`

export const Category = (props) => {
	return (
		<Container>
			<Input
				type="checkbox"
				id={props.id}
				name="category"
				value={props.value}
				onChange={() => {
					props.changeHandler(props.id)
				}}
			/>
			<Label for={props.id}>{props.children}</Label>
			<Fill className="fill" />
		</Container>
	)
}
