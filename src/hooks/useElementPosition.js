import { useState, useEffect } from 'react'

const useElementPosition = (ref, isDynamic) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { x, y } = ref.current.getBoundingClientRect()
        setPosition({ x, y })
      }
    }
    handleResize()

    if (isDynamic) {
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleResize)
    }
    
    return () => {
      if (isDynamic) {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('scroll', handleResize)
      }
    }
  }, [ref])

  return position
}

export default useElementPosition

