import { useEffect, useState } from "react"
import { useElementSize, useRemainingSpace} from './index'

//used by a {position: fixed} element to be placed in a quadrant like positioning style in relation to its parent
const useQuadrantPosition = (childrenRef, parentRef, change, isDynamic) => {
    const [position, setPosition] = useState()
    const { top, right, bottom, left } = useRemainingSpace(parentRef, isDynamic)
    const parent = useElementSize(parentRef, change, isDynamic)
    const children = useElementSize(childrenRef, change, isDynamic)     
	
	useEffect(() => {
        if (change) {
            const positions = {
                'topright': {top: top - children.height, left: left + parent.width},                
                'bottomright': {top: top + parent.height, left: left + parent.width},
                'bottomleft': {top: top + parent.height, left: left - children.width},
                'topleft': {top: top + parent.height, left: left - children.width},
            }
            switch (true) {
                case (children.height < top  && children.width < right ) : setPosition(positions['topright']); break;
                case (children.height < bottom  && children.width < right ) : setPosition(positions['bottomright']); break;
                case (children.height < bottom && children.width < left) : setPosition(positions['bottomleft']); break;
                case (children.height < top && children.width < left) : setPosition(positions['topleft']); break;
                case (children.width < right ) : setPosition(positions['bottomright']); break;
                default : setPosition(positions['bottomleft'])
            }
        }
	}, [top, right, bottom, left, children, parent])

    return position
}

export default useQuadrantPosition
