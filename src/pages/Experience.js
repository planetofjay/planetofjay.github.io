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
          date='2023 - 2023'
          iconStyle={{ background: '#000', color: '#ffffffbf' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            GAOTek Inc., Toronto, Ontario - <i>Remote</i>
          </h3>
          <ul>
            <li>Internship</li>
            <li>Team Lead Software Developer</li>
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
            Associate Degree in Science (A.S.)
          </h4>
          <ul>
            <li>Major in Web Development and Internet Applications</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2020'
          iconStyle={{ background: '#000', color: '#ffffffbf' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Street Photographer, Freelance
          </h3>
          <ul>
            <li>Exhibition in South Korea and Belgium</li>
            <li>Design, publish and sell own photography books</li>
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
            <li>Major in Architecture</li>
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