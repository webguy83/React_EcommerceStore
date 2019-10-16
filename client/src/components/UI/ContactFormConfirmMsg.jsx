import React from 'react';
import styled, { css } from 'styled-components/macro';

const slideIn = css`
    animation: slidein .5s ease-in-out 0s 1;

    @keyframes slidein {
        from {
        height: 0;
        }
    
        to {
        height: 2rem;
        }
    }
`
const slideOut = css`
    animation: slideout .5s ease-in-out 3s 1;

    @keyframes slideout {
        from {
        height: 2rem;
        }
    
        to {
        height: 0;
        }
    }
`

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
    transition: all 1s;
`

const ConfirmMsg = styled.div`
    ${backgroundColour};
    overflow: hidden;
   
    ${slideIn}
    ${colourTrans}

    ${({status}) => {
        if(status === "success") {
            return slideOut;
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