import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import styled, { css } from 'styled-components';

// css

const disabledStyles = css`
    opacity: .1;

    &:hover {
        cursor: default;
        color: inherit;
    }
`

const AddSubtractIconContainer = styled.div`
    &:hover {
        cursor: pointer;
        color: #F4B400;
        transition: all .3s ease-in-out;
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