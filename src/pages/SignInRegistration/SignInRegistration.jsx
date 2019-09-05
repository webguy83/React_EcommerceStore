import React from 'react';
import SignIn from '../../components/SignInRegistration/SignIn/SignIn';
import Registration from '../../components/SignInRegistration/Registration/Registration';

import { SignInRegistrationContainer } from './SignInRegistration.module.scss';

const SignInRegistration = () => {
    return (
        <div className={SignInRegistrationContainer}>
            <SignIn />
            <Registration />
        </div>
    );
};

export default SignInRegistration;