import React, { Component } from 'react';
import{
  Link,
  withRouter,
} from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './SignUp.css'
import logo from '../images/logo.png'

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm  history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  paswordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () =>({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const{
      username,
      email,
      passwordOne,
    } = this.state;

    const{
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const{
      username,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (

      <div>
        <img className='logo1' src={logo} alt="Logo" />

        <form className='sign-up-box' onSubmit ={this.onSubmit}>

        <p>Enter your details below</p>

       

          <div className='textbox'>
            <i className="fas fa-user-astronaut"></i>
            <input value={username} onChange={event => this.setState(byPropKey('username', event.target.value))} type='text' placeholder='Full Name' />
          </div>

          <div className='textbox'>
          <i className="fa fa-envelope" aria-hidden="true"></i>
            <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type='text' placeholder='Email Address' /> 
          </div>

          <div className='textbox'>
            <i className="fas fa-lock"></i>
            <input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} type='password' placeholder='Password' />
          </div>

          <div className='textbox'>
            <i className="fas fa-lock"></i>
            <input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} type='password' placeholder='Confirm Password' />
          </div>
 

          <button disabled={isInvalid} className='btn3 info' type="submit">Get PopIn</button>
          

        </form>
      </div>

    );
  }
}

const SignUpLink = () =>


  <div className="signUpLink">
    <p>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  </div>

export default withRouter(SignUpPage);

export{
  SignUpForm,
  SignUpLink,
};