import React, { useState } from 'react';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  const contentStyle = {
    height: expanded ? '160px' : '0',
    overflow: 'hidden',
    transition: 'height 1.5s ease-in-out',
    lineHeight:2.4
  };

  return (
    <div className="intro-container">
      <div onClick={toggleContent} className="intro">
        About
      </div>
      <div className="intro-words" style={contentStyle}>
        <p>
        This website is about my work experience in programming.
          <span> 
          <strong>This is what you will find</strong>
        
           </span>
           -Projects, contacts, Resume 
        </p>
      </div>
    </div>
  );
};

export default About;