import styled from 'styled-components'


export const SidebarDock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: ${({ isSmallScreen }) => isSmallScreen ? 'row' : 'column'};
  justify-content: ${({ isSmallScreen }) => isSmallScreen ? 'end' : 'start'};
  align-items: ${({ isSmallScreen }) => isSmallScreen ? 'center' : 'center'};
  width: ${({ isSmallScreen }) => (isSmallScreen ? '100vw' : '2.5rem')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? '2.5rem' : '100vh')};
  background-color: #333;
  color: #fff;
  z-index: 20;
`

export const SidebarButtons = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: ${({ isSmallScreen }) => (isSmallScreen && '2.5rem')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ isSmallScreen }) => (isSmallScreen && 'center')};
  align-items: ${({ isSmallScreen }) => isSmallScreen && 'center'};
  background-color: #333;
  color: #fff;
  z-index: 19;
  width: ${({ isSmallScreen }) => (isSmallScreen ? '100vw' : 'fit-content')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? 'fit-content' : '100vh')};
  transition: all 0.3s ease-in-out;
  transform-origin: 0% 80%;
  ${({ show, isSmallScreen }) =>
    isSmallScreen ? `
      transform: ${show ? 'translateY(0%)' : 'translateY(-120%)'};
    ` : ` 
      transform: ${show ? 'translateX(0%)' : 'translateX(-120%)'};
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

export const BackDrop = styled.span`
  position: fixed;
  top: 2.5rem;
  left: 0;
  height: 100vh;
  width: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 18;
`