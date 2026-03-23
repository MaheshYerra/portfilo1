import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section glass">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="#"> Portfolio<span className="accent">.</span> </a>
            <p>Building digital experiences with passion and purpose.</p>
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-link"><Github /></a>
            <a href="#" className="social-link"><Linkedin /></a>
            <a href="#" className="social-link"><Twitter /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Yerra Mahesh. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={16} className="heart-icon" /> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
