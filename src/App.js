import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInRegister from './pages/signin-register/signin-register.component';
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }


  render() { 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInRegister} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
