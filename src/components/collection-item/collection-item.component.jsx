import React from 'react';
import CustomBtn from '../custom-btn/custom-btn.component';

import './collection-item.styles.scss';


const CollectionItem  = ({id, name, price, imageUrl}) => {
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
            <CustomBtn inverted>add to cart</CustomBtn>
        </div>
    )
}


export default CollectionItem;
