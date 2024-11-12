// src/Languages.js
import React from 'react';
import { FaReact, FaNodeJs, FaGitSquare } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiCplusplus, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiExpress} from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const Languages = () => {
  const technologies = [
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} /> },
    { name: 'C++', icon: <SiCplusplus size={40} /> },
    { name: 'C', icon: <SiCplusplus size={40} /> },
    { name: 'JavaScript', icon: <IoLogoJavascript  size={40} /> },
    { name: 'Express', icon: <SiExpress size={40} /> },
    { name: 'HTML', icon: <SiHtml5 size={40} /> },
    { name: 'CSS', icon: <SiCss3 size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
    { name: 'Git', icon: <FaGitSquare size={40} /> },
  ];

  return (
    <div className="languages-container py-10 flex flex-col">
      <span className="text-sm mb-2 inline-block px-4 text-center py-1 rounded-full bg-gray-100 font-semibold mx-auto"> 
        • Tech Stack
      </span>
      <h2 className="text-4xl font-medium text-center mb-8">Technologies I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center mx-1"> {/* Adjusted margin */}
            <div className="icon mb-1">
              {tech.icon}
            </div>
            <p className="text-center text-sm">{tech.name}</p> {/* Smaller text for better alignment */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
