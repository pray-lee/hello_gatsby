import React from 'react'
import styled from 'styled-components'
// import containerStyles from './container.module.css'

const Container = styled.div`
	color:#ff5700;
	margin: 3rem auto;
	text-align:center;
`

export default ({children}) => {
	return (
		<Container>
			{children}
		</Container>
		)
}