import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { AddSubtractIconContainer, disabledAddSubtractIcon } from './AddSubtractIcon.module.scss';

const AddSubtractIcon = ({ addIcon, addOrSubtract, disabled }) => {
    return (
        <div className={`${disabled ? disabledAddSubtractIcon : ""} ${AddSubtractIconContainer}`} onClick={addOrSubtract}>
            <FontAwesomeIcon icon={addIcon ? faPlusCircle : faMinusCircle} />
        </div>
    );
};

export default AddSubtractIcon;