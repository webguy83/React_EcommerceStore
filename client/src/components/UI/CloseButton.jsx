import React from 'react';
import styled from 'styled-components/macro';

const CloseButtonContainer = styled.div`
    ${({ style }) => style}
    cursor: pointer;
    font-size: 2.9rem;
    
    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }

`

const CloseButton = ({ closeElm, style }) => {
    return <CloseButtonContainer style={style} onClick={closeElm}>
        &times;
    </CloseButtonContainer>;
};

export default CloseButton;