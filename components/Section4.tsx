'use client';

import React, { forwardRef, useEffect, useRef } from 'react';
import Container from './container/Container';
import ProjectsCard from './projectsCards/ProjectsCard';
import Button from './Button/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section4 = forwardRef<HTMLElement>((props, ref) => {
  let sectionRef = useRef(null);
  let cardsRef = useRef<(HTMLElement | null)[]>([]);
  let headingRef = useRef(null);
  let projects = [
    {
      id: 1,
      image: '/Evarto.png',
      title: 'Evato E-Commerce',
      like: 22,
      github: 'https://github.com/Limon-Hassan/Ekomart-E-commarce-Full',
      Link: 'https://ekomart-e-commarce.withlimon.workers.dev',
    },
    {
      id: 2,
      image: '/News.png',
      title: 'Automatic News app',
      like: 9,
      github: 'https://github.com/Limon-Hassan/Interview_Project-',
      Link: 'https://interview-project-cde.pages.dev/news',
    },
    {
      id: 3,
      image: '/client.png',
      title: 'Agency service',
      like: 12,
      github: 'https://github.com/Limon-Hassan/Client-project-',
      Link: 'https://client-project-wine.vercel.app',
    },
    {
      id: 4,
      image: '/chat-app.png',
      title: 'Mili Chat App || Realtime',
      like: 26,
      github: 'https://github.com/Limon-Hassan/Mili-Chat-app',
      Link: 'https://mili-chat-app.pages.dev/Login',
    },
    {
      id: 5,
      image: '/digitalDeshboard.png',
      title: 'E-Commerce Dashboard',
      like: 38,
      github: 'https://github.com/Limon-Hassan/Taranga-e-com',
      Link: 'https://dashboard.deluxexdeal.com',
    },
    {
      id: 6,
      image: '/delux.png',
      title: 'Deluxe x deal || hardware shop',
      like: 21,
      github: 'https://github.com/Limon-Hassan/Taranga-e-com',
      Link: 'https://deluxexdeal.com',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 1.1,
          y: -40,
          x: -30,
          filter: 'blur(5px)',
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power4.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={ref}>
        <div ref={sectionRef} className="mb-20">
          <Container className="com:max-w-400 lap:max-w-400 com:mx-auto lap:mx-auto small:px-3 small:mx-0 tab:px-3 tab:mx-0 com:px-0 lap:px-0">
            <div ref={headingRef} className="mb-20">
              <h2 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
                My Projects
              </h2>
              <p className="text-center text-[18px] font-medium small:w-auto tab:w-auto lap:max-w-2xl com:max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
                Explore More About My Real-Time Deployed Projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((pro, index) => (
                <ProjectsCard
                  data={pro}
                  key={index}
                  ref={el => {
                    cardsRef.current[index] = el as HTMLElement | null;
                  }}
                />
              ))}
            </div>

            <div className="mx-auto flex justify-center items-center mt-10">
              <Button custum={'See More Projects'} />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
});

export default Section4;
