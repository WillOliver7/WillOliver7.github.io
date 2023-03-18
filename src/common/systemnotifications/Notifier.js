import React, { useContext } from 'react'
import { NotifierContainer } from './NotifierStyles'
import { GlobalContext } from '../../App.js'
import SystemNotification from './SystemNotification'

function Notifier() {
  const { sysMsgs, isSmallScreen } = useContext(GlobalContext)
  console.log(sysMsgs)

  return (
    <NotifierContainer isSmallScreen={isSmallScreen}>
      {sysMsgs.map((notification, index) => 
        <SystemNotification message={notification.message} variant={notification.variant} key={index}/>
      )}
    </NotifierContainer>
  )
}

export default Notifier
