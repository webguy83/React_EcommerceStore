import React from 'react';

import styled from 'styled-components/macro';

const TrashIconContainer = styled.span`
    cursor: pointer;
    font-size: 2.9rem;

    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }
`

const TrashIcon = ({ removeItem }) => {
    return (
        <TrashIconContainer onClick={removeItem}>
            	&#128465;
        </TrashIconContainer>
    );
};

export default TrashIcon;