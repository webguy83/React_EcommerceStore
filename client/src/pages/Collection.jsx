import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../components/UI/Spinner';
import { ShopContext } from '../contexts/shop';
import { CartContext } from '../contexts/cart';
import { convertCartItemsToObj } from '../helpers/cart';
import CollectionItem from '../components/Collections/CollectionItem';
import { getCollection } from '../helpers/generic';
import CollectionTitle from '../components/Collections/CollectionTitle';
import CollectionGrid from '../components/Collections/CollectionGrid';

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
            <>
                <CollectionTitle title={title} />
                <CollectionGrid>
                    {items.map((item) => {
                        return <CollectionItem key={item.id}
                            id={item.id}
                            item={item}
                            itemPurchased={cartItemsObj[item.id] ? true : false} />
                    })}
                </CollectionGrid>
            </>
        );
    }
};

export default Collection;