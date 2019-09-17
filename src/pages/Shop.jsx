import React from 'react';
import { Route } from 'react-router-dom';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';

const Shop = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:catId`} component={Collection} />
        </div>
    );
};

export default Shop;