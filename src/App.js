import { useEffect, useState, createContext } from "react"
import { SideBar, StandardPage, Notifier } from './common/index'
import { Home, Products } from './pages/index'
import { useMediaQuery, useWindowSize } from "./hooks"
import { AppContainer } from "./AppStyles"


export const GlobalContext = createContext();

export function App() {
  const [page, setPage] = useState('home')
  const [content, setContent] = useState(<Home />)
  const [sysMsgs, setSysMsgs] = useState([])

  const isSmallScreen = useMediaQuery("(max-width: 767px)")
  const windowSize = useWindowSize()

  const ctxValue = {
    sysMsgs,
    setSysMsgs,
    isSmallScreen,
    dvh: windowSize.height * 0.01,
    dvw: windowSize.width * 0.01,
  }

  useEffect(() => {
    switch (page) {
      case 'home': setContent(<Home />); break;
      case 'products': setContent(<Products />); break;
      default: setContent('Página não Encontrada')
    }
  }, [page])
  
  return (
    <GlobalContext.Provider value={ctxValue}>
      <AppContainer isSmallScreen={isSmallScreen} dvh={ctxValue.dvh} dvw={ctxValue.dvw}>
        <SideBar setPage={setPage} id="sidebar"/>
        <StandardPage content={content} />
        <Notifier />
      </AppContainer>
    </GlobalContext.Provider>
  );
}
