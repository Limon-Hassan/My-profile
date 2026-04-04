import React from 'react';
import ParticlesBackground from './anime/ParticlesBackground';

const Footer = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden  bg-blue-900/50 ">
        <ParticlesBackground />

        <div className="relative z-10 text-white p-10">
          <h2>Contact Me</h2>
          <p>Let’s work together</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
