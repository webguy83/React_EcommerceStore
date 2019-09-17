import React, { useState } from 'react';
import styled from 'styled-components/macro';

import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton';

import { auth, createUserDoc } from '../helpers/firebase';

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
    justify-content: flex-end;
`

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Your passwords do not match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserDoc(user, { displayName });

            setConfirmPassword("");
            setDisplayName("");
            setEmail("");
            setPassword("");

        } catch (err) {
            console.error(err);
        }
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
                    <CustomButton type="submit" value='Sign Up' />
                </SubmitButtonGroup>
            </FormGroup>
        </RegistrationContainer>
    );
};

export default Registration;