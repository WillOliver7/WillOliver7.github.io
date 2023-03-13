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

  let tip = "I'm a tool tip!"
  
  return (
    <HomeContainer>
      <Section>
        <ToolTip text={tip}>
          <MdOutlineHelpOutline />
        </ToolTip>
        <button onClick={() => handleClick({message: "O TRUTA ME RESPONDEU NO WHATSAPP", variant: 'success'})}>setMsg</button>
        <button onClick={() => handleClick({message: "O TRUTA NÃO ME RESPONDEU NO WHATSAPP", variant: 'fail'})}>Another</button>
      </Section>
      {/* <Section>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet egestas est accumsan pharetra. Ut pulvinar est sem, id tempus sapien aliquam ut. Maecenas ornare non tortor a hendrerit. Vivamus et nunc vitae leo facilisis venenatis ac at leo. Quisque sodales mi sed posuere pretium. Curabitur finibus, diam sit amet scelerisque dapibus, nibh orci laoreet nulla, id euismod ante sapien sit amet tortor. Nullam auctor tellus id leo ornare molestie. Ut ac ex volutpat, fermentum diam id, egestas neque. Morbi lobortis ullamcorper arcu, ut rhoncus sapien varius quis. Vivamus porttitor vel odio ut feugiat. Nunc finibus accumsan neque, ac facilisis lorem semper sit amet.
        Nam a posuere ipsum, eget tempus libero. Ut porta nisl metus, eu pharetra neque pulvinar nec. Cras augue nulla, tincidunt vitae nulla ac, ullamcorper convallis ipsum. Pellentesque interdum elementum felis eget placerat. Etiam ultricies risus vitae sapien suscipit aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id dui et arcu vulputate accumsan non nec mi. Proin sit amet elit mollis, ornare ex eu, suscipit risus. Donec volutpat pretium lacus, sit amet tempor neque dapibus quis. Nam ultrices tempor cursus. In lobortis semper ipsum a euismod. Proin porta quam ipsum. 
        </p>
      </Section> */}
    </HomeContainer>
  )
}

export default Home