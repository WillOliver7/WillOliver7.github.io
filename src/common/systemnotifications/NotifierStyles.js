import styled from 'styled-components'

export const NotifierContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    right: 1vw;
    flex-direction: ${({ isSmallScreen }) => (isSmallScreen ? 'column-reverse' : 'column')};
    top: ${({ isSmallScreen }) => (!isSmallScreen && '1vh')};
    bottom: ${({ isSmallScreen }) => (isSmallScreen && '2vh')};
    margin-right: ${({ isSmallScreen }) => (isSmallScreen && '1vw')};
    `