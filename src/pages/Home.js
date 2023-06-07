import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import CVIcon from '@material-ui/icons/FileCopyTwoTone';
import Resume from '../assets/Resume.pdf';
import '../styles/Home.css';
// import background from './../assets/background.jpg';
// import homeVideo from './../video/home.mp4';

export default function Home() {

  return (
    <div className='home'>
      <div className='about'>
        {/* <img src={background} alt='background' className='homebg'/> */}
        {/* <video src={homeVideo} autoPlay loop muted /> */}
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
            <h2>Language</h2>
            <span>JavaScript</span>
          </li>

          <li className='item'>
            <h2>Library</h2>
            <span>React.js</span>
          </li>

          <li className='item'>
            <h2>Framework</h2>
            <span>Node.js, jQuery, Express</span>
          </li>

          <li className='item'>
            <h2>CMS</h2>
            <span>WordPress</span>
          </li>

          <li className='item'>
            <h2>Design</h2>
            <span>Adobe XD, Adobe Illustrator</span>
          </li>
        </ol>
      </div>
    </div>
  );
}