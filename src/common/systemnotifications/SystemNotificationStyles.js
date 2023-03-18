import styled, { keyframes } from 'styled-components'

const OnShow =  keyframes`
    0% { 
        transform: translateX(10%);
        opacity: 0;
        visibility: visible;
    }
    5% { 
        transform: translateX(0%);
        animation-fill-mode: forwards;
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
    95% {  
        transform: translateX(0%);
        animation-fill-mode: forwards;
        opacity: 0.6;
    }
    100% {
        transform: translateX(10%);
        animation-fill-mode: forwards;
        opacity: 0;
        visibility: hidden;
    }
`

const variants = {
    'success': '{color: rgb(0, 100, 0); background-color: rgb(237, 255, 237);}',
    'danger': '{color: rgb(100, 0, 0); background-color: rgb(255, 237, 237);}',
    'info': '{color: rgb(0, 0, 100); background-color: rgb(237, 237, 255);}',
    'warning': '{color: rgb(100, 100, 0); background-color: rgb(255, 255, 200);}',
}

export const SysNotificationContainer = styled.div`
    display: flex;
    visibility: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 40vw;
    font-size: 0.6rem;
    font-weight: 600;
    gap: 0.5rem;
    border-radius: 0.2rem;
    padding: 0.8rem;
    z-index: 50;
    animation-name: ${OnShow};
    animation-duration: 6s;
    ${({ variant }) => variants[variant]}
`