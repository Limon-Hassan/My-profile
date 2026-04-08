'use client';
import React, { useEffect, useRef, useState } from 'react';
import Container from './container/Container';
import { LuDownload } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navber = () => {
  const [isSticky, setIsSticky] = useState(false);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const btnRef = useRef(null);

  const navRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      linksRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
      },
    );

    tl.fromTo(
      btnRef.current,
      {
        x: 80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      },
    );
  }, []);

  useEffect(() => {
    if (!navRef.current || !wrapperRef.current) return;

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top -10',
      end: 'bottom top',
      onEnter: () => setIsSticky(true),
      onLeaveBack: () => setIsSticky(false),
    });
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      scale: isSticky ? 0.95 : 1,
      opacity: isSticky ? 0.95 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isSticky]);
  return (
    <>
      <nav
        ref={navRef}
        className={`py-3.5 w-full transition-all duration-500 ${
          isSticky
            ? 'fixed top-0 left-0 bg-purple-500 z-50 shadow-lg'
            : 'relative'
        }`}
      >
        <Container className="max-w-400">
          {!isSticky ? (
            <div
              ref={wrapperRef}
              className="flex items-center justify-between py-4"
            >
              <div className="Logo flex items-center gap-3.5 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="w-12 h-10 flex items-center justify-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500 rounded-md group-hover:rotate-180 transition-transform duration-400">
                  <FaCode size={24} />
                </div>
                <h3 className=" font-bold flex flex-col items-start gap-1 text-white font-Inter">
                  M.H Limon
                  <span>Full Stack Dev</span>
                </h3>
              </div>
              <div className="flex space-x-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                  (item, i) => (
                    <div
                      key={i}
                      ref={el => {
                        if (el) linksRef.current[i] = el;
                      }}
                      className="relative"
                    >
                      <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                      <a
                        href="#"
                        className="text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                      >
                        {item}
                      </a>
                    </div>
                  ),
                )}
              </div>
              {/* <div className="flex space-x-4">
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className=" text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Home
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className=" text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  About
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className=" text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Skills
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className=" text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Projects
                </a>
              </div>
              <div className="relative">
                <div className="w-0.5 h-10 bg-white absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                <a
                  href="#"
                  className=" text-white border border-white px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium"
                >
                  Contact
                </a>
              </div>
            </div> */}
              <button
                ref={btnRef}
                className="flex items-center gap-1 text-white px-3 py-2 cursor-pointer font-Inter font-medium rounded-md bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300 hover:shadow-[0px_10px_15px_0px_rgba(255,69,83,0.6)]"
              >
                <LuDownload size={18} />
                <span className="ml-2">Resume</span>
              </button>
            </div>
          ) : null}
        </Container>
      </nav>
    </>
  );
};

export default Navber;
