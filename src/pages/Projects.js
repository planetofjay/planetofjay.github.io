import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj1 from '../assets/proj1.png';
import Proj2 from '../assets/proj2.png';

import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'></div>
        <ProjectItem name='Magazine Website' image={Proj1}/>
        <ProjectItem name='Weather Application' image={Proj2}/>
    </div> 
  );
}