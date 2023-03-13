import React, { useRef, useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import { ToolTipContainer, ToolTipContent, BackDrop } from './ToolTipStyles.js'
import { useQuadrantPosition } from '../../hooks/index'
import { useEffect } from 'react'

const ToolTip = (props) => {
    const [show, setShow] = useState(false)
    const { isSmallScreen } = useContext(GlobalContext)
    const wrapperRef = useRef(null)
    const toolTipRef = useRef(null)
    const quadrantPosition = useQuadrantPosition(toolTipRef, wrapperRef, show)
    
    const handleInteraction = () => setShow((prev) => !prev)

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
