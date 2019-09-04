import React, { useState } from 'react';

import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';

import { auth, createUserDoc } from '../../../helpers/firebase';

import { formGroup, RegistrationContainer, instructions, submitButtonGroup } from './Registration.module.scss'

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
        <div className={RegistrationContainer}>
            <h2>I need to register an account</h2>
            <p className={instructions}>Register your email and password.</p>
            <form className={formGroup} onSubmit={handleSubmit}>
                <CustomInput type="text" name="displayName" handleChange={handleChange} value={displayName} label="Display Name" labelToInputLink="displayName" required />
                <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" labelToInputLink="registrationEmail" required />
                <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" labelToInputLink="registrationPassword" required />
                <CustomInput type="password" name="confirmPassword" handleChange={handleChange} value={confirmPassword} label="Confirm Password" labelToInputLink="confirmRegistrationPassword" required />
                <div className={submitButtonGroup}>
                    <CustomButton type="submit" value='Sign Up' />
                </div>
            </form>
        </div>
    );
};

export default Registration;