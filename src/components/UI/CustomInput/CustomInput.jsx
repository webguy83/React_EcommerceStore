import React from 'react';

import './CustomInput.scss';

export default ({ label, labelToInputLink, handleChange, ...otherInputProps }) => {
    return (
        <div className="elementGroup">
            <input id={labelToInputLink} className="customInput" onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    <label htmlFor={labelToInputLink} className={`${otherInputProps.value.length ? 'shrink' : ''} customLabel`}>{label}</label>
                    :
                    null
            }
            
        </div>
    );
};