// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src='./images/FASCO.png' alt='...' className='ps-5 ms-5'/>
        </div>
        <div className="footer-links">
          <a href="/support">Support Center</a>
          <a href="/invoicing">Invoicing</a>
          <a href="/contract">Contract</a>
          <a href="/careers">Careers</a>
          <a href="/blog">Blog</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>
      <br/>
      <div className="footer-bottom">
        <p>Copyright © 2022 FASCO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
