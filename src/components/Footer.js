import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://linkedin.com/in/planetofjay/' target='_blank' rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href='mailto:jae44dv@gmail.com'>
          <EmailIcon />
        </a>
        <a href='https://instagram.com/jaejin1ee/' target='_blank' rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href='https://facebook.com/jae4f/' target='_blank' rel="noreferrer">
          <FacebookIcon />
        </a>
      </div>
      <p> &copy;2024 Jaejin Lee. All Rights Reserved.</p>
    </div>
  );
}