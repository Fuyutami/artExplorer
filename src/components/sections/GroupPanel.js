import React from 'react'
import styled from 'styled-components'

import Theme from '../../other/Theme'
import { IconAdd, IconCopy } from '../../other/Vectors'
import { Button1 } from '../subComponent/Button1'
import { Category } from '../subComponent/Category'
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
	width: 180px;
	justify-content: space-between;
`

const GroupsWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;
`

const ControlsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	transform: translateY(-30%);
`

const Background = styled.div`
	position: absolute;
	z-index: -100;
	background-color: ${Theme.background2};
	height: 100%;
	width: 100vw;
	transform: translateX(-15%);
`

const GroupPanel = () => {
	return (
		<>
			<Container>
				<SectionHeader>
					<SectionTitle>Groups</SectionTitle>
					<ControlsWrapper>
						<Button1>
							<IconCopy fill={Theme.accentColor} />
						</Button1>
						<Button1>
							<IconAdd fill={Theme.accentColor} />
						</Button1>
					</ControlsWrapper>
				</SectionHeader>

				<GroupsWrapper>
					<Category id="New1" value={'New1'}>
						New 1
					</Category>
					<Category id="New2" value={'New2'}>
						New 2
					</Category>
					<Category id="New3" value={'New3'}>
						New 3
					</Category>
				</GroupsWrapper>
				<Background />
			</Container>
		</>
	)
}

export default GroupPanel
