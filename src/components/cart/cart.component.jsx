import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import './cart.styles.scss';

import { toggleHiddenCart } from '../../redux/cart/cart.actions';



const Cart = ({toggleHiddenCart, itemCount}) => {
    return(
        <div className="cart" onClick={toggleHiddenCart}>
            <CartIcon className="cart-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

const mapStateToProps = ({cart : {cartItems}}) => ({
    itemCount : cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);