import React from 'react';
import github from '../../../app/assets/images/github.png'; 
import linkedin from '../../../app/assets/images/linkedin.png'


const Footer = () => (
  <footer className="footer-nav">
    <a href="https://kevlin2358.github.io/portfolio/" target="_blank" rel="noreferrer"><div>Portfolio</div></a>
    <a href="https://github.com/KevLin2358?tab=repositories" target="_blank" rel="noreferrer"><img className ="github" src={github} /></a>
    <a href="https://www.linkedin.com/in/kevin-lin-0a0aa31b1/" target="_blank" rel="noreferrer"><img className ="linkedin" src={linkedin} /></a>
  </footer>
)



export default Footer;