import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { selectRegistrationError } from '../store/selectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton';

import { registrationStart } from '../store/actions/registration';

const RegistrationContainer = styled.div`
    width: 45%;

    @media (max-width: 830px) {
        width: auto;
        margin-top: 4rem; 
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
    align-items: center;
`

const FormError = styled.p`
    font-size: 1.5rem;
    color: red;
`

const Registration = ({ registrationStart, registrationError }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "displayName":
                setDisplayName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorPasswordMessage("Your passwords do not match!");
            return;
        }

        setErrorPasswordMessage("");

        registrationStart({
            email, password, displayName
        });
    }

    return (
        <RegistrationContainer>
        <h2>I need to register an account</h2>
        <Instructions>Register your email and password.</Instructions>
        <FormGroup onSubmit={handleSubmit}>
            <CustomInput type="text" name="displayName" handleChange={handleChange} value={displayName} label="Display Name" labelToInputLink="displayName" required />
            <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" labelToInputLink="registrationEmail" required />
            <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" labelToInputLink="registrationPassword" required />
            <CustomInput type="password" name="confirmPassword" handleChange={handleChange} value={confirmPassword} label="Confirm Password" labelToInputLink="confirmRegistrationPassword" required />
            <SubmitButtonGroup>
                <FormError>{errorPasswordMessage}{registrationError}</FormError>
                <CustomButton type="submit" value='Sign Up' />
            </SubmitButtonGroup>
        </FormGroup>
    </RegistrationContainer>
        
    );
};

const mapStateToProps = createStructuredSelector({
    registrationError: selectRegistrationError
})

const mapDispatchToProps = (dispatch) => {
    return {
        registrationStart: (emailPasswordDisplayNameLoading) => {
            dispatch(registrationStart(emailPasswordDisplayNameLoading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);