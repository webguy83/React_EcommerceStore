import React from 'react';
import { withRouter } from 'react-router-dom';

import { lowerCaseCountry } from '../../helpers/generic';

import { shopItemContainer, shopItemBackground, content, big } from './ShopItem.module.scss';

const ShopItem = ({ title, image, size, history, match }) => {
    return (
        <div className={`${size === "big" ? big : null} ${shopItemContainer}`} onClick={() => history.push(`${match.url}${lowerCaseCountry(title)}`)} >
            <div style={{
                backgroundImage: `url(${image})`
            }} className={shopItemBackground} />
            <div className={content}>
                <h2>{title}</h2>
                <p>Shop for photos now!</p>
            </div>
        </div >
    );
};

export default withRouter(ShopItem);