import React, { useRef, useState, useContext } from 'react'
import { GlobalContext } from '../../App.js'
import styles from './tooltip.module.css'
import { MdClose } from 'react-icons/md'
import { useOutsideClick, useQuadrantPosition } from '../../hooks/index'

const ToolTip = (props) => {
    const [show, setShow] = useState(false)
    const { isSmallScreen } = useContext(GlobalContext)
    const wrapperRef = useRef(null)
    const toolTipRef = useRef(null)
    const position = useQuadrantPosition(toolTipRef, wrapperRef, show)

    const handleInteraction = () => setShow((prev) => !prev)
    useOutsideClick(toolTipRef, isSmallScreen ? handleInteraction : undefined, show)

    let tooltipStyle = styles.tooltip
    tooltipStyle += ' ' + (isSmallScreen ? styles.smallscreen : styles.bigscreen)

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <span onMouseEnter={!isSmallScreen ? handleInteraction : undefined} 
                onMouseLeave={!isSmallScreen ? handleInteraction : undefined}
                onClick={isSmallScreen ? handleInteraction : undefined}>
                {props.children}
            </span>
            {show && <span className={tooltipStyle} ref={toolTipRef} style={!isSmallScreen ? position : {}}>
                {isSmallScreen && <MdClose style={{alignSelf: 'flex-end'}}/>}
                {props.text}
            </span>}
        </div>
    )
}

export default ToolTip
