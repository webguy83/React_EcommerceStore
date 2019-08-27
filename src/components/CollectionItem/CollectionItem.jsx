import React from 'react';
import './CollectionItem.scss'

export default ({ imageUrl, price, name }) => {
    return (
        <div className="photo-collection-preview-item">
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className="photo-collection-preview-image">

            </div>
            <div className="photo-collection-preview-item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};