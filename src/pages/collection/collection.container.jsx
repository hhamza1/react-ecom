import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStructuredSelector} from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import LoadSpinner from '../../components/load-spinner/load-spinner.component';
import CollectionPage from '../collection/collection.component';


const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    LoadSpinner
)(CollectionPage);

export default CollectionPageContainer;
