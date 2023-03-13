import React, { useContext } from 'react'
import { SectionContainer } from './SectionStyles'
import { GlobalContext } from '../../App.js'

function Section(props) {
  const { isSmallScreen, dvh, dvw } = useContext(GlobalContext)

  return (
    <SectionContainer isSmallScreen={isSmallScreen} dvh={dvh} dvw={dvw}>
      {props.children}
    </SectionContainer>
  )
}

export default Section
