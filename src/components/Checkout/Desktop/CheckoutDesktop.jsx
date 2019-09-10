import React from 'react';

import { connect } from 'react-redux';
import { addCartItem,  removeCartItem, subtractCartItem } from '../../../store/actions/cart';

import TrashIcon from '../../UI/TrashIcon/TrashIcon';
import AddSubtractIcon from '../../UI/AddSubtractIcon/AddSubtractIcon';

import { CheckoutDesktopContainer, thumb, totalPrice, qtyGroup } from './CheckoutDesktop.module.scss';

const CheckoutDesktop = ({ cartItems, cartItemsTotal, removeCartItem, addCartItem, subtractCartItem }) => {
    return (
        <table className={CheckoutDesktopContainer}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.length > 0 ?
                    cartItems.map((item) => {
                        const {id, imageUrl, name, qty, price} = item;
                        return <tr key={id}>
                            <td className={thumb} style={{
                                backgroundImage: `url(${imageUrl})`,
                            }}></td>
                            <td>{name}</td>
                            <td>
                                <div className={qtyGroup}>
                                    <AddSubtractIcon addOrSubtract={() => addCartItem(item)} addIcon />
                                    <span>{qty}</span>
                                    <AddSubtractIcon disabled={qty > 1 ? false: true} addOrSubtract={() => qty > 1 ? subtractCartItem(item) : undefined} />
                                </div>
                            </td>
                            <td>${price}</td>
                            <td><TrashIcon removeItem={() => removeCartItem(item)} /></td>
                        </tr>
                    })
                    :
                    <tr>
                        <td colSpan="5">You have no items in your cart yet</td>
                    </tr>}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5"><span className={totalPrice}>Total: <span>${cartItemsTotal}</span></span></td>
                </tr>
            </tfoot>
        </table>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCartItem: (item) => {
            dispatch(removeCartItem(item))
        },
        addCartItem: (item) => {
            dispatch(addCartItem(item))
        },
        subtractCartItem: (item) => {
            dispatch(subtractCartItem(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(CheckoutDesktop);