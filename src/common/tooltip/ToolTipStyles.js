import styled from 'styled-components'

export const ToolTipContainer = styled.div`
    margin: 0;
    padding: 0;
    width: fit-content;
`

export const ToolTipContent = styled.span`
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #6B6B69;
    color: #fff;
    z-index: 999;
    position: fixed;
    height: ${({ isSmallScreen }) => isSmallScreen && '60vh'};
    width: ${({ isSmallScreen }) => isSmallScreen && '60vw'};
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