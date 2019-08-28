import React from 'react';

import './CustomInput.scss';

export default ({ label, handleChange, ...otherInputProps }) => {
    return (
        <div className="elementGroup">
            <input className="customInput" onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    <label className={`${otherInputProps.value.length ? 'shrink' : ''} customLabel`}>{label}</label>
                    :
                    null
            }
            
        </div>
    );
};