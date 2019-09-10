import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemAmount, selectIconCartHidden } from '../../../store/selectors';
import { createStructuredSelector } from 'reselect';

import { toggleMiniCartHidden } from '../../../store/actions/minicart';

import {
    IconContainer,
    counter
}
    from './Icon.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ toggleMiniCartHidden, itemCount, iconCartHidden }) => {
    return (
        iconCartHidden ? null : <div className={IconContainer} onClick={toggleMiniCartHidden}>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <span className={counter}>{itemCount}</span>
        </div>
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