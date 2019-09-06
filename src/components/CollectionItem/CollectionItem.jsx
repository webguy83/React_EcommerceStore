import React from 'react';
import CustomButton from '../UI/CustomButton/CustomButton';
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
            <CustomButton addToCart value="Add to Cart" />
        </div>
    );
};

export default CollectionItem;