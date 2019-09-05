import React from 'react';
import { ShoppingCartIconContainer, 
         counter } 
from './ShoppingCartIcon.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ShoppingCartIcon = () => {
    return (
        <div className={ShoppingCartIconContainer}>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <span className={counter}>0</span>
        </div>
    );
};

export default ShoppingCartIcon;