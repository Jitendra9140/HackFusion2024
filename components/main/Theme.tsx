"use client";
import "../styles/projectCard.css";
import "../../app/globals.css";
import { projects } from '../../constants/index';
import ProjectCardItem from "../sub/ProjectCard";
const Theme = () => {
  return (
    <div className='Container ip:px-4' id="themes">
      <div className='Wrapper '>
        <div  data-aos="zoom-out-down" className='text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>Themes</div>
        <div  data-aos="zoom-out-up" className='CardContainer' >
          {projects.map((projects) => (
              <ProjectCardItem key={projects.id} project={projects}    />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Theme;

