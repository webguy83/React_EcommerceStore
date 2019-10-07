import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../components/UI/Spinner';
import { ShopContext } from '../contexts/shop';
import CollectionItem from '../components/Collections/CollectionItem';
import styled from 'styled-components/macro';
import { getCollection } from '../helpers/generic'

const CollectionContainer = styled.div`
    & .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 3rem;
        margin-bottom: 5rem;
    }

    & .title {
        margin-bottom: 1.3rem;
        grid-column: 1 / -1;
    }
`

const Collection = ({ match }) => {
    const { collections, loading } = useContext(ShopContext);
    if (loading || collections === null) {
        return <Spinner />
    } else {
        const collection = getCollection(collections, match.params.catId);
        if(!collection) {
            return <Redirect to="/" />
        }
        const { items } = collection;
        return (
            <CollectionContainer>
                <h2 className="title">{collection.title}</h2>
                <div className="grid">
                    {items.map((item) => {
                        return <CollectionItem key={item.id} id={item.id} item={item} />
                    })}
                </div>
            </CollectionContainer>
        );
    }
};

export default Collection;