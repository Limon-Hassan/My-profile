import React from 'react';
import Container from './container/Container';
import Link from 'next/link';
import ProjectsCard from './projectsCards/ProjectsCard';
import Button from './Button/Button';

const Section4 = () => {
  let projects = [
    {
      id: 1,
      image: '/New folder/Evarto.png',
      title: 'Evato E-Commerce',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
    {
      id: 2,
      image: '/New folder/News.png',
      title: 'Automatic News app',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
    {
      id: 3,
      image: '/New folder/client.png',
      title: 'Agency service',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
    {
      id: 4,
      image: '/New folder/chat-app.png',
      title: 'Mili Chat App || Realtime',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
    {
      id: 5,
      image: '/New folder/digitalDeshboard.png',
      title: 'E-Commerce Dashboard',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
    {
      id: 6,
      image: '/New folder/delux.png',
      title: 'Deluxe x deal || hardware shop',
      like: 22,
      Link: 'https://evato-e-commerce-limon.onrender.com',
    },
  ];
  return (
    <>
      <section className="mb-20">
        <Container className="max-w-400">
          <div className="mb-20">
            <h1 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
              My Projects
            </h1>
            <p className="text-center text-[18px] font-medium max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
              Explore More About My Real-Time Deployed Projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((pro, index) => (
              <ProjectsCard data={pro} key={index} />
            ))}
          </div>

          <div className='mx-auto flex justify-center items-center mt-10'>
           
            <Button custum={'See More Projects'} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section4;
