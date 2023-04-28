import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <InstagramIcon />
        <GithubIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2023 JaejinLee. All Rights Reserved.</p>
    </div>
  )
}

export default Footer