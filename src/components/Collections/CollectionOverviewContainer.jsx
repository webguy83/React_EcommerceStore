import { connect } from 'react-redux';
import { compose } from 'redux';
import WithSpinner from '../UI/WithSpinner';

import CollectionOverview from './CollectionOverview';
import { createStructuredSelector } from 'reselect';

import { selectCollectionLoading } from '../../store/selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionLoading
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;




