import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              id={index}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}