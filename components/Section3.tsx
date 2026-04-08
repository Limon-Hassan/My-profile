'use client';

import { useEffect, useRef } from 'react';
import Container from './container/Container';
import Skills_Cards from './skills/Skills_Cards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  let sectionRef = useRef(null);
  let cardsRef = useRef([]);
  let headingRef = useRef(null);
  let skillData = [
    {
      skillImage: '/laptop.png',
      title: 'Programming Languages',
      proficiency: 2,
      technologies: [
        { name: 'JavaScript', img: '/js.png' },
        { name: 'TypeScript', img: '/typescript.png' },
      ],
    },
    {
      skillImage: '/paint-palette.png',
      title: 'Frontend Technologies',
      proficiency: 7,
      technologies: [
        { name: 'React.js', img: '/React.png' },
        { name: 'Next.js', img: '/white.svg' },
        { name: 'HTML5', img: '/html-5.png' },
        { name: 'CSS3', img: '/css3.png' },
        { name: 'Tailwind css', img: '/tailwindcss.svg' },
        { name: 'Bootstrap', img: '/Bootstrap.png' },
        { name: 'Redux', img: '/redux.svg' },
        { name: 'Gsap', img: '/gsap.jfif' },
      ],
    },
    {
      skillImage: '/cogwheel.png',
      title: 'Backend Technologies',
      proficiency: 3,
      technologies: [
        { name: 'Node.js', img: '/node.png' },
        { name: 'Express.js', img: '/express.png' },
        { name: 'GraphQL', img: '/graphql.svg' },
      ],
    },
    {
      skillImage: '/database.png',
      title: 'Database & ORM',
      proficiency: 5,
      technologies: [
        { name: 'MongoDB', img: '/mongodb.png' },
        { name: 'Mongoose', img: '/mongoose.png' },
        { name: 'MySQL', img: '/mysql.png' },
        { name: 'Prisma', img: '/prisma-orm.png' },
        { name: 'Redis', img: '/redis.png' },
      ],
    },
    {
      skillImage: '/cloud.png',
      title: 'Cloud & DevOps',
      proficiency: 4,
      technologies: [
        { name: 'Aws', img: '/amazon-web-services.png' },
        { name: 'Cloudinary', img: '/Cloudinary.png' },
        { name: 'Vercel', img: '/Vercel.svg' },
        { name: 'CI/CD', img: '/cicd.png' },
        { name: 'CDN', img: '/cdn.svg' },
      ],
    },
    {
      skillImage: '/settings.png',
      title: 'Tools & Others',
      proficiency: 2,
      technologies: [
        { name: 'Linux', img: '/linux_226772.png' },
        { name: 'Git', img: '/git.png' },
        { name: 'VPS', img: '/Vercel.svg' },
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
          scale: 1.1,
          y: -60,
          x: -40,
          filter: 'blur(10px)',
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
    <section ref={sectionRef} className="pt-15 w-full h-screen ">
      <Container className="max-w-400">
        <div ref={headingRef}>
          <h2 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
            Skills & Technologies
          </h2>
          <p className="text-center text-[18px] font-medium max-w-3xl font-Inter mt-4 text-gray-300 mx-auto">
            A comprehensive overview of my technical expertise across different
            domains of software development
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-20 w-full">
          {skillData.map((skill, index) => (
            <div
              key={index}
              ref={el => {
                cardsRef.current[index] = el;
              }}
            >
              <Skills_Cards skill={skill} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Section3;
