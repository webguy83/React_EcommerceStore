import React from 'react';
import SignIn from '../../components/SignInRegistration/SignIn/SignIn';
import Registration from '../../components/SignInRegistration/Registration/Registration';

import './SignInRegistration.scss';

export default () => {
    return (
        <div className="SignInRegistration">
            <SignIn />
            <Registration />
        </div>
    );
};