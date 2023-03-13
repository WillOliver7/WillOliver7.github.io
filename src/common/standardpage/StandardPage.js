import React, { useContext } from 'react'
import { StdPageContainer } from './StandardPageStyles'
import { GlobalContext } from '../../App.js'


function StandardPage({content}) {
  const { isSmallScreen } = useContext(GlobalContext)

  return (
    <StdPageContainer isSmallScreen={isSmallScreen}>
        {content}
    </StdPageContainer>
  )
}

export default StandardPage