import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectAllCollections } from '../../store/selectors';

import PhotoCollectionPreview from './PhotoCollectionPreview';

const CollectionOverview = ({ shopData }) => {
    return (
        shopData.map(({ id, title, items }) => {
            return <PhotoCollectionPreview key={id} title={title} items={items} />
        })
    );
};

const mapStateToProps = createStructuredSelector({
    shopData: selectAllCollections
});


export default connect(mapStateToProps)(CollectionOverview);