import {connect} from 'react-redux';
import {compose} from 'redux';

import  {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

import LoadSpinner from '../load-spinner/load-spinner.component';
import CollectionsOverview from './collections-overview.component';




const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps, null),
    LoadSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer;

