import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { collectionsLoading } from '../store/actions/shop';

import CollectionContainer from './Collection/CollectionContainer';
import CollectionOverviewContainer from '../components/Collections/CollectionOverviewContainer';

const Shop = ({ match, collectionsLoading }) => {
    useEffect(() => {
        collectionsLoading();
    }, [collectionsLoading])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:catId`} component={CollectionContainer} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        collectionsLoading: () => dispatch(collectionsLoading())
    }
}

export default connect(null, mapDispatchToProps)(Shop);