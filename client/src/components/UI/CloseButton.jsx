import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CloseButton = ({ closeElm, style }) => {
    return <FontAwesomeIcon icon={faTimesCircle} size="3x" style={{ "cursor": "pointer", ...style }} onClick={closeElm} />;
};

export default CloseButton;