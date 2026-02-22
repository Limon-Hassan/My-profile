import React from 'react';
import Container from './container/Container';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  IoCallOutline,
  IoLanguageSharp,
  IoLocationOutline,
} from 'react-icons/io5';
import { LiaCertificateSolid } from 'react-icons/lia';

const Section2 = () => {
  return (
    <section className="py-12 bg-linear-to-b from-[#09071e] to-[#282857]">
      <Container className="max-w-400">
        <div>
          <h1 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
            About Me
          </h1>
          <p className="text-center text-[18px] font-medium max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
            Get to know more about my background, experience, and what drives me
            as a developer
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <h2 className="text-3xl font-Inter font-bold text-white">
              Passionate Full-Stack Developer
            </h2>
            <p className="leading-relaxed text-sm font-Inter ">
              I'm a passionate Full-Stack Developer with real-world experience
              in building and scaling web applications.I combined a practical
              mindset with creativity to solve problems, improve performance,
              and deliver solutions that truly support business goals. I love
              turning ideas into functional, user-friendly experiences.
            </p>
            <h3 className="text-2xl font-Inter font-bold text-purple-500">
              My Journey
            </h3>
            <p className="leading-relaxed text-sm font-Inter">
              My journey in software development started with curiosity and has
              evolved into a passion for creating solutions that make a real
              impact. I specialize in the MERN stack and have experience working
              with cutting-edge technologies like AI integration, real-time
              communications, and cloud infrastructure.
            </p>

            <h3 className="text-2xl font-Inter font-bold text-cyan-400">
              What I Bring
            </h3>
            <div className=" grid grid-cols-2 w-100 gap-3 items-center">
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">Performance Optimization</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">Scalable Architecture</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">Modern UI/UX</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">API Development</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-6xl h-auto p-5 border border-gray-500/30 rounded-2xl">
              <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white">
                <span>
                  <MdOutlineMailOutline size={24} color="purple" />
                </span>
                Contact Information
              </h4>
              <span className='flex items-center gap-3'>
                <IoLocationOutline size={24} color="white" /> Dhaka, Bangladesh
              </span>
              <span className='flex items-center gap-3'>
                <IoCallOutline size={24} color="white" /> +8801887604100
              </span>
              <span className='flex items-center gap-3'>
                <MdOutlineMailOutline size={24} color="white" />
                mahammudhassanlimon@gmail.com
              </span>
            </div>
            <div className="w-6xl h-auto p-5 border border-gray-500/30 rounded-2xl">
              <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white">
                <span>
                  <IoLanguageSharp size={24} color="purple" />
                </span>
                Languages
              </h4>
              <button>English</button>
              <button>Bangla</button>
              <button>Hindi</button>
            </div>
            <div className="w-6xl h-auto p-5 border border-gray-500/30 rounded-2xl">
              <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white">
                <span>
                  <LiaCertificateSolid size={24} color="purple" />
                </span>
                Certifications
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
