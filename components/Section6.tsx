import React from 'react';
import Container from './container/Container';
import GetTouchButton from './Button/GetTouchButton';

const Section6 = () => {
  return (
    <>
      <section className="mb-20">
        <Container className="max-w-400">
          <div className=" border border-gray-500 bg-purple-400/20 w-5xl rounded-lg mx-auto p-10 hover:bg-purple-400/30 transition duration-300 hover:shadow-lg hover:shadow-purple-400/50 hover:scale-105">
            <h4 className="text-[30px] font-Inter font-bold text-white text-center mb-6">
              Ready to work together?
            </h4>
            <p className="text-[18px] font-Inter font-medium text-gray-400 text-center">
              I'm always excited to take on new challenges and collaborate with
              amazing teams. Let's discuss how I can contribute to your next
              project.
            </p>
            <GetTouchButton />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section6;
