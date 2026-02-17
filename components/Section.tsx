import React from 'react';
import Container from './container/Container';

const Section = () => {
  return (
    <section className="mt-20">
      <Container className="max-w-380">
        {/* <div>
          <h1 className="font-Inter text-white text-4xl font-bold flex flex-col items-start gap-3">
            Hi, I'm
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Mahammud Hassan Limon
            </span>
            <span className="text-purple-400">Full-Stack Developer</span>
          </h1>
        </div> */}

        <div>
          <h1 className="font-Inter text-4xl font-bold flex flex-col items-start gap-3">
            Hi, I'm
            <span className="animated-gradient-text">
              Mahammud Hassan Limon
            </span>
            <span className="text-purple-400">Full-Stack Developer</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Section;
