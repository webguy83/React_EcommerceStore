import React from 'react';
import Logo from '../Logo/Logo';

import './Header.scss';

import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
        </div>
    );
};