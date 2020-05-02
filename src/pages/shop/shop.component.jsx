import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
    return(
        <div className="shop-page">
            {
                collections.map(({id, ...collectionProps}) => (
                    <PreviewCollection key={id} {...collectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        collections: selectCollections
});

export default connect(mapStateToProps, null)(ShopPage);