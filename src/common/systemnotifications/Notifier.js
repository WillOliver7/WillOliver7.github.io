import React, { useContext } from 'react'
import styles from './notifier.module.css'
import { GlobalContext } from '../../App.js'
import SystemNotification from './SystemNotification'

function Notifier() {
  const { sysMsgs, isSmallScreen } = useContext(GlobalContext)

  let style = styles.notifier
  style += ' ' +  (isSmallScreen ? styles.smallscreen : styles.bigscreen)
  return (
    <div className={style}>
      {sysMsgs.map((notification, index) => 
        <SystemNotification message={notification.message} variant={notification.variant} key={index}/>
      )}
    </div>
  )
}

export default Notifier
