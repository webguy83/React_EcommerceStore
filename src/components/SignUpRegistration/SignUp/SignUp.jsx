import React, { useState } from 'react';

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
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} required />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};