import React from 'react';

import './CustomInput.scss';

export default ({ label, handleChange, ...otherInputProps }) => {
    return (
        <div className="elementGroup">
            <input id={label ? label.toLowerCase() : null} className="customInput" onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    <label htmlFor={label ? label.toLowerCase() : null} className={`${otherInputProps.value.length ? 'shrink' : ''} customLabel`}>{label}</label>
                    :
                    null
            }
            
        </div>
    );
};