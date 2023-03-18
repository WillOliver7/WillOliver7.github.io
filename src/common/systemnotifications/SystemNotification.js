import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { SysNotificationContainer } from './SystemNotificationStyles.js'
import { MdClose } from 'react-icons/md'

function SystemNotification({message, variant}) {
  const [show, setShow] = useState(true)
  const { isSmallScreen, setSysMsgs, sysMsgs } = useContext(GlobalContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false)
    }, 6000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [show])
  
  return (
    <>{show &&
      <SysNotificationContainer variant={variant} isSmallScreen={isSmallScreen}>
        <MdClose onClick={() => setShow(false)} style={isSmallScreen && {alignSelf: 'center', fontSize: isSmallScreen ? '1rem' : '2rem'}}/>
        <span>{message}</span>
      </SysNotificationContainer>}
    </>
  )
}

export default SystemNotification
