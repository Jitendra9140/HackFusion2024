"use client"
import React from 'react';
import "../styles/timeline.css";

const Timeline = () => {
  return (
    <div id='shedule' className="flex flex-col items-center justify-center py-20">
      <h1 data-aos="zoom-out-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Schedule
      </h1>

      <div className="container w-3/4 mx-auto">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col main-timeline">
              <TimelineItem  year="29th Jan 2024" icon="fa fa-cog" title="Regeistration Start" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
              <TimelineItem year="9th Feb 2024" icon="fa fa-heart" title="Idea Submission" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
              <TimelineItem year="19th Feb 2024" icon="fa fa-globe" title="Regeistration End" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
              <TimelineItem year="25th Feb 2024" icon="fa fa-globe" title="Team Shortlisting" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
              <TimelineItem year="March  2024" icon="fa fa-globe" title="Hackathon Day" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type TimelineItemProps = {
    year: string;
    icon: string;
    title: string;
    description: string;
};
  const TimelineItem: React.FC<TimelineItemProps> = ({ year, icon, title, description }) => {
    return (
      <div className="timeline" >
        <a href="#" className="timeline-content" data-aos="zoom-out-right"> 
          <span className="timeline-year" >{year}</span>
          <div className="timeline-icon">
            <i className={icon} aria-hidden="true"></i>
          </div>
          <div className="content" data-aos="zoom-out-left" >
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
          </div>
        </a>
      </div>
    );
  };

  export default Timeline;