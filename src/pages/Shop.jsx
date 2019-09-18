import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../store/actions/shop';

import Collection from './Collection';
import CollectionOverview from '../components/Collections/CollectionOverview';

import { firestore, mapCollectionsToFirebaseSnapShot } from '../helpers/firebase';

const Shop = ({ match, updateCollections }) => {
    useEffect(() => {
        const colRef = firestore.collection('collections');

        const unsubscribe = colRef.onSnapshot(async snapShot => {
            const collections = mapCollectionsToFirebaseSnapShot(snapShot);
            updateCollections(collections);
        })

        return () => {
            unsubscribe();
        }
    }, [updateCollections])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:catId`} component={Collection} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collections) => dispatch(updateCollections(collections))
    }
}

export default connect(null, mapDispatchToProps)(Shop);