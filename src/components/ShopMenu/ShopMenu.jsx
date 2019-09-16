import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../store/selectors';

import { shopMenuContainer } from './ShopMenu.module.scss';

const ShopMenu = ({ sections }) => {
    return (
        <div className={shopMenuContainer}>
            {sections.map(({ id, title, image, size }) => {
                return <ShopItem key={id} title={title} image={image} size={size} />
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(ShopMenu);