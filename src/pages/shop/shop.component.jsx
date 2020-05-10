import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import LoadSpinner from '../../components/load-spinner/load-spinner.component';


import { fetchCollectionsStartAsynch } from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = LoadSpinner(CollectionsOverview);
const CollectionPageWithSpinner= LoadSpinner(CollectionPage);

class ShopPage extends Component{

    componentDidMount() {
        const {fetchCollectionsStartAsynch} = this.props;
        fetchCollectionsStartAsynch();
    }

    render() {
        const { match, isFetching } = this.props

        return(
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
            </div>
        );    
    }
}


const mapStateToProps = createStructuredSelector({
    isFetching : selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsynch: () => dispatch(fetchCollectionsStartAsynch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);