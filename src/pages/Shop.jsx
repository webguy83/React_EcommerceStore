import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadCollections } from '../store/actions/shop';

import CollectionContainer from './Collection/CollectionContainer';
import CollectionOverviewContainer from '../components/Collections/CollectionOverviewContainer';

const Shop = ({ match, loadCollections }) => {
    useEffect(() => {
        loadCollections();
    }, [loadCollections])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:catId`} component={CollectionContainer} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCollections: () => dispatch(loadCollections())
    }
}

export default connect(null, mapDispatchToProps)(Shop);