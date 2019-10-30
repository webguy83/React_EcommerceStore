import React from 'react';
import styled from 'styled-components/macro';

// css
const SpinnerContainer = styled.div`
    position: absolute;
    left: calc(50% - 4.5rem);
    top: calc(50% - 4.5rem);

    .loader {
        border: .8rem solid #f3f3f3;
        border-top: .8rem solid var(--prim);
        border-radius: 50%;
        width: 6.4rem;
        height: 6.4rem;
        animation: spin 2s linear infinite;
    }
      
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
// jsx

const Spinner = () => {
    return <SpinnerContainer>
        <div className="loader"></div>
    </SpinnerContainer>
};

export default Spinner;