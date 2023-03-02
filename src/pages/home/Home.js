import React, { useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { ToolTip } from '../../common/index'
import { MdOutlineHelpOutline } from 'react-icons/md'
import styles from './home.module.css'


function Home() {
  const { setSysMsgs } = useContext(GlobalContext)

  const handleClick = (notification) => {
    setSysMsgs((prev) => [...prev, notification])
  }

  let tip = <>I'm a tool tip!<br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div>tetetetessdsds</div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    A really long tool tip!
  </>
  return (
    <div className={styles.home}>
      <button onClick={() => handleClick({message: "O TRUTA ME RESPONSEU NO WHATSAPP", variant: 'success'})}>setMsg</button>
      <button onClick={() => handleClick({message: "O TRUTA NÃO ME RESPONSEU NO WHATSAPP", variant: 'fail'})}>Another</button>
      <ToolTip text={tip}>
        <MdOutlineHelpOutline />
      </ToolTip>
    </div>
  )
}

export default Home