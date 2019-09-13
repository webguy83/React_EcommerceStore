import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../../store/selectors';

import PhotoCollectionPreview from '../PhotoCollectionPreview/PhotoCollectionPreview';

const CollectionOverview = ({ shopData }) => {
    return (
        shopData.map(({ id, title, items }) => {
            return <PhotoCollectionPreview key={id} title={title} items={items} />
        })
    );
};

const mapStateToProps = createStructuredSelector({
    shopData: selectShopData
});


export default connect(mapStateToProps)(CollectionOverview);