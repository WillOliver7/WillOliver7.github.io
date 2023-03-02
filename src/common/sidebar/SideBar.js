import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { SidebarContainer, SidebarButtons, NavButton, Icon, SidebarIcons } from './SideBarStyles'
import { MdHome, MdRule, MdAutorenew, MdOutlineRemoveRedEye, MdOutlineQrCodeScanner, MdOutlineArchive, MdTrendingUp } from 'react-icons/md'


function SideBar({setPage}) {
  const [show, setShow] = useState(false)
  const [current, setCurrent] = useState('home')
  const { isSmallScreen } = useContext(GlobalContext)

  let buttons = [
    { icon: <MdHome />, content: 'Home', href:'home' },
    { icon: <MdRule />, content: 'Produtos', href:'products' },
    { icon: <MdAutorenew />, content: 'Dimensionar', href:'scale' },
    { icon: <MdOutlineRemoveRedEye />, content: 'Monitoramento', href:'monitoring' },
    { icon: <MdOutlineQrCodeScanner />, content: 'Leitor de Cartões', href:'cards' },
    { icon: <MdOutlineArchive />, content: 'Sob Demanda', href:'sales_orders' },
    { icon: <MdTrendingUp />, content: 'Indicadores', href:'kpis' },
  ]

  const handleClick = (href) => {
    setPage(href)
    setCurrent(href)
    setShow(false)
  }

  return (
    <SidebarContainer isSmallScreen={isSmallScreen} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <SidebarIcons>
        {buttons.map((button) => 
            <Icon current={current == button.href ? true : false} onClick={() => handleClick(button.href)}>
              {button.icon}
            </Icon>
        )}
      </SidebarIcons>
      {<SidebarButtons show={show}>
        {buttons.map((button) =>
          <NavButton  onClick={() => handleClick(button.href)}>
            {button.content}
          </NavButton>
        )}
      </SidebarButtons>}   
    </SidebarContainer>
  )
}

export default SideBar