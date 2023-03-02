import { useState, useEffect } from 'react'

const useElementSize = (ref, change, isDynamic) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        })
      }
    }
    handleResize()
    
    isDynamic && window.addEventListener('resize', handleResize)
    return () => isDynamic && window.removeEventListener('resize', handleResize)
  }, [ref, change])

  return size
}

export default useElementSize

