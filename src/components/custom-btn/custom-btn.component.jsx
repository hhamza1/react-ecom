import React from 'react';
import './custom-btn.styles.scss';


const CustomBtn = ({children, isGoogleSignInBtn,...otherProps}) => {
    return (
        <button className={`${isGoogleSignInBtn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomBtn;