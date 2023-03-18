import styled from 'styled-components'

export const StdPageContainer = styled.div`
    margin-top: ${({isSmallScreen}) => isSmallScreen && '2.5rem'};
    margin-left: ${({isSmallScreen}) => !isSmallScreen && '2.5rem'};
    background-color: white;
`