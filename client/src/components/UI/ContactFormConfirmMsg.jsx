import React from 'react';
import styled, { css } from 'styled-components/macro';

const slideIn = css`
    @keyframes slidein {
        from {
        height: 0;
        }
    
        to {
        height: 2rem;
        }
    }
`

const colourTrans = css`
    background-color: lightgreen;
    transition: all 1s;
`

const ConfirmMsg = styled.div`
    background-color: #f4b400;
    overflow: hidden;
    animation: slidein .5s ease-in 0s 1;

    ${slideIn}
    ${({ status }) => {
        switch(status) {
            case "success":
                return colourTrans;
            default:
                return colourTrans;
        }
    }}
`

const StatusMsg = styled.p`
    font-size: 1.5rem;
    text-align: center;
`

const ContactFormConfirmMsg = ({ status }) => {
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

export default ContactFormConfirmMsg;