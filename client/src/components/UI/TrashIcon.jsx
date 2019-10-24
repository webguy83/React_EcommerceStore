import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components/macro';

const TrashIconContainer = styled.span`
    cursor: pointer;

    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }
`

const TrashIcon = ({ removeItem }) => {
    return (
        <TrashIconContainer onClick={removeItem}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </TrashIconContainer>
    );
};

export default TrashIcon;