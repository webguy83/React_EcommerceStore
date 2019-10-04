import React from 'react';
import styled, { css } from 'styled-components';

// css

const shrinkText = css`
    top: -1rem;
    font-size: 1.3rem;
    transition: all .3s ease-out;
`

const CustomLabel = styled.label`
    font-size: 1.6rem;
    color: darkgray;
    position: absolute;
    top: -0.5rem;
    transition: all .3s ease-in;

    ${({ ...otherInputProps }) => {
        if (otherInputProps.value.length > 0) {
            return shrinkText;
        }
    }}

    
`
const CustomInputContainer = styled.input`
    border: none;
    border-bottom: 1px solid darkgray;

    &:focus {
        outline: none;

        &+${CustomLabel} {
            ${shrinkText}
        }
    }

    &[type=password] {
        letter-spacing: .3rem;
    }
`

const ElementGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem 0;
`

//import { customInputContainer, elementGroup, customLabel } from './CustomInput.module.scss';
// jsx

const CustomInput = ({ label, labelToInputLink, handleChange, ...otherInputProps }) => {
    return (
        <ElementGroup>
            <CustomInputContainer id={labelToInputLink} onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    <CustomLabel htmlFor={labelToInputLink} {...otherInputProps} >{label}</CustomLabel>
                    :
                    null
            }

        </ElementGroup>
    );
};

export default CustomInput;