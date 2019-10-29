import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { convertCartItemsToObj } from '../../helpers/cart';
import { Link, withRouter } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import { lowerCaseCountry } from '../../helpers/generic';
import CollectionTitle from './CollectionTitle';
import CollectionGrid from './CollectionGrid';

const PhotoCollectionPreview = ({ title, items, match }) => {
    const { cartItems } = useContext(CartContext);
    const cartItemsObj = convertCartItemsToObj(cartItems);

    return (
        <>
            <CollectionTitle title={title} />
            <CollectionGrid style={{ marginBottom: "1rem" }}>
                {items.filter((_, i) => i < 4).map((item) => {
                    return <CollectionItem key={item.id}
                        id={item.id}
                        item={item}
                        itemPurchased={cartItemsObj[item.id] ? true : false} />
                })}
            </CollectionGrid>
            <Link to={`${match.url}/${lowerCaseCountry(title)}`} style={{
                width: "100%",
                display: "block",
                textAlign: "center",
                fontSize: "1.4rem"
            }}>{`View all of ${title}`}</Link>
        </>
    );
};

export default withRouter(PhotoCollectionPreview);