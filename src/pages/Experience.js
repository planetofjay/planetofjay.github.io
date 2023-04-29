import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023 - Present'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Developer Intern - GAO Tek
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Toronto, ON - remote
          </h4>
          <p>assigned with tasks and assignments that focus primarily on
            developing new skills and gaining a deeper understanding.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
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
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Photographer - Freelance
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Dublin, Ireland / Paris, France
          </h4>
          <p>Had exhibitions in Seoul and Belgium, published own photography book using Indesign.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2013 - 2015'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Induk University, Seoul, South Korea
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Incomplete
          </h4>
          <p>Urban Environment Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2009 - 2012'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
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