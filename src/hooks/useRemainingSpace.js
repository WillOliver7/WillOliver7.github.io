import { useState, useEffect } from 'react'

const useRemainingSpace = (ref, isDynamic) => {
  const [remaining, setRemaining] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setRemaining({
          top: rect.top,
          right: window.innerWidth - rect.right,
          bottom: window.innerHeight - rect.bottom,
          left: rect.left
        })
      }
    }
    handleResize()
    isDynamic && window.addEventListener('resize', handleResize)
    return () => isDynamic && window.removeEventListener('resize', handleResize)
  }, [ref])

  return remaining
}

export default useRemainingSpace

