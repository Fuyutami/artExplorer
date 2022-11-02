import React from 'react'
import styled from 'styled-components'
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

const CategoriesWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;
`

const FilterPanel = (props) => {
	return (
		<>
			<Container>
				<SectionTitle>Filter</SectionTitle>
				<CategoriesWrapper>
					{props.filters.map((filter) => {
						return (
							<Category
								id={filter.id}
								value={filter.active}
								changeHandler={props.changeHandler}
							>
								{filter.name}
							</Category>
						)
					})}
				</CategoriesWrapper>
			</Container>
		</>
	)
}

export default FilterPanel
