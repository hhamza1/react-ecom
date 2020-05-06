import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomBtn from '../custom-btn/custom-btn.component';

import './collection-item.styles.scss';


const CollectionItem  = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return(
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage : `url(${imageUrl})`}} 
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomBtn className="custom-btn" onClick={() => addItem(item)} inverted>add to cart</CustomBtn>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);
