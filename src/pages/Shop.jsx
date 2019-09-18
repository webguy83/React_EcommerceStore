import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../store/actions/shop';

import WithSpinner from '../components/UI/WithSpinner';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';

import { firestore, mapCollectionsToFirebaseSnapShot } from '../helpers/firebase';

const Shop = ({ match, updateCollections }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const colRef = firestore.collection('collections');

        const unsubscribe = colRef.onSnapshot(async snapShot => {
            setLoading(false);
            const collections = mapCollectionsToFirebaseSnapShot(snapShot);
            updateCollections(collections);
        })

        return () => {
            unsubscribe();
        }
    }, [updateCollections])

    const SpinnerWithCollectionOverview = WithSpinner(CollectionOverview);
    const SpinnerWithCollection = WithSpinner(Collection);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <SpinnerWithCollectionOverview isLoading={loading} {...props} /> } />
            <Route path={`${match.path}/:catId`} render={(props) => <SpinnerWithCollection isLoading={loading} {...props} /> } />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collections) => dispatch(updateCollections(collections))
    }
}

export default connect(null, mapDispatchToProps)(Shop);