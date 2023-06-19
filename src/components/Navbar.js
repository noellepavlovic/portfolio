import React from "react";
// src/components/Navbar.js

export default function Navbar() {
    return (
      <header className="bg-noelleteal md:sticky top-0 z-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#about" className="ml-3 text-xl font-bold">
            <img
              className="inline"
              style={{height: 50 + 'px'}}
              alt="Noelle Pavlovic logo"
              src="./logo.png"
            />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 text-noellegray-500 font-bold hover:text-noellegray-600">
              Past Work
            </a>
            <a href="#skills" className="mr-5 text-noellegray-500 font-bold hover:text-noellegray-600">
              Skills
            </a>
            <a href="#education" className="mr-5 text-noellegray-500 font-bold hover:text-noellegray-600">
              Education
            </a>
          </nav>
        </div>
      </header>
    );
  }