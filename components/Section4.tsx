import React from 'react';
import Container from './container/Container';

const Section4 = () => {
  return (
    <>
      <section>
        <Container className="max-w-400">
          <div className="mb-20">
            <h1 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
              My Journey
            </h1>
            <p className="text-center text-[18px] font-medium max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
              Explore the milestones and experiences that have shaped my path as
              a developer
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section4;
