import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ReactGA from 'react-ga';

export default function App() {
  ReactGA.initialize('G-SQW1KRCLZB');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <main className="text-gray-100 bg-noellegray-700 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Education />
    </main>
  );
}