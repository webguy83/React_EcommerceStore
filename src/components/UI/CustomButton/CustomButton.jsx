import React from 'react';

import { customButtonContainer, googleSignIn } from './CustomButton.module.scss';

const CustomButton =  ({ type, value, click, google }) => {
    return (
        <button onClick={click} type={type} className={google ? customButtonContainer.concat(` ${googleSignIn}`) : customButtonContainer}>{value}</button>
    );
};

export default CustomButton;