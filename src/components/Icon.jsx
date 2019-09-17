import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';

import { selectCartItemAmount, selectIconCartHidden } from '../store/selectors';
import { createStructuredSelector } from 'reselect';

import { toggleMiniCartHidden } from '../store/actions/minicart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
`

const Counter = styled.span`
    position: absolute;
    left: 8%;
    top: 14%;
    color: white;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Icon = ({ toggleMiniCartHidden, itemCount, iconCartHidden }) => {
    return (
        iconCartHidden ? null : <IconContainer onClick={toggleMiniCartHidden}>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <Counter>{itemCount}</Counter>
        </IconContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemAmount,
    iconCartHidden: selectIconCartHidden
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMiniCartHidden: () => dispatch(toggleMiniCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Icon);