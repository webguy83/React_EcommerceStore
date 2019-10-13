import styled from 'styled-components/macro';

export const RegistrationContainer = styled.div`
    width: 45%;

    @media (max-width: 830px) {
        width: auto;
        margin-top: 4rem; 
    }
`
export const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    height: 28rem;
    justify-content: space-between;
`
export const Instructions = styled.p`
    font-size: 1.5rem;
    margin-top: 1.3rem;
`

export const SubmitButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FormError = styled.p`
    font-size: 1.5rem;
    color: red;
`