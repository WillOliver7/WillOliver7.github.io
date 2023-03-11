import styled from 'styled-components'

export const ToolTipContainer = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    width: fit-content;
`

export const ToolTipContent = styled.span`
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #6B6B69;
    color: #fff;
    max-width: 60vw;
    word-wrap: break-word;
    z-index: 999;
    position: ${({ isSmallScreen }) => (isSmallScreen ? 'fixed' : 'absolute')};
    max-height: ${({ isSmallScreen }) => isSmallScreen && '60vh'};
    top: ${({ isSmallScreen }) => isSmallScreen && '20vh'};
    left: ${({ isSmallScreen }) => isSmallScreen && '20vw'};
    overflow: ${({ isSmallScreen }) => isSmallScreen && 'auto'};
`

export const BackDrop = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 998;
`