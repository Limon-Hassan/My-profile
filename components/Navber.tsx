import React from 'react';
import Container from './container/Container';
import { LuDownload } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';

const Navber = () => {
  return (
    <>
      <nav className="py-3.5">
        <Container className="max-w-6xl">
          <div className="flex items-center justify-between py-4">
            <div className='flex items-center gap-3.5 group hover:scale-110 transition-transform duration-300 cursor-pointer'>
              <div className="w-12 h-10 flex items-center justify-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500 rounded-md group-hover:rotate-180 transition-transform duration-400">
                <FaCode size={24} />
              </div>
              <h3 className=" font-bold flex flex-col items-start gap-1 text-white font-Inter">
                M.H Limon
                <span>Full Stack Dev</span>
              </h3>
            </div>
            <div className="flex space-x-4">
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className="text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Home
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className="text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  About
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className="text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Projects
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className="text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <button className="flex items-center gap-1 text-white px-3 py-2 cursor-pointer font-Inter font-medium rounded-md bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300">
              <LuDownload size={18} />
              <span className="ml-2">Resume</span>
            </button>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
