import React from 'react';
import {
    photoCollectionPreviewContainerItem,
    photoCollectionPreviewContainerItemFooter,
    photoCollectionPreviewContainerImage
} from './CollectionItem.module.scss';

const CollectionItem = ({ imageUrl, price, name }) => {
    return (
        <div className={photoCollectionPreviewContainerItem}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className={photoCollectionPreviewContainerImage}>

            </div>
            <div className={photoCollectionPreviewContainerItemFooter}>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;