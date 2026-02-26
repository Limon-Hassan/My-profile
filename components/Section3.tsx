import React from 'react';
import Container from './container/Container';
import Skills_Cards from './skills/Skills_Cards';

const Section3 = () => {
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
      proficiency: 2,
      technologies: [
        { name: 'Aws', img: '/amazon-web-services.png' },
        { name: 'Cloudinary', img: '/Cloudinary.png' },
        { name: 'Vercel', img: '/Vercel.svg' },
        { name: 'CI/CD', img: '/cicd.png' },
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
  return (
    <section className="py-14 mb-20">
      <Container className="max-w-400">
        <h2 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-20 w-full">
          {skillData.map((skill, index) => (
            <Skills_Cards key={index} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Section3;
