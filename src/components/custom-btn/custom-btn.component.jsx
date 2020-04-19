import React from 'react';
import './custom-btn.styles.scss';


const CustomBtn = ({children, isGoogleSignInBtn, inverted,...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignInBtn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomBtn;