// src/components/Education.js

import { AcademicCapIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import { certifications, educationlist } from "../data";


export default function Education() {
  
  return (
    <section id="education" className="text-gray-400 bg-noellegray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education &amp; Certifications
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {educationlist.map((education, i) => (
            <div key={education.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-noellegray-700 rounded flex p-4 h-full items-center">
              <AcademicCapIcon className="text-noelleteal w-10 inline-block mb-6 mr-4" />
                <div className="title-font p-2 font-medium text-white">
                  {education.dates}<br />
                  {education.degree} <br />
                  {education.name}<br />
                  {education.location}
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {certifications.map((certification) => (
            <div key={certification.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-noellegray-700 rounded flex p-4 h-full items-center">
              <DocumentCheckIcon className="text-noelleteal w-10 inline-block mb-6 mr-4" />
                <div className="title-font p-2 font-medium text-white">
                  {certification.certificate}<br />
                  {certification.name} <br />
                  {certification.location}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}