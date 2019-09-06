import React from 'react';
import {
    IconContainer,
    counter
}
    from './Icon.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ toggleMiniCartHidden }) => {
    return (
        <div className={IconContainer} onClick={toggleMiniCartHidden}>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <span className={counter}>0</span>
        </div>
    );
};

export default Icon;