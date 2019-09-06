import React from 'react';

import CollectonItem from '../CollectionItem/CollectionItem';
import { photoCollectionPreviewContainer, photoCollectionPreviewContainerGrid, photoCollectionPreviewContainerTitle } from './PhotoCollectionPreview.module.scss';

const PhotoCollectionPreview = ({ title, items }) => {
    return (
        <div className={photoCollectionPreviewContainer}>
            <h2 className={photoCollectionPreviewContainerTitle}>{title}</h2>
            <div className={photoCollectionPreviewContainerGrid}>
                {items.filter((_, i) => i < 4).map((item) => {
                    return <CollectonItem key={item.id} id={item.id} item={item} />
                })}
            </div>
        </div>
    );
};

export default PhotoCollectionPreview;