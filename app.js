import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import About from './components/about.js'
import Projects from './components/Projects.js'

ReactDOM.render(
  <div>
    <Header />
    <Intro />
    <About />
    <Projects />
  </div>,
  document.getElementById('react-app')
);
