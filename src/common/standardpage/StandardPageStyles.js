import styled from 'styled-components'

export const StdPageContainer = styled.div`
    position: fixed;
    top: ${({isSmallScreen}) => isSmallScreen && '2.5rem'};
    left: ${({isSmallScreen}) => !isSmallScreen && '2.5rem'};
    background-color: rgb(92, 76, 76);
    width: 100%;
    height: fit-content;
`