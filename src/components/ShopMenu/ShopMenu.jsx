import React from 'react';
import styled from 'styled-components/macro';
import ShopItem from '../ShopItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../store/selectors';

const ShopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: calc(47vh - 4.7rem);
    grid-gap: 3rem;
    grid-auto-flow: dense;
`

const ShopMenu = ({ sections }) => {
    return (
        <ShopMenuContainer>
            {sections.map(({ id, title, image, size }) => {
                return <ShopItem key={id} title={title} image={image} size={size} />
            })}
        </ShopMenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(ShopMenu);