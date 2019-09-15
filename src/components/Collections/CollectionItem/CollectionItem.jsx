import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions/cart';

import CustomButton from '../../UI/CustomButton/CustomButton';
import { colItem, footer, image } from './CollectionItem.module.scss';

const CollectionItem = ({ item, addCartItem }) => {

    const { name, imageUrl, price } = item;

    return (
        <div className={colItem}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className={image}>

            </div>
            <div className={footer}>
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