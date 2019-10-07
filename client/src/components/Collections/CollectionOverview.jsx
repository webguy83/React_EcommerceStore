import React, { useContext } from 'react';

import { ShopContext } from '../../contexts/shop';
import { convertCollectionsToArray } from '../../helpers/generic';
import Spinner from '../UI/Spinner';

import PhotoCollectionPreview from './PhotoCollectionPreview';

const CollectionOverview = () => {
    const { collections, loading } = useContext(ShopContext);
    const convertedCollections = convertCollectionsToArray(collections);
    const mappedCollections = convertedCollections.map(({ id, title, items }) => {
        return <PhotoCollectionPreview key={id} title={title} items={items} />
    })

    return loading ? <Spinner /> : mappedCollections;
};

export default CollectionOverview;