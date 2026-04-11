'use client';
import React, { useEffect, useRef, useState } from 'react';
import Container from './container/Container';
import { LuDownload } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { RxHamburgerMenu } from 'react-icons/rx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
  sectionRefs: {
    Home: React.RefObject<HTMLDivElement>;
    About: React.RefObject<HTMLDivElement>;
    Skills: React.RefObject<HTMLDivElement>;
    Projects: React.RefObject<HTMLDivElement>;
    Contact: React.RefObject<HTMLDivElement>;
  };
}

const Navber = ({ sectionRefs }: Props) => {
  const linksRef = useRef<HTMLDivElement[]>([]);
  const btnRef = useRef(null);

  const wrapperRef = useRef(null);

  const normalNavRef = useRef(null);
  const stickyNavRef = useRef(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  let [activeLink, setActiveLink] = useState<keyof typeof sectionRefs>('Home');

  useEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      linksRef.current,
      { y: -80, opacity: 0 },
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
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      },
    );
  }, []);

  useEffect(() => {
    if (!normalNavRef.current || !stickyNavRef.current) return;

    gsap.set(stickyNavRef.current, {
      opacity: 0,
      scale: 0.9,
      y: -30,
      pointerEvents: 'none',
    });

    gsap.set(normalNavRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top -50',

      onEnter: () => {
        gsap.to(normalNavRef.current, {
          opacity: 0,
          scale: 0.95,
          y: -20,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.to(stickyNavRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          pointerEvents: 'auto',
        });
      },

      onLeaveBack: () => {
        gsap.to(normalNavRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.to(stickyNavRef.current, {
          opacity: 0,
          scale: 0.9,
          y: -30,
          duration: 0.8,
          ease: 'power2.out',
          pointerEvents: 'none',
        });
      },
    });
  }, []);

  const handleScroll = (section: keyof typeof sectionRefs) => {
    const target = sectionRefs[section]?.current;

    if (target) {
      setActiveLink(section);
      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 120,
        },
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  const handleResumeClick = () => {
    window.open('/Mahammud_Hassan_Limon_Resume.pdf', '_blank');
  };

  useEffect(() => {
    const sections = Object.keys(sectionRefs) as (keyof typeof sectionRefs)[];

    sections.forEach(section => {
      const el = sectionRefs[section]?.current;

      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',

        onEnter: () => setActiveLink(section),
        onEnterBack: () => setActiveLink(section),
      });
    });
  }, [sectionRefs]);

  useEffect(() => {
    let links = ['Home', 'About', 'Skills', 'Projects', 'Contact'].indexOf(
      activeLink,
    );

    let el = itemRefs.current[links];
    let indicator = indicatorRef.current;
    if (el && indicator) {
      gsap.to(indicator, {
        x: el.offsetLeft,
        width: el.offsetWidth,
        duration: 0.7,
        ease: 'power3.inOut',
      });
    }
  }, [activeLink]);

  return (
    <>
      <nav className="w-full relative small:hidden tab:hidden lap:block com:block">
        <Container className="max-w-400">
          <div className="relative ">
            <div
              ref={normalNavRef}
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
                        onClick={() =>
                          handleScroll(item as keyof typeof sectionRefs)
                        }
                        className={` ${activeLink === item ? 'bg-white text-purple-600' : 'text-white border border-white'} px-3 py-2 hover:bg-white hover:text-purple-600 transition-colors duration-300 font-Inter font-medium cursor-pointer`}
                      >
                        {item}
                      </a>
                    </div>
                  ),
                )}
              </div>
              <button
                ref={btnRef}
                onClick={handleResumeClick}
                className="flex items-center gap-1 text-white px-3 py-2 cursor-pointer font-Inter font-medium rounded-md bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300 hover:shadow-[0px_10px_15px_0px_rgba(255,69,83,0.6)]"
              >
                <LuDownload size={18} />
                <span className="ml-2">Resume</span>
              </button>
            </div>

            <div
              ref={stickyNavRef}
              className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg border-b border-purple-500 py-5 opacity-0 pointer-events-none"
            >
              <Container className="max-w-400">
                <div className="flex items-center justify-between py-5 bg-purple-400/30 rounded-full px-12.5">
                  <div className="Logo flex items-center gap-3.5 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-12 h-10 flex items-center justify-center bg-linear-to-r from-indigo-500 via-pink-500 to-red-500 rounded-md group-hover:rotate-180 transition-transform duration-400">
                      <FaCode size={24} />
                    </div>
                    <h3 className=" font-bold text-white font-Inter">
                      M.H Limon
                    </h3>
                  </div>
                  <div className="flex items-center gap-20 relative">
                    <div
                      ref={indicatorRef}
                      className="absolute h-10 bg-white rounded-full z-0"
                    ></div>

                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                      (item, i) => (
                        <div
                          key={i}
                          ref={el => {
                            itemRefs.current[i] = el;
                          }}
                          className={`${
                            activeLink === item ? 'w-18.75 h-10' : ''
                          } flex justify-center items-center rounded-full relative z-10 transition-all duration-600 ease-in-out cursor-pointer`}
                        >
                          <a
                            className={`${
                              activeLink === item
                                ? 'text-purple-600'
                                : 'text-white'
                            } font-medium text-[15px] font-Inter`}
                            onClick={() =>
                              handleScroll(item as keyof typeof sectionRefs)
                            }
                          >
                            {item}
                          </a>

                          <div
                            className={`${
                              activeLink === item
                                ? 'w-1.25 h-1.25 -bottom-3 bg-white opacity-100'
                                : 'opacity-0'
                            } absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-600`}
                          ></div>
                        </div>
                      ),
                    )}
                  </div>
                  <button
                    onClick={handleResumeClick}
                    className="flex items-center gap-1 text-white px-3 py-2 cursor-pointer font-Inter font-medium rounded-md bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300 hover:shadow-[0px_10px_15px_0px_rgba(255,69,83,0.6)]"
                  >
                    <LuDownload size={18} />
                    <span className="ml-2">Resume</span>
                  </button>
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </nav>
      <nav className="small:block tab:block lap:hidden com:hidden py-3 relative">
        <Container className="px-3 mx-0">
          <div className="flex items-center justify-between py-5 bg-purple-400/30 rounded-full px-4">
            <div className="Logo flex items-center gap-3.5 group hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-10 flex items-center justify-center bg-linear-to-r from-indigo-500 via-pink-500 to-red-500 rounded-md group-hover:rotate-180 transition-transform duration-400">
                <FaCode size={24} />
              </div>
              <h3 className=" font-bold text-white font-Inter">M.H Limon</h3>
            </div>
            <button
              ref={btnRef}
              onClick={handleResumeClick}
              className="flex items-center gap-1 text-white px-3 py-2 cursor-pointer font-Inter font-medium rounded-md bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300 hover:shadow-[0px_10px_15px_0px_rgba(255,69,83,0.6)]"
            >
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
