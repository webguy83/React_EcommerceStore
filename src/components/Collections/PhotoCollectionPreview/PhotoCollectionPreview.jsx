import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';
import { photoCollectionPreviewContainer, grid, colTitle } from './PhotoCollectionPreview.module.scss';

const PhotoCollectionPreview = ({ title, items }) => {
    return (
        <div className={photoCollectionPreviewContainer}>
            <h2 className={colTitle}>{title}</h2>
            <div className={grid}>
                {items.filter((_, i) => i < 4).map((item) => {
                    return <CollectionItem key={item.id} id={item.id} item={item} />
                })}
            </div>
        </div>
    );
};

export default PhotoCollectionPreview;