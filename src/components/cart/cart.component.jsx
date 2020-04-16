import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import './cart.styles.scss';

import { toggleHiddenCart } from '../../redux/cart/cart.actions';



const Cart = ({toggleHiddenCart}) => {
    return(
        <div className="cart" onClick={toggleHiddenCart}>
            <CartIcon className="cart-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

export default connect(null, mapDispatchToProps)(Cart);