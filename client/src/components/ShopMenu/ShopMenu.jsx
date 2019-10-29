import React, { useContext } from 'react';
import { lowerCaseCountry } from '../../helpers/generic';
import ShopItem from '../ShopItem';
import { ShopContext } from '../../contexts/shop';
import { convertCollectionsToArray } from '../../helpers/generic';
import Spinner from '../UI/Spinner';
import CollectionGrid from '../Collections/CollectionGrid';

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
        const largestImage = images["large"]; // the largest regular image
        const wideImages = images["wideLarge"] ? [images["wideLarge"], images["wideSmall"]] : null; // add wide images if want a wide cover
        const size = sizes[lowerCaseCountry(title)]; // specifiy sizes for the specific country for wide image
        return <ShopItem key={id} title={title} image={largestImage} size={size} wideImages={wideImages} />
    });

    return (
        <CollectionGrid style={{ gridAutoFlow: "dense" }}>
            {loading ? <Spinner /> : mappedCollections}
        </CollectionGrid>
    );
};

export default ShopMenu;