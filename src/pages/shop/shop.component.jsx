import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOPDATA from './shop.data';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }

    render(){
        const {collections} = this.state;
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
}

export default ShopPage;