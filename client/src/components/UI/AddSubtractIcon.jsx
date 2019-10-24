import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import styled, { css } from 'styled-components/macro';

// css

const disabledStyles = css`
    opacity: .1;

    &:hover {
        cursor: default;
        color: inherit;
    }
`

const AddSubtractIconContainer = styled.div`
    cursor: pointer;
    
    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }

    ${({ disabled }) => {
        return disabled ? disabledStyles : null
    }}
`

//jsx

const AddSubtractIcon = ({ addIcon, addOrSubtract, disabled }) => {
    return (
        <AddSubtractIconContainer disabled={disabled} onClick={addOrSubtract}>
            <FontAwesomeIcon icon={addIcon ? faPlusCircle : faMinusCircle} />
        </AddSubtractIconContainer>
    );
};

export default AddSubtractIcon;