import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import './cart.styles.scss';

import { toggleHiddenCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';



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

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);