import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    zoom: undefined,
  })

  useEffect(() => {
    function handleChange() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        zoom: window.zoom,
      })
    }

    window.addEventListener("resize", handleChange)
    window.addEventListener("scroll", handleChange)
    handleChange()

    return () => {
      window.removeEventListener("resize", handleChange)
      window.removeEventListener("scroll", handleChange)
    }
  }, [window.zoom])

  return windowSize
}

export default useWindowSize