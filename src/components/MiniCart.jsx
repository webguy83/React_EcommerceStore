import React from 'react';
import styled, { keyframes } from 'styled-components';
import CustomButton from './UI/CustomButton';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../store/selectors';
import { createStructuredSelector } from 'reselect';
import { toggleMiniCartHidden } from '../store/actions/minicart';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';

// css

const showCart = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const MiniCartContainer = styled.div`
    position: absolute;
    right: 0;
    top: 7rem;
    background-color: white;
    border: .1rem solid black;
    padding: 2rem;
    z-index: 1;
    animation: ${showCart} .3s ease-in-out;

    & > button {
        margin: 0 auto;
        display: block;
    }

    & > h2 {
        text-align: center;
    }
`

const Items = styled.div`
    max-height: 30rem;
    max-width: 35rem;
    overflow-y: scroll;
    margin-bottom: 1.5rem;
`

const EmptyMiniCart = styled.div`
    min-height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmptyMessage = styled.p`
    font-size: 1.9rem;
`

// jsx

const MiniCart = ({ cartItems, history, dispatch }) => {
    return (
        <MiniCartContainer>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ?
                <>
                    <Items>
                        {cartItems.map(item => {
                            return <ShoppingCartItem key={item.id} item={item} />
                        })}
                    </Items>
                    <CustomButton click={() => {
                        history.push("/checkout");
                        dispatch(toggleMiniCartHidden());
                    }} value="Checkout" />
                </>
                :
                <EmptyMiniCart>
                    <EmptyMessage>Your shopping cart is empty!</EmptyMessage>
                </EmptyMiniCart>}
        </MiniCartContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(MiniCart));