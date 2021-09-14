import React from "react";
import { Link } from "react-router-dom";
import upload from '../../../app/assets/images/upload-icon.png'; 
import logo_invert from '../../../app/assets/images/logo_invert.png'

const Greeting = ({currentUser, logout }) => {
  const handleSubmit = () =>{
    logout();
  }

  const sessionLinks = () => (
    <header className ="header">
      <img className ="logo" src={logo_invert} />
      <nav className = "login-signup">
        <span className="login">
          <Link to="/login">Log In</Link>
        </span>
        <button className="signup">
          <Link to="/signup">Sign Up</Link>
        </button>
      </nav>
    </header>

  );
  const personalGreeting = () => (
    <div className="header-loggedin">
      
      <Link to="/feed"><img className ="logo" src={logo_invert} /></Link>
      <Link to="/explore">Explore</Link>

      <Link to="/upload"> 
        <img className="upload-img" src={upload} alt="upload"/>        
      </Link>
      <div>Hi {currentUser.username}!</div>
      <div className="log-out-link">
        <Link onClick={handleSubmit} to="/">Log Out</Link>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;