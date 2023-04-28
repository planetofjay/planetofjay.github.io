import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <a href='https://instagram.com/ofjaylee/' target='_blank'>
          <InstagramIcon />
        </a>
        <a href='https://facebook.com/jae4f/' target='_blank'>
          <FacebookIcon />
        </a>
        <a href='https://linkedin.com/in/planetofjay/' target='_blank'>
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 JaejinLee. All Rights Reserved.</p>
    </div>
  );
}