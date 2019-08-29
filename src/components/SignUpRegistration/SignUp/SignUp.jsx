import React, { useState } from 'react';

import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';

import './SignUp.scss'

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
        <div className="SignUp">
            <h2>I already have an account</h2>
            <p className="instructions">Sign in with your email and password.</p>
            <form onSubmit={handleSubmit}>
                <CustomInput type="email" name="email" handleChange={handleChange} value={email} label="Email" required />
                <CustomInput type="password" name="password" handleChange={handleChange} value={password} label="Password" required />
                <CustomButton type="submit" value='Sign In' />
            </form>
        </div>
    );
};