import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SignIn.css'

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import logo from '../images/logo.png'


const SignInPage = ({ history }) =>
  <div className='signin'>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
      <div>
        <img className='logo1' src={logo} alt="Logo" />

        <form className='login-box' onSubmit ={this.onSubmit}>

       

          <div className='textbox'>
            <i className="fas fa-user-astronaut"></i>
            <input className='email' value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" placeholder="Email Address" />
          </div>

          <div className='textbox'>
            <i className="fas fa-lock"></i>
            <input className='password' value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password" placeholder="Password" />
          </div>

        

          <button disabled={isInvalid} className='btn1 info' type="submit">Sign In</button>
              { error &&<p>{error.message}</p> }
          

          

        </form>
      </div>


/* 
      <form className='login-box' onSubmit ={this.onSubmit}>

        <h1>Login</h1>

          <div className='textbox'>

        

        <input className='email' value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" placeholder="Email Address" />
        <input className='password' value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password" placeholder="Password" />
        <button className='submit' disabled={isInvalid} type="submit">Sign In</button>
        { error && <p>{error.message}</p> }
      </form> */
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};