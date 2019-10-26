import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../components/UI/Spinner';
import { ShopContext } from '../contexts/shop';
import { CartContext } from '../contexts/cart';
import { convertCartItemsToObj } from '../helpers/cart';
import CollectionItem from '../components/Collections/CollectionItem';
import styled from 'styled-components/macro';
import { getCollection } from '../helpers/generic';
import CollectionTitle from '../components/Collections/CollectionTitle';

// css
const CollectionContainer = styled.div`
    & .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
        grid-gap: 3rem;
        margin-bottom: 5rem;
    }
`
// jsx

const Collection = ({ match }) => {
    const { collections, loading } = useContext(ShopContext);
    const { cartItems } = useContext(CartContext);
    if (loading || collections === null) {
        return <Spinner />
    } else {
        const collection = getCollection(collections, match.params.catId);
        if (!collection) {
            return <Redirect to="/" />
        }
        const { items, title } = collection;
        const cartItemsObj = convertCartItemsToObj(cartItems);

        return (
            <CollectionContainer>
                <CollectionTitle title={title} />
                <div className="grid">
                    {items.map((item) => {
                        return <CollectionItem key={item.id}
                            id={item.id}
                            item={item}
                            itemPurchased={cartItemsObj[item.id] ? true : false} />
                    })}
                </div>
            </CollectionContainer>
        );
    }
};

export default Collection;