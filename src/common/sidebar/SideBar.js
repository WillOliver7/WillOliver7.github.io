import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { SidebarDock, SidebarButtons, NavButton, Icon, BackDrop } from './SideBarStyles'
import { MdHome, MdRule, MdAutorenew, MdOutlineRemoveRedEye, MdOutlineQrCodeScanner, MdOutlineArchive, MdTrendingUp } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'


function SideBar({setPage}) {
  const [show, setShow] = useState(false)
  const [current, setCurrent] = useState('home')
  const { isSmallScreen } = useContext(GlobalContext)

  let pages = [
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

  const handleShow = () => setShow((prev) => !prev)

  return (
    <>
      <SidebarDock isSmallScreen={isSmallScreen} onMouseEnter={() => !isSmallScreen && setShow(true)}>
        {isSmallScreen && <RxHamburgerMenu size={32} style={{zIndex: 21, padding: 8}} onClick={handleShow}/>}
        {!isSmallScreen && pages.map((page) => <Icon current={current == page.href ? true : false} onClick={() => handleClick(page.href)}>{page.icon}</Icon>)}
      </SidebarDock>
      <SidebarButtons show={show} isSmallScreen={isSmallScreen} onMouseLeave={() => setShow(false)}>
        {pages.map((page) =>
          <NavButton  onClick={() => handleClick(page.href)} isSmallScreen={isSmallScreen} current={current == page.href ? true : false}>
            {isSmallScreen && <Icon>{page.icon}</Icon>}
            {page.content}
          </NavButton>
        )}
      </SidebarButtons>
      {isSmallScreen && <BackDrop style={{display: show ? 'block' : 'none' }} onClick={()=> setShow(false)} />}
    </>
  )
}

export default SideBar