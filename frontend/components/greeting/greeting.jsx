import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout }) => {
  const handleSubmit = () =>{
    logout();
  }
  const sessionLinks = () => (
    <header className ="header">
      <img className ="logo" src='/assets/images/slickr-logo.png' />
      <nav className = "login-signup">
        <Link to="/login">Login</Link>
        <button className="signup">
          <Link to="/signup">Sign Up</Link>
        </button>
      </nav>
    </header>

  );
  const personalGreeting = () => (
    <div className="header">
      <h2>Hi, {currentUser.username}!</h2>
      <Link onClick={handleSubmit} to="/">Log Out</Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;