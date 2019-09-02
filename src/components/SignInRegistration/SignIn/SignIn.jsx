import React, { useState } from 'react';

import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';

import { signInWithGoogle } from '../../../helpers/firebase';

import './SignIn.scss'

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        name === "email" ? setEmail(value) : setPassword(value);
    }

    return (
        <div className="SignIn">
            <h2>I already have an account</h2>
            <p className="instructions">Sign in with your email and password.</p>
            <form onSubmit={handleSubmit}>
                <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" required />
                <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" required />
                <div className="submitButtonGroup">
                    <CustomButton type="submit" value='Sign In' />
                    <CustomButton click={signInWithGoogle} type="submit" value='Sign In with Google' google />
                </div>
            </form>
        </div>
    );
};