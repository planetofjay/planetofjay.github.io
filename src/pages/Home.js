import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Jaejin</h2>
        <div className='prompt'>
          <p>
            a Web Developer with a passion for learning and creating.
          </p>
          <a href='https://github.com/PlanetofJay' target='_blank' rel="noreferrer">
            <GithubIcon />
          </a>
          <a href='mailto:jae44dv@gmail.com'>
            <EmailIcon />
          </a>
          <a href='https://linkedin.com/in/planetofjay/' target='_blank' rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>

          <li className='item'>
            <h2>Front-End</h2>
            <span>
              React, Redux, HTML, CSS
            </span>
          </li>          

          <li className='item'>
            <h2>Back-End</h2>
            <span>
              Firebase, Axios, MySQL
            </span>
          </li>     

          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>

        </ol>
      </div>
    </div>
  );
}