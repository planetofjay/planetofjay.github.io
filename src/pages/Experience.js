import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default function Experience() {
  return (
    <div className='experience' style={{ backgroundColor: '#a5a5ac' }}>
      <VerticalTimeline lineColor='#ffffffbf'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023 - Present'
          iconStyle={{ background: '#000', color: '#ffffffbf' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Developer Internship - GAOTek Inc.
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Toronto, ON - remote
          </h4>
          <ul>
            <li>Created several small applications for SEO with WordPress</li>
            <li>Managed employees of including scheduling, training and performance reviews</li>
            <li>Trained new employees on company procedures and policies</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          iconStyle={{ background: '#8787a4', color: '#ffffffbf' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Fanshawe College, London, Ontario
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Associate in Science (A.S.)
          </h4>
          <ul>
            <li>Majored in Web Development and Internet Applications</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2020'
          iconStyle={{ background: '#000', color: '#ffffffbf' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Street Photographer - Freelance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Everywhere
          </h4>
          <ul>
            <li>Exhibitions in South Korea and Belgium</li>
            <li>Published and sold own photography book</li>
            <li>Designed a book using Adobe InDesign</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2013 - 2015'
          iconStyle={{ background: '#8787a4', color: '#ffffffbf' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Induk University, Seoul, South Korea
          </h3>
          <ul>
            <li>Majored in Architecture</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2009 - 2012'
          iconStyle={{ background: '#8787a4', color: '#ffffffbf' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Sangmyung High School, Seoul, South Korea
          </h3>
          <ul>
            <li>High School Diploma</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}