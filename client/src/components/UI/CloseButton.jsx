import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/macro';

const CloseButtonContainer = styled.div`
    ${({ style }) => style}
    cursor: pointer;
    
    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }

`

const CloseButton = ({ closeElm, style }) => {
    return <CloseButtonContainer style={style} onClick={closeElm}>
        <FontAwesomeIcon icon={faTimesCircle} size="3x" />
    </CloseButtonContainer>;
};

export default CloseButton;