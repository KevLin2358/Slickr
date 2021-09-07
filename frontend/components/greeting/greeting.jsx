import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout }) => {
  const handleSubmit = () =>{
    logout();
  }
  const sessionLinks = () => (
    <nav className = "login-signup">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2>Hi, {currentUser.username}!</h2>
      <Link onClick={handleSubmit} to="/">Log Out</Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;