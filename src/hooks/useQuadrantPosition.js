import { useEffect, useState } from "react"
import { useElementSize, useRemainingSpace} from './index'

const useQuadrantPosition = (childrenRef, parentRef, change, isDynamic) => {
    const [position, setPosition] = useState()
    const { top, right, bottom, left } = useRemainingSpace(parentRef, isDynamic)
    const parent = useElementSize(parentRef, change, isDynamic)
    const children = useElementSize(childrenRef, change, isDynamic)     
	
	useEffect(() => {
        if (change) {
            const positions = {
                'topright': {top: bottom + parent.height + children.height, left: parent.width},                
                'bottomright': {top: parent.height, left: parent.width},
                'bottomleft': {top: parent.height, left: parent.width + children.width},
                'topleft': {top: parent.height + children.height, left: parent.width + children.width},
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

    console.log(top, right, bottom, left)
    console.log(position)

    return position
}

export default useQuadrantPosition
