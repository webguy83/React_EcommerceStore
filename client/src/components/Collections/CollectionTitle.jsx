import React from 'react';
import { countryFlagCodes, lowerCaseCountry } from '../../helpers/generic';
import styled from 'styled-components/macro';

const CollectionTitleContainer = styled.div`  
    display: flex;
    align-items: center;
    
    & .flag {
        margin-left: 1rem;
    }
`

const CollectionTitle = ({ title }) => {
    const countryFlag = countryFlagCodes[lowerCaseCountry(title)];
    return (
        <CollectionTitleContainer>
            <h2 className="title">{title}</h2>
            <img className="flag" src={`https://www.countryflags.io/${countryFlag}/flat/48.png`} alt={`Country Flag: ${countryFlag}`} />
        </CollectionTitleContainer>
    );
};

export default CollectionTitle;