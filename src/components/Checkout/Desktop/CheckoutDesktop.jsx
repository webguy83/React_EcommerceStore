import React from 'react';

import TrashIcon from '../../UI/TrashIcon/TrashIcon';
import AddSubtractIcon from '../../UI/AddSubtractIcon/AddSubtractIcon';

import { CheckoutDesktopContainer, thumb, totalPrice, qtyGroup } from './CheckoutDesktop.module.scss';

const CheckoutDesktop = ({ cartItems, cartItemsTotal }) => {
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
                    cartItems.map(({ imageUrl, name, price, qty, id }) => {
                        return <tr key={id}>
                            <td className={thumb} style={{
                                backgroundImage: `url(${imageUrl})`,
                            }}></td>
                            <td>{name}</td>
                            <td>
                                <div className={qtyGroup}>
                                    <AddSubtractIcon addIcon />
                                    <span>{qty}</span>
                                    <AddSubtractIcon />
                                </div>
                            </td>
                            <td>${price}</td>
                            <td><TrashIcon /></td>
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

export default CheckoutDesktop;