import React from 'react';

import { customButton, googleSignIn } from './CustomButton.module.scss';

export default ({ type, value, click, google }) => {
    return (
        <button onClick={click} type={type} className={google ? customButton.concat(` ${googleSignIn}`) : customButton}>{value}</button>
    );
};