import React, { useContext } from 'react';
import { RegistrationContext } from '../contexts/registration';
import { UserContext } from '../contexts/user';
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
    justify-content: space-between;
    align-items: center;
`

const FormError = styled.p`
    font-size: 1.5rem;
    color: red;
`

const Registration = () => {

    const { userInputData, setUserInputData, errorPasswordMessage, setErrorPasswordMessage } = useContext(RegistrationContext);
    const { signInUser, setRegisterUserStatus } = useContext(UserContext)
    const { email, password, confirmPassword, displayName } = userInputData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInputData({ ...userInputData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorPasswordMessage("Your passwords do not match!");
            return;
        }
        setRegisterUserStatus(false);
        auth.createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                setErrorPasswordMessage("");
                return createUserDoc(user, { displayName });
            })
            .then(() => {
                return signInUser(email, password);
            })
            .then(() => {
                setRegisterUserStatus(true);
            })
            .catch(err => {
                setErrorPasswordMessage(err.message);
            })

        setErrorPasswordMessage("");
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
                    <FormError>{errorPasswordMessage}</FormError>
                    <CustomButton type="submit" value='Sign Up' />
                </SubmitButtonGroup>
            </FormGroup>
        </RegistrationContainer>

    );
};

export default Registration;