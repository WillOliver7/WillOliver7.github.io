import React, { useContext } from 'react'
import { StdContainer } from './StdStyles'

function Std() {
  const { isSmallScreen } = useContext(GlobalContext)

  return (
    <StdContainer isSmallScreen={isSmallScreen}>
      
    </StdContainer>
  )
}

export default std
