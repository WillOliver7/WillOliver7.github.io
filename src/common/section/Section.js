import React, { useContext } from 'react'
import { SectionContainer } from './SectionStyles'
import { GlobalContext } from '../../App.js'

function Section(props) {
  const { isSmallScreen } = useContext(GlobalContext)

  return (
    <SectionContainer isSmallScreen={isSmallScreen}>
      {props.children}
    </SectionContainer>
  )
}

export default Section
