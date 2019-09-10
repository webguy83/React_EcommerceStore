import React from 'react';

import { connect } from 'react-redux';
import { addCartItem, removeCartItem, subtractCartItem } from '../../../store/actions/cart';

import TrashIcon from '../../UI/TrashIcon/TrashIcon';
import AddSubtractIcon from '../../UI/AddSubtractIcon/AddSubtractIcon';

import { CheckoutMobileContainer, thumb, totalPrice, qtyGroup, tblMobileFoot, borderRow } from '../Checkout.module.scss';

const CheckoutMobile = ({ cartItems, cartItemsTotal, removeCartItem, addCartItem, subtractCartItem }) => {

    return (
        <table className={CheckoutMobileContainer}>
            <tbody>
                {cartItems.length > 0 ?
                    cartItems.map(item => {
                        const { id, imageUrl, name, qty, price } = item;
                        return <React.Fragment key={id}> 
                        <tr>
                            <th>Product</th>
                            <td className={thumb} style={{
                                backgroundImage: `url(${imageUrl})`
                            }}></td>
                        </tr>
                            <tr>
                                <th>Description</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Quantity</th>
                                <td>
                                    <div className={qtyGroup}>
                                        <AddSubtractIcon addOrSubtract={() => addCartItem(item)} addIcon />
                                        <span>{qty}</span>
                                        <AddSubtractIcon disabled={qty > 1 ? false : true} addOrSubtract={() => qty > 1 ? subtractCartItem(item) : undefined} />
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>${price * qty}</td>
                            </tr>
                            <tr>
                                <th>Remove</th>
                                <td><TrashIcon removeItem={() => removeCartItem(item)} /></td>
                            </tr>
                            <tr className={borderRow}>
                                <td colSpan="2"></td>
                            </tr>
                        </React.Fragment>
                    })
                    :
                    <tr >
                        <td colSpan="2">No cart items!</td>
                    </tr>
                }
                <tr className={tblMobileFoot}>
                    <td colSpan="2"><span className={totalPrice}>Total: <span>${cartItemsTotal}</span></span></td>
                </tr>
            </tbody>
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

export default connect(null, mapDispatchToProps)(CheckoutMobile);