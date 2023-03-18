import React, { useRef, useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../App.js'
import { ToolTipContainer, ToolTipContent, BackDrop } from './ToolTipStyles.js'
import { useQuadrantPosition } from '../../hooks/index'

const ToolTip = (props) => {
    const [show, setShow] = useState(false)
    const { isSmallScreen } = useContext(GlobalContext)
    const wrapperRef = useRef(null)
    const toolTipRef = useRef(null)
    const quadrantPosition = useQuadrantPosition(toolTipRef, wrapperRef, show)
    
    const handleInteraction = () => setShow((prev) => !prev)

    useEffect(() => {
        return () => setShow(false)
    }, [])

    return (
        <ToolTipContainer
            ref={wrapperRef}
            onMouseEnter={!isSmallScreen ? handleInteraction : undefined} 
            onMouseLeave={!isSmallScreen ? handleInteraction : undefined}
            onClick={isSmallScreen ? handleInteraction : undefined}
        >
            {props.children}
            {show && <ToolTipContent
                ref={toolTipRef}
                isSmallScreen={isSmallScreen}
                style={!isSmallScreen ? quadrantPosition : {}}
                onClick={(e) => e.stopPropagation()}
            >
                {props.text}
            </ToolTipContent>}
            {isSmallScreen && <BackDrop style={{display: show ? 'block' : 'none' }} />}
        </ToolTipContainer>
    )
}

export default ToolTip
