'use client';
import React, { useEffect, useState } from 'react';
import Container from './container/Container';
import { FaArrowDown } from 'react-icons/fa';
import LinkButton from './LinkButtons/LinkButton';
import ParticlesBackground from './anime/ParticlesBackground';

const Section = () => {
  let tittle = ['Full-Stack Developer', 'Mern Stack Developer', 'Web Designer'];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let currentText = tittle[index];
    let typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));

        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setIndex(prev => (prev + 1) % tittle.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, text, isDeleting]);

  return (
    <section className="my-25 relative">
      <Container className="max-w-400">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-Inter text-5xl font-extrabold flex flex-col items-start gap-3">
              Hi, I'm
              <span className="animated-gradient-text text-5xl mb-1.5">
                Mahammud Hassan Limon
              </span>
              <span className="text-purple-400 text-5xl font-bold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <div className="flex items-center justify-center gap-5 flex-wrap w-125  my-10">
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/React.png"
                  alt="React"
                />
                React.js
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/white.svg"
                  alt="Next.js"
                />
                Next.js
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/node.png"
                  alt="Node.js"
                />
                Node.js
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/mongodb.png"
                  alt="MongoDB"
                />
                MongoDB
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/express.png"
                  alt="Express.js"
                />
                Express.js
              </button>

              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/linux_226772.png"
                  alt="Linux"
                />
                Linux
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src="/typescript.png"
                  alt="TypeScript"
                />
                TypeScript
              </button>
              <button className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-7.5 h-7.5 object-cover bg-center"
                  src="/mysql.png"
                  alt="MySQL"
                />
                MySQL
              </button>
            </div>
            <div className="w-120 font-Inter text-[16px] font-normal text-gray-300">
              Full Stack Developer with 3 years of hand on development and fast
              coding experience and 3 months of professional company experience.
              Skilled in building scalable web applications with a strong focus
              on performance, clean architecture, and user-friendly UI design. I
              have a strong interest in developing high-quality e-commerce and
              financial platforms, ensuring secure systems and smooth user
              experience.
            </div>
            <div className="my-3">
              <LinkButton />
            </div>
          </div>
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
            <ParticlesBackground />
          </div>
        </div>
      </Container>
      <span className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <FaArrowDown size={28} />
      </span>
    </section>
  );
};

export default Section;
