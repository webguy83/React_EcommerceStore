import React from 'react';

import CollectonItem from '../CollectionItem/CollectionItem';
import './PhotoCollectionPreview.scss';

export default ({ title, items }) => {
    return (
        <div className="photo-collection-preview">
            <h2 className="photo-collection-preview-title">{title}</h2>
            <div className="photo-collection-preview-grid">
                {items.filter((_, i) => i < 4).map(({ id, imageUrl, name, price }) => {
                    return <CollectonItem key={id} imageUrl={imageUrl} name={name} price={price} />
                })}
            </div>
        </div>
    );
};