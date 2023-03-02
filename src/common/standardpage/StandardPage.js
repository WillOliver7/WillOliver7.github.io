import React, { useContext, useRef, useState,useEffect } from 'react'
import styles from './standardpage.module.css'
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
  
  console.log(leftPos)

  return (
    <div className={styles.standardpage + " " + (isSmallScreen ? styles.smallscreen : styles.bigscreen)} ref={pageRef} >
        {content}
    </div>
  )
}

export default StandardPage