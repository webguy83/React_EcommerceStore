import React, { useContext } from 'react';
import { lowerCaseCountry } from '../../helpers/generic';
import styled from 'styled-components/macro';
import ShopItem from '../ShopItem';
import { ShopContext } from '../../contexts/shop';
import { convertCollectionsToArray } from '../../helpers/generic';
import Spinner from '../UI/Spinner';

const ShopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: calc(43vh - 4.7rem);
    grid-gap: 3rem;
    grid-auto-flow: dense;
`

const sizes = {
    china: "big",
    india: "small",
    malaysia: "small",
    thailand: "small",
    southkorea: "small"
}

const ShopMenu = () => {
    const { collections, loading } = useContext(ShopContext);
    const convertedCollections = convertCollectionsToArray(collections);
    const mappedCollections = convertedCollections.map(({ id, title, items }) => {
        const images = items[0].images; // grab the first image from each collection for the home page cover
        const largestImage = images ? images["large"] : ""; // to be modified - the largest regular image
        const wideImages = images ? [images["wideLarge"], images["wideSmall"]] : []; // add wide images if want a wide cover
        const size = sizes[lowerCaseCountry(title)]; // specifiy sizes for the specific country for wide image
        return <ShopItem key={id} title={title} image={largestImage} size={size} wideImages={wideImages} />
    });

    return (
        <ShopMenuContainer>
            {loading ? <Spinner /> : mappedCollections}
        </ShopMenuContainer>
    );
};

export default ShopMenu;