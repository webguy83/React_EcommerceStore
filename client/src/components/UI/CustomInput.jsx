import React from "react";
import styled, { css } from "styled-components";

// css

export const shrinkText = css`
  top: -1rem;
  font-size: 1.3rem;
  transition: all 0.3s ease-out;
`;

export const normalText = css`
  top: -0.5rem;
  font-size: 1.6rem;
  transition: all 0.3s ease-in;
`;

const CustomLabel = styled.label`
  color: darkgray;
  position: absolute;

  ${normalText}

  ${({ ...otherInputProps }) => {
    if (otherInputProps.value.length > 0) {
      return shrinkText;
    }
  }}
`;
const Input = styled.input`
  font-family: inherit;
  border: 1px solid darkgray;

  &:focus {
    outline: none;

    & + ${CustomLabel} {
      ${shrinkText}
    }
  }

  &[type="password"],
  &[type="textarea"] {
    letter-spacing: 0.3rem;
  }
`;

const TextArea = styled.textarea`
  font-family: inherit;
  &:focus {
    outline: none;

    & + ${CustomLabel} {
      ${shrinkText}
    }
  }
`;

const ElementGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5rem 0;
`;

const CustomInput = ({
  label,
  labelToInputLink,
  handleChange,
  ...otherInputProps
}) => {
  const { type } = otherInputProps;
  return (
    <ElementGroup>
      {type === "textarea" ? (
        <TextArea
          data-testid="textarea"
          id={labelToInputLink}
          onChange={handleChange}
          rows="5"
          {...otherInputProps}
        />
      ) : (
        <Input
          data-testid="input"
          id={labelToInputLink}
          onChange={handleChange}
          {...otherInputProps}
        />
      )}

      {label ? (
        <CustomLabel
          data-testid="label"
          htmlFor={labelToInputLink}
          {...otherInputProps}
        >
          {label}
        </CustomLabel>
      ) : null}
    </ElementGroup>
  );
};

export default CustomInput;
