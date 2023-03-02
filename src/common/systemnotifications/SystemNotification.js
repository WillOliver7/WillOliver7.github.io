import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import styles from './notifier.module.css'
import { MdClose } from 'react-icons/md'

function SystemNotification({message, variant}) {
  const [show, setShow] = useState(true)
  const { isSmallScreen } = useContext(GlobalContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => setShow(false), 6000)
    return () => clearTimeout(timeoutId)
  },[])

  let style = styles.systemnotification
  switch (variant) {
      case 'success': style += ' ' + styles.success; break;
      case 'fail': style += ' ' + styles.fail; break;
  }
  style += ' ' + (isSmallScreen && styles.smallscreen)
  return (
    <> { show &&
      <div className={style} key={message}>
        <MdClose onClick={() => setShow(false)} style={isSmallScreen && {alignSelf: 'center', fontSize: '32'}}/>
        <span>{message}</span>
      </div>
    } </>
  )
}

export default SystemNotification
