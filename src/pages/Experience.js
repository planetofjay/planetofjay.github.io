import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default function Experience() {
  return (
    <div className='experience' style={{backgroundColor: '#a5a5ac'}}>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023 - Present'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Assistant Team Leader - GAOTek Inc.
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Toronto, ON - remote
          </h4>
          <ul>
          <li>Monitored and evaluated employee performance, providing feedback for improvement.</li>
            <li>Managed team of 10+ employees, including scheduling, training and performance reviews.</li>
            <li>Coordinated and executed daily operations of 10+ employees.</li>
            <li>Trained new employees on company procedures and policies.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          iconStyle={{ background: '#a5a5ac', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Fanshawe College, London, Ontario
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Associate's Degree
          </h4>
          <p>Web Development and Internet Applications</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2020'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Photographer - Freelance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Around the world
          </h4>
          <ul>
            <li>Exhibitions in South Korea and Belgium.</li>
            <li>Published and sold own photography book.</li>
            <li>Designed a book using Adobe InDesign.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2013 - 2015'
          iconStyle={{ background: '#a5a5ac', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Induk University, Seoul, South Korea
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Incomplete
          </h4>
          <p>Architecture</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2009 - 2012'
          iconStyle={{ background: '#a5a5ac', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Sangmyung High School, Seoul, South Korea
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}