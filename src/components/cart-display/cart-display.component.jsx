import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './cart-display.styles.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import  {toggleHiddenCart} from '../../redux/cart/cart.actions';

const CartDisplay = ({cartItems, history, dispatch}) => {
    return(
        <div className="cart-display">
            <div className="cart-items">
                {
                    cartItems.length 
                    ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                    : (<span class="empty-cart">The cart is empty</span>)
                }
            </div>
            <CustomBtn onClick={() => 
                {
                    history.push("/checkout");
                    dispatch(toggleHiddenCart());
                }}>go to checkout
            </CustomBtn>
        </div>
    );
}


const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDisplay));