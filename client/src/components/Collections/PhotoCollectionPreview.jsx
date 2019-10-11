import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import styled from 'styled-components/macro';
import { convertCartItemsToObj } from '../../helpers/cart';

import CollectionItem from './CollectionItem';

const PhotoCollectionPreviewContainer = styled.div`
    & .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 3rem;
        margin-bottom: 1rem;
    }

    & .colTitle {
        margin-bottom: 1.3rem;
        grid-column: 1 / -1;
    }
`

const PhotoCollectionPreview = ({ title, items }) => {
    const { cartItems } = useContext(CartContext);
    const cartItemsObj = convertCartItemsToObj(cartItems);

    return (
        <PhotoCollectionPreviewContainer>
            <h2 className="colTitle">{title}</h2>
            <div className="grid">
                {items.filter((_, i) => i < 4).map((item) => {
                    return <CollectionItem key={item.id}
                        id={item.id}
                        item={item}
                        itemPurchased={cartItemsObj[item.id] ? true : false} />
                })}
            </div>
        </PhotoCollectionPreviewContainer>
    );
};

export default PhotoCollectionPreview;