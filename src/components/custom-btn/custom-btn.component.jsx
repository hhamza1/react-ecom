import React from 'react';
import './custom-btn.styles.scss';


const CustomBtn = ({children, ...otherProps}) => {
    return (
        <button className="custom-btn" {...otherProps}>
            {children}
        </button>
    );
}

export default CustomBtn;