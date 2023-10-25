import React, { useState } from 'react';

const Intro = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  const contentStyle = {
    height: expanded ? '400px' : '0',
    overflow: 'hidden',
    transition: 'height 1.5s ease-in-out',
    lineHeight:2.4
  };

  return (
    <div className="intro-container">
      <div onClick={toggleContent} className="intro">
        Intro
      </div>
      <div className="intro-words" style={contentStyle}>
        <p>
          Hey there, I'm Christopher Mwiya, proudly representing Zambia's vibrant heart, Lusaka. My coding journey began back in 2019, and it's been an exhilarating ride ever since, as I continue to evolve in the realm of technology and programming, now in 2023.Throughout my coding adventures, I've undertaken numerous exciting projects that have only fueled my passion for this dynamic field. But let's talk about my toolkit - HTML, CSS, JavaScript, Node.js, React, and Express; these are more than just programming languages to me. They're the tools that empower me to craft stunning websites and build robust servers.Here's the kicker – I'm not just your typical web developer. I straddle both the front-end and back-end worlds with ease. I've got the know-how and experience to create captivating user experiences and ensure those applications run smoothly behind the scenes.In a world where technology evolves at lightning speed, I'm here to deliver innovative solutions and leave my mark in the ever-changing digital landscape. So, get ready to explore the exciting possibilities with me!
        </p>
      </div>
    </div>
  );
};

export default Intro;