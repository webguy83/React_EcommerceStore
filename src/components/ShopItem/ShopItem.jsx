import React from 'react';

import './ShopItem.scss';

export default ({title, image, size}) => {
    return (
        <div style={{
            backgroundImage: `url(${image})`
        }} className={`${size} shop-item`}>
            <div className="content">
                <h2>{title}</h2>
                <p>Shop for photos now!</p>
            </div>
        </div>
    );
};