import React from 'react';

const Footer = () => (
  <footer className="footer-nav">
    <div>About Me</div>
    <div>Portfolio</div>
    <img className ="github" src="<%= image_url('github.png') %>"/>
     
    <img className ="linkedin" src="<%= image_url('linkedin.png') %>" />
  </footer>
)

export default Footer;