import React, { useState } from 'react';

import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';

import { signInWithGoogle, auth } from '../../../helpers/firebase';

import { formGroup, SignInContainer, instructions, submitButtonGroup } from './SignIn.module.scss'

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
        <div className={SignInContainer}>
            <h2>I already have an account</h2>
            <p className={instructions}>Sign in with your email and password.</p>
            <form className={formGroup} onSubmit={handleSubmit}>
                <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" labelToInputLink="signInEmail" required />
                <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" labelToInputLink="signInPassword" required />
                <div className={submitButtonGroup}>
                    <CustomButton type="submit" value='Sign In' />
                    <CustomButton click={signInWithGoogle} type="submit" value='Sign In with Google' google />
                </div>
            </form>
        </div>
    );
};

export default SignIn;