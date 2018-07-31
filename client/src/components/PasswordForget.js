import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PasswordForget.css'
import logo from '../images/logo.png'

import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (

      <div>
        <img className='logo1' src={logo} alt="Logo" />
        <p className="help" >Forget your password?</p>

        <form className='forgot-box' onSubmit={this.onSubmit}>


          <div className="textbox">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <input className="email" value={this.state.email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" placeholder="Email Address" />
          </div>
      

          <button disabled={isInvalid} className="btn2 info" type="submit"> Password Reset Link </button>
              { error && <p>{error.message}</p> }      
        </form>     
      </div>


    );
  }
}

const PasswordForgetLink = () =>
<div className="cetnerbtm">
  <p className="forgotpw">
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>
</div>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
