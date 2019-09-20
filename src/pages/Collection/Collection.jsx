import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/selectors';
import CollectionItem from '../../components/Collections/CollectionItem';
import styled from 'styled-components/macro';

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

const Collection = ({ collection }) => {
    if (collection === undefined) {
        return <Redirect to="/" />
    } else {
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

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.catId)(state)
    }
}

export default connect(mapStateToProps)(Collection);