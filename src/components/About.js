// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Noelle.
            <br className="hidden lg:inline-block" />I am a Front-End Software Engineer, 
            <br className="hidden lg:inline-block" />Certified Scrum ScrumMaster,
            <br className="hidden lg:inline-block" />and Certified Scrum Product Owner.            
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a dedicated and enthusiastic Front-End Software Engineer, who is certified in Agile methodologies, and has a strong background in project planning, product ownership and product management.
          </p>
          <div className="flex justify-center">
            <a
              target="_blank"
              href="./resume.pdf"
              className="inline-flex text-noellegray-800 bg-noelleteal border-0 py-2 px-6 focus:outline-none hover:bg-noelleteal-300 rounded">
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-noelleteal-400 bg-noellegray-700 border-0 py-2 px-6 focus:outline-none hover:bg-noellegray-700 hover:text-noelleteal-200 rounded">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded border-double"
            alt="Noelle Pavlovic"
            src="./noelle.png"
          />
        </div>
      </div>
    </section>
  );
}