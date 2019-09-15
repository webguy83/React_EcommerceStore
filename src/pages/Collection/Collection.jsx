import React from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../store/selectors';

import CollectionItem from '../../components/Collections/CollectionItem/CollectionItem';

import { collectionContainer, title, grid } from './Collection.module.scss';

const Collection = ({ collection }) => {
    if (collection === undefined) {
        return <Redirect to="/" />
    } else {
        const { items } = collection;
        return (
            <div className={collectionContainer}>
                <h2 className={title}>{collection.title}</h2>
                <div className={grid}>
                    {items.map((item) => {
                        return <CollectionItem key={item.id} id={item.id} item={item} />
                    })}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.catId)(state)
    }
}

export default connect(mapStateToProps)(Collection);