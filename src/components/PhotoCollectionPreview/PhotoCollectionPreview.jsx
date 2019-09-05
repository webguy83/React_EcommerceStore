import React from 'react';

import CollectonItem from '../CollectionItem/CollectionItem';
import { photoCollectionPreviewContainer, photoCollectionPreviewContainerGrid, photoCollectionPreviewContainerTitle } from './PhotoCollectionPreview.module.scss';

const PhotoCollectionPreview = ({ title, items }) => {
    return (
        <div className={photoCollectionPreviewContainer}>
            <h2 className={photoCollectionPreviewContainerTitle}>{title}</h2>
            <div className={photoCollectionPreviewContainerGrid}>
                {items.filter((_, i) => i < 4).map(({ id, imageUrl, name, price }) => {
                    return <CollectonItem key={id} imageUrl={imageUrl} name={name} price={price} />
                })}
            </div>
        </div>
    );
};

export default PhotoCollectionPreview;