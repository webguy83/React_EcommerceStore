import React, { useState } from 'react';
import styled from 'styled-components/macro';

import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton';

import { signInWithGoogle, auth } from '../helpers/firebase';

// css
const RegistrationContainer = styled.div`
    width: 45%;

    @media (max-width: 830px) {
        width: auto;
    }
`
const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    height: 28rem;
    justify-content: space-between;
`
const Instructions = styled.p`
    font-size: 1.5rem;
    margin-top: 1.3rem;
`

const SubmitButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
`
// jsx

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail("");
                setPassword("");
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        name === "email" ? setEmail(value) : setPassword(value);
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
                    <CustomButton click={signInWithGoogle} type="submit" value='Sign In with Google' google />
                </SubmitButtonGroup>
            </FormGroup>
        </RegistrationContainer>
    );
};

export default SignIn;