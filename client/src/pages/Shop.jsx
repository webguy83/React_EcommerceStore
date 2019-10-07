import React from 'react';
import { Route } from 'react-router-dom';

import ShopProvider from '../contexts/shop';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';

const Shop = ({ match }) => {
    return (
        <ShopProvider>
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:catId`} component={Collection} />
            </div>
        </ShopProvider>
    );
};

export default Shop;