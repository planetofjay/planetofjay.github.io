import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import CVIcon from '@material-ui/icons/FileCopyTwoTone';
import Resume from '../assets/Resume.pdf';
import '../styles/Home.css';
import background from './../assets/background.jpg';

export default function Home() {

  return (
    <div className='home'>
      <div className='about'>
        <img src={background} alt='background' />

        <h2>Hi, My Name is Jaejin L.</h2>
        <div className='prompt'>
          <p>
            a Web Developer with a passion for learning, creating, solving, and developing.
          </p>
          <a href='https://github.com/PlanetofJay' target='_blank' rel="noreferrer">
            <GithubIcon />
          </a>
          <a href={Resume} target='_blank' rel="noreferrer">
            <CVIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>

          <li className='item'>
            <h2>Front-End</h2>
            <span>React, Redux, React Native, HTML, CSS</span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>MySQL</span>
          </li>

          <li className='item'>
            <h2>Design-Tool</h2>
            <span>Adobe XD, Adobe Illustrator, WordPress</span>
          </li>
        </ol>
      </div>
    </div>
  );
}