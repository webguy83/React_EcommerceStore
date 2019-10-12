import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CloseButtonStyle = {
    "cursor": "pointer"
}

const CloseButton = ({ closeElm }) => {
    return <FontAwesomeIcon icon={faTimesCircle} size="3x" style={CloseButtonStyle} onClick={closeElm} />;
};

export default CloseButton;