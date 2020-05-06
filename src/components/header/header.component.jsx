import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import Cart from '../cart/cart.component';
import CartDisplay from '../cart-display/cart-display.component';
import { auth } from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, 
         LogoContainer, 
         OptionsContainer, 
         OptionLink, 
         OptionDiv } from './header.styles';

const Header = ({currentUser, hidden}) => {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    <div>
                        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    </div> : 
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                }
                <Cart />
            </OptionsContainer>
            { hidden ? null : <CartDisplay /> }
        </HeaderContainer>

    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectHidden
});

export default connect(mapStateToProps, null)(Header);