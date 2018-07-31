import React from 'react';

import './Account.css'

import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';


const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h2 className="header" >Account:   {authUser.email}</h2>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);



