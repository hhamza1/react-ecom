import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-register.styles.scss';


const SignInRegister = () => {
    return(
        <div className="sign-in-register">
             <SignIn />
             <SignUp />
        </div>
    )
}

export default SignInRegister;