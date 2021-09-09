import React from 'react';

const Footer = () => (
  <footer className="footer-nav">
    <div>About Me</div>
    <div>Portfolio</div>
    <img className ="github" src={require('../../../app/assets/images/github.png')} />
    <img className ="linkedin" src='../../../app/assets/images/linkedin.png' />
  </footer>
)

export default Footer;