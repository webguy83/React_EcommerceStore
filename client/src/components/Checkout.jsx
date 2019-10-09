import React, { useContext } from 'react';
import styled, { css } from 'styled-components/macro';
import { CartContext } from '../contexts/cart';

import TrashIcon from './UI/TrashIcon';
import AddSubtractIcon from './UI/AddSubtractIcon';

// css
const CheckoutContainer = styled.table`
    width: 100%;
    border-collapse: collapse;

    & tr {
        border-bottom: .1rem solid white;
    }

    & th {
        font-size: 1.7rem;
        padding: 1rem;
    }

    &>tbody {
        text-align: center;
        font-size: 1.5rem;

        & .thumb {
            width: 20%;
            height: 10rem;
            background-position: center;
            background-size: cover;
        }

        &>tr:nth-child(odd) {
            background-color: #f7f7f7;
        }
    }

    & .tblMobileFoot {
        text-align: right;
        font-size: 1.5rem;

        & td {
            padding: 1rem 0;
        }
    }

    & .totalPrice {
        font-weight: bold;
        font-size: 2rem;
        border-bottom: .1rem solid black;
        letter-spacing: .2rem;
    }

    & .qtyGroup {
        display: flex;
        justify-content: center;

        &>* {
            margin: 0 .5rem;
        }
    }

    ${({ mobile }) => {
        return mobile ? css`
        text-align: left;

        & th {
            width: 5%;
        }

        & .borderRow {
            height: 3rem;
            background-color: #6d6d6d;
        }

        @media(min-width: 500px) {
            display: none;
        }
        ` : css`
        @media (max-width: 499px) {
            display: none;
        }
        `
    }}
`
// jsx 
const Checkout = ({ cartItemsTotal }) => {
    const { addItemToCart, subtractItemFromCart, removeItemFromCart, cartItems } = useContext(CartContext);
    return (
        <>
            <CheckoutContainer>
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
                            const { id, imageUrl, name, qty, price } = item;
                            return <tr key={id}>
                                <td className="thumb" style={{
                                    backgroundImage: `url(${imageUrl})`,
                                }}></td>
                                <td>{name}</td>
                                <td>
                                    <div className="qtyGroup">
                                        <AddSubtractIcon addOrSubtract={() => addItemToCart(item)} addIcon />
                                        <span>{qty}</span>
                                        <AddSubtractIcon disabled={qty > 1 ? false : true} addOrSubtract={() => qty > 1 ? subtractItemFromCart(item) : undefined} />
                                    </div>
                                </td>
                                <td>${price * qty}</td>
                                <td><TrashIcon removeItem={() => removeItemFromCart(item)} /></td>
                            </tr>
                        })
                        :
                        <tr>
                            <td colSpan="5">You have no items in your cart yet</td>
                        </tr>}
                </tbody>
                <tfoot className="tblMobileFoot">
                    <tr>
                        <td colSpan="5"><span className="totalPrice">Total: <span>${cartItemsTotal}</span></span></td>
                    </tr>
                </tfoot>
            </CheckoutContainer>

            <CheckoutContainer mobile>
                <tbody>
                    {cartItems.length > 0 ?
                        cartItems.map(item => {
                            const { id, imageUrl, name, qty, price } = item;
                            return <React.Fragment key={id}>
                                <tr>
                                    <th>Product</th>
                                    <td className="thumb" style={{
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
                                        <div className="qtyGroup">
                                            <AddSubtractIcon addOrSubtract={() => addItemToCart(item)} addIcon />
                                            <span>{qty}</span>
                                            <AddSubtractIcon disabled={qty > 1 ? false : true} addOrSubtract={() => qty > 1 ? subtractItemFromCart(item) : undefined} />
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>${price * qty}</td>
                                </tr>
                                <tr>
                                    <th>Remove</th>
                                    <td><TrashIcon removeItem={() => removeItemFromCart(item)} /></td>
                                </tr>
                                <tr className="borderRow">
                                    <td colSpan="2"></td>
                                </tr>
                            </React.Fragment>
                        })
                        :
                        <tr >
                            <td colSpan="2">No cart items!</td>
                        </tr>
                    }
                    <tr className="tblMobileFoot">
                        <td colSpan="2"><span className="totalPrice">Total: <span>${cartItemsTotal}</span></span></td>
                    </tr>
                </tbody>
            </CheckoutContainer>
        </>
    );
};

export default Checkout;