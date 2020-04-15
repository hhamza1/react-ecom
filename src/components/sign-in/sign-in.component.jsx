import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }
        catch(error) {
            console.log(error.message);
        }
    }
    
    handleChange = e => {
        const {value, name } = e.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <div className="btn-group">
                    <CustomBtn type="submit">sign in</CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} isGoogleSignInBtn>sign in with google</CustomBtn>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;