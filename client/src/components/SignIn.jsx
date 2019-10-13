import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/user';

import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton';

import { RegistrationContainer, FormGroup, Instructions, SubmitButtonGroup } from './Styles/Form';

// jsx

const SignIn = () => {
    
    const [userInputData, setUserInputData] = useState({ email: "", password: "" });
    const { email, password } = userInputData;

    const { signInUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        signInUser(email, password);
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInputData({ ...userInputData, [name]: value })
    }

    return (
        <RegistrationContainer>
            <h2>I already have an account</h2>
            <Instructions>Sign in with your email and password.</Instructions>
            <FormGroup onSubmit={handleSubmit}>
                <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" labelToInputLink="signInEmail" required />
                <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" labelToInputLink="signInPassword" required />
                <SubmitButtonGroup>
                    <CustomButton type="submit" value='Sign In' />
                    <CustomButton click={() => signInUser()} type="button" value='Sign In with Google' google />
                </SubmitButtonGroup>
            </FormGroup>
        </RegistrationContainer>
    );
};

export default SignIn;