import React from 'react';
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
            <span role="img" aria-label="addRemove">{addIcon ? <>&#10133;</> : <>&#10134;</>}</span>
        </AddSubtractIconContainer>
    );
};

export default AddSubtractIcon;