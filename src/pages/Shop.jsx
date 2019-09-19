import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadCollections } from '../store/actions/shop';

import WithSpinner from '../components/UI/WithSpinner';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../store/selectors'

const Shop = ({ match, loadCollections, isCollectionsLoaded }) => {
    useEffect(() => {
        loadCollections();
    }, [loadCollections])

    const SpinnerWithCollectionOverview = WithSpinner(CollectionOverview);
    const SpinnerWithCollection = WithSpinner(Collection);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <SpinnerWithCollectionOverview isLoading={!isCollectionsLoaded} {...props} />} />
            <Route path={`${match.path}/:catId`} render={(props) => <SpinnerWithCollection isLoading={!isCollectionsLoaded} {...props} />} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadCollections: () => dispatch(loadCollections())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);