import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { connect } from 'react-redux';

import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton';

import { googleSignInStart, signInPasswordStart } from '../store/actions/user';

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

const SignIn = ({ googleSignInStart, signInPasswordStart }) => {

    const [userInputData, setUserInputData] = useState({ email: "", password: "" });
    const { email, password } = userInputData;
    const handleSubmit = (e) => {
        e.preventDefault();

        signInPasswordStart(email, password);
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
                    <CustomButton click={googleSignInStart} type="button" value='Sign In with Google' google />
                </SubmitButtonGroup>
            </FormGroup>
        </RegistrationContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => {
            dispatch(googleSignInStart())
        },
        signInPasswordStart: (email, password) => {
            dispatch(signInPasswordStart({ email, password }))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);