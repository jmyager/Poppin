import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import logo from '../images/logo.png';


const LandingPage = () =>

  <div className="land">
    <img className='logo' src={logo} alt="Logo" />
   
    
    <div className="spacer">


   <Link className="btn info" to={routes.SIGN_UP}>Get Started</Link>
   <Link className="btn info" to={routes.SIGN_IN}>Log In</Link>

   <p className="fake">Partner With Us</p>

    </div>
    
  </div>
export default LandingPage;