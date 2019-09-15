import React from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../store/selectors';

const Collection = ({ collection }) => {
    if (collection === undefined) {
        return <Redirect to="/" />
    } else {
        return (
            <div>
                <h1>{collection.title}</h1>
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