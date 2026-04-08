'use client';
import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import Pxe from './Profesional/Pxe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  let sectionRef = useRef(null);
  let cardsRef = useRef([]);
  let headingRef = useRef(null);
  let data = [
    {
      id: 1,
      company: 'AB Seed Company',
      position: 'Mern Stack Developer',
      duration: 'Nov 2025 - Jan 2026',
      location: 'Mohammadpur Dhaka',
      type: 'Full-time • 3 mos',
      description:
        'I was responsible for managing the design and backend authentication of their e-commerce website. I also handled the project architecture and built a responsive, user-friendly UI for the target audience.',
      keyAchievements: [
        'Improved website performance by 40%',
        'Implemented secure authentication system',
        'Developed responsive UI for improved user experience',
        'Integrated Steadfast Courier API for logistics management',
      ],
      technologies: [
        { name: 'React.js', icon: '/React.png' },
        { name: 'Next.js', icon: '/white.svg' },
        { name: 'Node.js', icon: '/node.png' },
        { name: 'Express.js', icon: '/express.png' },
        { name: 'MySQL', icon: '/mysql.png' },
      ],
    },
    {
      id: 2,
      company: 'Client Project',
      position: 'Full Stack Developer',
      duration: 'Sep 2025 - Nov 2025',
      location: 'Wari Dhaka',
      type: 'Delivered in • 1 month',
      description:
        'I was deployed a full-stack web application for a client, handling both frontend and backend development. I implemented features such as Product management and order management and real-time updates to enhance the user experience.',
      keyAchievements: [
        'Optimized backend queries and implemented caching, improving overall website performance by 80%',
        'Handled 10,000+ users per minute without performance issues',
        'Designed and implemented a high-performance responsive UI improving UX',
        'Dashboard for admin to manage the website',
      ],
      technologies: [
        { name: 'React.js', icon: '/React.png' },
        { name: 'Next.js', icon: '/white.svg' },
        { name: 'Node.js', icon: '/node.png' },
        { name: 'Express.js', icon: '/express.png' },
        { name: 'MongoDB', icon: '/mongodb.png' },
      ],
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
          scaleX: 0.2,
          transformOrigin: 'left center',
          filter: 'blur(5px)',
        },
        {
          opacity: 1,
          scaleX: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={sectionRef} className="mb-20">
        <Container className="max-w-400">
          <div>
            <h2
              ref={headingRef}
              className="text-4xl font-bold text-center animated-gradient-text font-Inter"
            >
              Professional Experience
            </h2>
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
            </span>
            {data.map((item, index) => (
              <Pxe
                ref={el => (cardsRef.current[index] = el)}
                key={index}
                item={item}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section5;
