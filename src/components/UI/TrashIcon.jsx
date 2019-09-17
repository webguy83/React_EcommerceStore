import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components/macro';

const TrashIconContainer = styled.span`
    &:hover {
        cursor: pointer;
        color: #F4B400;
        transition: all .3s ease-in-out;
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