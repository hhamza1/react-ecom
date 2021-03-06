import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStartAsynch } from '../../redux/shop/shop.actions';




class ShopPage extends Component{
    componentDidMount() {
        const {fetchCollectionsStartAsynch} = this.props;
        fetchCollectionsStartAsynch();
    }

    render() {
        const { match } = this.props

        return(
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer} />
            </div>
        );    
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsynch: () => dispatch(fetchCollectionsStartAsynch())
})

export default connect(null, mapDispatchToProps)(ShopPage);