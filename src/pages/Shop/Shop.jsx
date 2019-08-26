import React from 'react';
import { SHOP_DATA } from '../../data/shopData';

import PhotoCollectionPreview from '../../components/PhotoCollectionPreview/PhotoCollectionPreview';

export default () => {

    return (
        <div className="shop-page">
            {SHOP_DATA.map(({ id, title, items }) => {
                return <PhotoCollectionPreview key={id} title={title} items={items} />
            })}
        </div>
    );
};