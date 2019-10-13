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
const Input = styled.input`
    
    font-family: inherit;
    border: 1px solid darkgray;

    &:focus {
        outline: none;

        &+${CustomLabel} {
            ${shrinkText}
        }
    }

    &[type=password], &[type=textarea] {
        letter-spacing: .3rem;
    }
`

const TextArea = styled.textarea`
    font-family: inherit;
    &:focus {
        outline: none;

        &+${CustomLabel} {
            ${shrinkText}
        }
    }
`

const ElementGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1.5rem 0;
`

const CustomInput = ({ label, labelToInputLink, handleChange, ...otherInputProps }) => {
    const { type } = otherInputProps;
    return (
        <ElementGroup>
            {
                type === "textarea" ? 
                <TextArea id={labelToInputLink} onChange={handleChange} rows="5" {...otherInputProps}  />
                :
                <Input id={labelToInputLink} onChange={handleChange} {...otherInputProps} />
            }
            
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