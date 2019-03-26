import React, { Component } from 'react';
import { Element, animateScroll as scroll } from "react-scroll";


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       
         <Home />
         
         <Element name="about">
            <About  />
         </Element>
         
         <Element name="projects">
            <Projects />
         </Element>
         
         <Element name="experience">
            <Experience />
         </Element>
         
         <Element name="skills">
            <Skills />
         </Element>
         
         <Element name="contact">
            <Contact />
         </Element>
         
       
      </div>
    );
  }
}

export default App;
