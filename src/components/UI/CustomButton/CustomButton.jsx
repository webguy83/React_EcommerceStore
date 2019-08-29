import React from 'react';

import './CustomButton.scss';

export default ({type, value}) => {
    return (
        <button type={type} className="customButton">{value}</button>
    );
};