'use client';
import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import Pxe from './Profesional/Pxe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  let sectionRef = useRef(null);
  let cardsRef = useRef<(HTMLElement | null)[]>([]);
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
        'Architected and improved RESTful APIs using Node.js, achieving a 46% improvement in server response performance.',
        'Engineered a secure authentication system utilizing JWT and Google OAuth integration.',
        'Developed full-stack SaaS features with a focus on scalability and long-term maintainability.',
        'Collaborated with cross-functional teams to deliver user-focused features and conduct systemlevel debugging.',
        'Designed responsive and modular UI components with React and Tailwind CSS.',
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
        'Built a revenue-generating full-stack e-commerce platform using React, Next.js, Node.js, and MongoDB.',
        'Streamlined database queries and implemented caching, resulting in an 80% increase in overall website performance.',
        'Successfully handled load testing for 10,000+ concurrent requests per minute with zero downtime.',
        'Deployed application on Ubuntu VPS (Hostinger), configuring domain setup and production-ready server environments.',
        'Constructed a high-performance admin dashboard for full product management and inventory control',
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
        cardsRef.current.filter(Boolean),
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
        <Container className="com:max-w-400 lap:max-w-400 com:mx-auto lap:mx-auto small:px-3 small:mx-0 tab:px-3 tab:mx-0 com:px-0 lap:px-0">
          <div>
            <h2
              ref={headingRef}
              className="small:text-3xl tab:text-4xl lap:text-4xl com:text-4xl font-bold text-center animated-gradient-text font-Inter"
            >
              Professional Experience
            </h2>
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
            </span>
            {data.map((item, index) => (
              <Pxe
                ref={(el: HTMLElement | null) => {
                  if (el) cardsRef.current[index] = el;
                }}
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
