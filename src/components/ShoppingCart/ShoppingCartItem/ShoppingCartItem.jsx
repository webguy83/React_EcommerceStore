import React from 'react';

import { ShoppingCartItemContainer, details, thumbnail, detailsName } from './ShoppingCartItem.module.scss';

const ShoppingCartItem = ({ item: { imageUrl, name, price, qty } }) => {
    return (
        <div className={ShoppingCartItemContainer}>
            <img className={thumbnail} src={imageUrl} alt={name} />
            <div className={details}>
                <div className={detailsName}>{name}</div>
                <div>
                    <span>{qty}</span> x <span>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;