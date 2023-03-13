import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: ${({isSmallScreen}) => isSmallScreen ? 'column' : 'row'};
    min-width: ${({dvw}) => 100 * dvw} + "px";
    min-height: ${({dvh}) => 100 * dvh} + "px";
`