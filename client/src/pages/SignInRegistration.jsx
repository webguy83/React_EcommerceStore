import React from 'react';
import SignIn from '../components/SignIn';
import Registration from '../components/Registration';

import styled from 'styled-components/macro';

// css
const SignInRegistrationContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;

    @media (max-width: 830px) {
        flex-direction: column;
    }
`

const SignInRegistration = () => {
    return (
        <SignInRegistrationContainer>
            <SignIn />
            <Registration />
        </SignInRegistrationContainer>
    );
};

export default SignInRegistration;