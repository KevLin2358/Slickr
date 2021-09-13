import React from 'react';
import github from '../../../app/assets/images/github.png'; 
import linkedin from '../../../app/assets/images/linkedin.png'


const Footer = () => (
  <footer className="footer-nav">
    <div>About Me</div>
    <div>Portfolio</div>
    <img className ="github" src={github} />
    <img className ="linkedin" src={linkedin} />
  </footer>
)

export default Footer;