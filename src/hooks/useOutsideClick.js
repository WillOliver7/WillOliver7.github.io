import { useEffect } from "react"

const useOutsideClick = (ref, callback, change) => {
	let timeoutId

	const handleClick = event => {
		timeoutId = setTimeout(() => {
			if (event.target !== ref.current && !ref.current.contains(event.target)){ 
				callback()
			}
		}, 0)
	}
	
	useEffect(() => {
		change && document.addEventListener('click', handleClick)
		return () =>{
			clearTimeout(timeoutId)
			change && document.removeEventListener('click', handleClick)
		}
	})
}

export default useOutsideClick
