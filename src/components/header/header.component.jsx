import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import Cart from '../cart/cart.component';
import CartDisplay from '../cart-display/cart-display.component';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div>
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    </div> : 
                    <Link className="option" to='/signin'>
                        SIGN IN
                    </Link>
                }
                <Cart />
            </div>
            { hidden ? null : <CartDisplay /> }
        </div>

    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps, null)(Header);