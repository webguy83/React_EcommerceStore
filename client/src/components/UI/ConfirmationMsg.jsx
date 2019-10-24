import React from 'react';
import styled, { css } from 'styled-components/macro';

const backgroundColour = css`
    background-color: ${({ status }) => {
        switch (status) {
            case "success":
                return "lightgreen;";
            case "fail":
                return "lightsalmon;";
            default:
                return "#f4b400;";
        }
    }}
`

const colourTrans = css`
    transition: all 2s;
`

const ConfirmMsg = styled.div`
    ${backgroundColour}
    overflow: hidden;
    ${colourTrans}
`

const StatusMsg = styled.p`
    font-size: 1.5rem;
    text-align: center;
`

const ConfirmationMsg = ({ status }) => {
    let msg;
    switch (status) {
        case "success":
            msg = "Submission sent! I will get back to you as soon as possible."
            break;
        case "fail":
            msg = "Submission failed! Please try again later."
            break;
        default:
            msg = "Sending..."
    }
    return (
        <ConfirmMsg status={status}>
            <StatusMsg>{msg}</StatusMsg>
        </ConfirmMsg>
    );
};

export default ConfirmationMsg;