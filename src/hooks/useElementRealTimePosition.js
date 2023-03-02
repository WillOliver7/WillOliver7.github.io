import { useState, useEffect } from 'react'

const useElementRealTimePosition = (ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleUpdate = () => {
      if (ref.current) {
        const { x, y } = ref.current.getBoundingClientRect()
        setPosition({ x, y })
        requestAnimationFrame(handleUpdate)
      }
    }

    handleUpdate()

    return () => {}
  }, [ref])

  return position
}

export default useElementRealTimePosition
