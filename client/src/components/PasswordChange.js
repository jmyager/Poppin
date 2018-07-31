import React, { Component } from 'react';
import './PasswordChange.css';
import logo from '../images/logo.png'

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (

      <div>

        <img className='logo1' src={logo} alt="Logo" />
        
        
        <p>Reset your password</p>


        <form className="password-forget-box" onSubmit={this.onSubmit}>

    

          <div className='textbox'>
            <i className="fa fa-lock" aria-hidden="true"></i>
            <input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} type="password" placeholder="New Password" />
          </div>


          <div className='textbox'>
            <i className="fa fa-lock" aria-hidden="true"></i>
            <input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} type="password" placeholder="Confirm New Password" />
          </div>
        
          <button disabled={isInvalid} className='btn4 info' type="submit">Change Password</button>
            { error && <p>{error.message}</p> }

      </form>

    </div>


    );
  }
}

export default PasswordChangeForm;