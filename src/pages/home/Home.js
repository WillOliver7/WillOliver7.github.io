import React, { useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { Section, ToolTip } from '../../common/index'
import { MdOutlineHelpOutline } from 'react-icons/md'
import { HomeContainer } from './HomeStyles.js'

function Home() {
  const { setSysMsgs } = useContext(GlobalContext)

  const handleClick = (notification) => {
    setSysMsgs((prev) => [...prev, notification])
  }

  let tip = <>I'm a tool tip!mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</>
  
  return (
    <HomeContainer>
      <Section>
        <ToolTip text={tip}>
          <MdOutlineHelpOutline />
        </ToolTip>
        <button onClick={() => handleClick({message: "O TRUTA ME RESPONSEU NO WHATSAPP", variant: 'success'})}>setMsg</button>
        <button onClick={() => handleClick({message: "O TRUTA NÃO ME RESPONSEU NO WHATSAPP", variant: 'fail'})}>Another</button>
      </Section>
    </HomeContainer>
  )
}

export default Home