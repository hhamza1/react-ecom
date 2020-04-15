import React, {Component} from 'react';
import CustomBtn from '../custom-btn/custom-btn.component';
import FormInput from '../form-input/form-input.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';



class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password :'',
            confirmedPassword :''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmedPassword } = this.state; 

        if(password !== confirmedPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName : '',
                email: '',
                password :'',
                confirmedPassword :''
            });
        }
        catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }


    render() {
        const { displayName, email, password, confirmedPassword } = this.state; 
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up using your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        label="full name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmedPassword"
                        type="password"
                        onChange={this.handleChange}
                        value={confirmedPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomBtn type="submit">sign up</CustomBtn>
                </form>
            </div>
        );
    }
}
 
export default SignUp;