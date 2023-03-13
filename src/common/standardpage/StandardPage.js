import React, { useContext, useRef, useState,useEffect } from 'react'
import { StdPageContainer } from './StandardPageStyles'
import { GlobalContext } from '../../App.js'
import { useRemainingSpace } from '../../hooks/index'


function StandardPage({content}) {
  const { isSmallScreen } = useContext(GlobalContext)
  const [leftPos, setLeftPos] = useState()
  const pageRef = useRef(null)

  const { left } = useRemainingSpace(pageRef, true)

  useEffect(() => {
    setLeftPos(left)
  }, [left])

  return (
    <StdPageContainer ref={pageRef} >
        {content}
    </StdPageContainer>
  )
}

export default StandardPage