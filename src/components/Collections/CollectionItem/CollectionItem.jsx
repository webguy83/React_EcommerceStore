import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions/cart';

import CustomButton from '../../UI/CustomButton/CustomButton';
import {
    photoCollectionPreviewContainerItem,
    photoCollectionPreviewContainerItemFooter,
    photoCollectionPreviewContainerImage
} from './CollectionItem.module.scss';

const CollectionItem = ({ item, addCartItem }) => {

    const { name, imageUrl, price } = item;

    return (
        <div className={photoCollectionPreviewContainerItem}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className={photoCollectionPreviewContainerImage}>

            </div>
            <div className={photoCollectionPreviewContainerItemFooter}>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton click={() => addCartItem(item)} addToCart value="Add to Cart" />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCartItem: (item) => {
            dispatch(addCartItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);