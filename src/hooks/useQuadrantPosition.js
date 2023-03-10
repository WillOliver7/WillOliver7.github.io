import { useEffect, useState } from "react"
import { useElementSize, useRemainingSpace} from './index'

const useQuadrantPosition = (childrenRef, parentRef, change, isDynamic) => {
    const [position, setPosition] = useState()
    const remainingSpace = useRemainingSpace(parentRef, isDynamic)
    const parent = useElementSize(parentRef, change, isDynamic)
    const children = useElementSize(childrenRef, change, isDynamic)     
	
	useEffect(() => {
        if (change) {
            const positions = {
                'topright': {top: parent.height + children.height, left: parent.width},                
                'bottomright': {top: parent.height, left: parent.width},
                'bottomleft': {top: parent.height, left: parent.width + children.width},
                'topleft': {top: parent.height + children.height, right: parent.width + children.width},
            }
            switch (true) {
                case (children.height < remainingSpace.top  && children.width < remainingSpace.right ) : setPosition(positions['topright']); break;
                case (children.height < remainingSpace.bottom  && children.width < remainingSpace.right ) : setPosition(positions['bottomright']); break;
                case (children.height < remainingSpace.bottom && children.width < remainingSpace.left) : setPosition(positions['bottomleft']); break;
                case (children.height < remainingSpace.top && children.width < remainingSpace.left) : setPosition(positions['topleft']); break;
                case (children.width < remainingSpace.right ) : setPosition(positions['bottomright']); break;
                default : setPosition(positions['bottomleft'])
            }
        }
	}, [remainingSpace, children, parent])

    return position
}

export default useQuadrantPosition
