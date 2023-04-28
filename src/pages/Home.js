import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Jaejin</h2>
        <div className='prompt'>
          <p>
            A frontend developer with a passion for learning and creating.
          </p>
          <GithubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>

          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Sass, React Native
            </span>
          </li>          

          <li className='item'>
            <h2>Back-End</h2>
            <span>
              MySQL, Firebase, Axios
            </span>
          </li>     

          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home