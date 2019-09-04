import React from 'react';

import { customInputContainer, elementGroup, customLabel } from './CustomInput.module.scss';

const CustomInput = ({ label, labelToInputLink, handleChange, ...otherInputProps }) => {
    return (
        <div className={elementGroup}>
            <input id={labelToInputLink} className={customInputContainer} onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    <label htmlFor={labelToInputLink} className={`${otherInputProps.value.length ? 'shrink' : ''} ${customLabel}`}>{label}</label>
                    :
                    null
            }

        </div>
    );
};

export default CustomInput;