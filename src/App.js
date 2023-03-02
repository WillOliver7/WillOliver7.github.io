import { useEffect, useState, createContext } from "react"
import { SideBar, StandardPage, Notifier } from './common/index'
import { Home, Products } from './pages/index'
import { useMediaQuery } from "./hooks"
import styles from './App.module.css'


export const GlobalContext = createContext();

export function App() {
  const [page, setPage] = useState('home')
  const [content, setContent] = useState(<Home />)
  const [sysMsgs, setSysMsgs] = useState([])

  const isSmallScreen = useMediaQuery("(max-width: 767px)")

  const ctxValue = {
    sysMsgs,
    setSysMsgs,
    isSmallScreen
  }

  useEffect(() => {
    switch (page) {
      case 'home': setContent(<Home />); break;
      case 'products': setContent(<Products />); break;
      default: setContent('Página não Encontrada')
    }
  }, [page])
  
  return (
    <div className={styles.App + " " + (isSmallScreen ? styles.smallscreen : styles.bigscreen)}>
      <GlobalContext.Provider value={ctxValue}>
        <SideBar setPage={setPage}/>
        <StandardPage content={content} />
        <Notifier />
      </GlobalContext.Provider>
    </div>
  );
}
