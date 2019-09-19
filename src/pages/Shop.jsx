import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadCollections } from '../store/actions/shop';

import WithSpinner from '../components/UI/WithSpinner';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';
import { createStructuredSelector } from 'reselect';
import { selectCollectionLoading } from '../store/selectors'

const Shop = ({ match, loadCollections, collectionLoading }) => {
    useEffect(() => {
        loadCollections();
    }, [loadCollections])

    const SpinnerWithCollectionOverview = WithSpinner(CollectionOverview);
    const SpinnerWithCollection = WithSpinner(Collection);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <SpinnerWithCollectionOverview isLoading={collectionLoading} {...props} />} />
            <Route path={`${match.path}/:catId`} render={(props) => <SpinnerWithCollection isLoading={collectionLoading} {...props} />} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collectionLoading: selectCollectionLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadCollections: (collections) => dispatch(loadCollections(collections))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);