import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import URLIcon from '@material-ui/icons/Link';
import '../styles/ProjectDisplay.css';

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className='project'>
      <h1> {project.name} </h1>
      <img src={project.image} alt='projects' />
      <p>
        <b>Skills:</b> {project.skills} 
      </p>
      <div className='project-icon'>
        <a href={project.repo} target='_blank' rel='noreferrer'>
          <GitHubIcon />
        </a>
        <a href={project.url} target='_blank' rel='noreferrer'>
          <URLIcon />
        </a>
      </div>
    </div>
  );
}