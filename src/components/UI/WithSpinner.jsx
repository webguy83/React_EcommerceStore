import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

// css
const SpinnerContainer = styled.div`
    position: absolute;
    left: calc(50% - 4.5rem);
    top: calc(50% - 4.5rem);
`
// jsx

const WithSpinner = (WrappedComp) => {
    return ({ isLoading, ...otherProps }) => {
        return isLoading ?
            <SpinnerContainer>
                <FontAwesomeIcon spin icon={faCompass} size="9x" />
            </SpinnerContainer>
            :
            <WrappedComp {...otherProps} />
    }
};

export default WithSpinner;