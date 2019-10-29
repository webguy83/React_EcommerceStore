import React from 'react';
import styled from 'styled-components/macro';

// css

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(24rem,1fr));
    grid-auto-rows: calc(43vh - 4.7rem);
    grid-gap: 3rem;
    margin-bottom: 5rem;

    ${({props}) => props}
`
// jsx

const CollectionGrid = ({ children, ...props }) => <Grid {...props}>{children}</Grid>

export default CollectionGrid;