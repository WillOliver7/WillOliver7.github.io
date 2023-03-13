import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { SidebarDock, SidebarButtons, NavButton, Icon } from './SideBarStyles'
import { MdHome, MdRule, MdAutorenew, MdOutlineRemoveRedEye, MdOutlineQrCodeScanner, MdOutlineArchive, MdTrendingUp } from 'react-icons/md'


function SideBar({setPage}) {
  const [show, setShow] = useState(true)
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
    <>
      <SidebarDock isSmallScreen={isSmallScreen} onMouseEnter={() => setShow(true)}>
        {isSmallScreen && <MdOutlineArchive />}
        {!isSmallScreen && buttons.map((button) => <Icon current={current == button.href ? true : false} onClick={() => handleClick(button.href)}>{button.icon}</Icon>)}
      </SidebarDock>
      <SidebarButtons show={show} isSmallScreen={isSmallScreen} onMouseLeave={() => setShow(false)}>
        {buttons.map((button) =>
          <NavButton  onClick={() => handleClick(button.href)} isSmallScreen={isSmallScreen} current={current == button.href ? true : false}>
            {isSmallScreen && <Icon>{button.icon}</Icon>}
            {button.content}
          </NavButton>
        )}
      </SidebarButtons>
    </>
  )
}

export default SideBar