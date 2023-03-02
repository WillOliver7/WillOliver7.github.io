import styled from 'styled-components'


export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 2.5rem;
  display: flex;
  flex-direction: row;
  background-color: #333;
  color: #fff;
  z-index: 10;
`

export const SidebarIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SidebarButtons = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  height: 100vh;
  padding: 0 0.6rem;
  transition: all 0.3s ease-in-out;
  transform: ${({ show }) => (show ? 'translateX(0%)' : 'translateX(-120%)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform-origin: 0% 80%;
`

export const NavButton = styled.button`
  height: 3rem;
  width: 12rem;
  font-size: 1rem;
  text-align: left;
`

export const Icon = styled.button`
  height: 3rem;
  padding: 0 0.6rem;
  font-size: 1rem;
  border-left: ${({ current }) => (current ? '4px solid #fff' : 'none')};
`