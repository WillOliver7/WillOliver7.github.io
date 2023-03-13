import styled from 'styled-components'


export const SidebarDock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isSmallScreen }) => (isSmallScreen ? '100%' : '2.5rem')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? '2.5rem' : '100%')};
  background-color: #333;
  color: #fff;
  z-index: 15;
`

export const SidebarButtons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isSmallScreen }) => (isSmallScreen && 'center')};
  align-items: ${({ isSmallScreen }) => isSmallScreen && 'center'};
  background-color: #333;
  color: #fff;
  padding: 0 0.6rem;
  z-index: 20;
  width: ${({ isSmallScreen }) => (isSmallScreen ? '100vw' : 'fit-content')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? 'fit-content' : '100vh')};
  transition: all 0.3s ease-in-out;
  transform-origin: 0% 80%;
  ${({ show, isSmallScreen }) =>
    isSmallScreen ? `
      transform: ${show ? 'translateY(12%)' : 'translateY(-120%)'};
    ` : ` 
      transform: ${show ? 'translateX(20%)' : 'translateX(-120%)'};
    `
  }
  opacity: ${({ show }) => (show ? 1 : 0)};
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 12rem;
  font-size: 1rem;
  text-align: left;
  border-bottom: ${({ isSmallScreen, current }) => (current && isSmallScreen && '2px solid #fff')};
`

export const Icon = styled.button`
  height: 3rem;
  padding: 0 0.6rem;
  font-size: 1rem;
  border-left: ${({ current }) => (current ? '4px solid #fff' : 'none')};
`