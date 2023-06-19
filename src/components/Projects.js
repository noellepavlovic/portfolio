// src/components/Projects.js

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects, technology_bg_colours } from "../data";
import parse from 'html-react-parser';
import Carousel from './Carousel';
  
export default function Projects() {

    return (
    <section id="projects" className="text-gray-400 bg-noellegray-600 body-font pt-5">
    <div className="container px-0 py-0 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My experience as a front-end developer has allowed
            me to work on a number of interesting projects, which demonstrate my proficiency in React 
            and my ability to deliver high-quality solutions to clients' requirements.
          </p>
        </div>
    </div>
    {projects.map((project, i) => (
    <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center" key={i}>
        {/* <div className="lg:max-w-lg py-5 lg:w-full md:w-full sm:w-full w-5/6 pr-10"> */}
            <Carousel data={project.images}></Carousel>
        {/* </div> */}
        <div className="px-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-noelleteal">
                {project.title}
          </h2>
          <h3 className="pb-5 text-white">{project.customer}</h3>
          
          <div className="mb-8 leading-relaxed overscroll-contain overflow-y-scroll h-32">
          {parse(project.description)}
          </div>

          <div className="flex justify-center">
            {project.technologies.map((technology, t) => (
                <span className={technology_bg_colours[technology]} key={t}>{technology}</span>
            ))}     
          </div>
        </div>      
      </div>
    ))}
    </section>
  );
}