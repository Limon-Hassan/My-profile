'use client';
import React, { use, useEffect, useRef } from 'react';
import Container from './container/Container';
import GetTouchButton from './Button/GetTouchButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  let sectionRef = useRef(null);
  let DivRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        DivRef.current,
        { opacity: 0, y: 120, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top+=-10 bottom',
            toggleActions: 'play none none none',
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef}>
        <Container className="com:max-w-400 lap:max-w-400 com:mx-auto lap:mx-auto small:px-3 small:mx-0 tab:px-3 tab:mx-0 com:px-0 lap:px-0">
          <div
            ref={DivRef}
            className=" border border-gray-500 bg-purple-400/20 small:w-auto tab:w-auto lap:w-5xl com:w-5xl rounded-lg mx-auto small:p-5 tab:p-5 lap:p-10 com:p-10 hover:bg-purple-400/30 transition duration-300 hover:shadow-lg hover:shadow-purple-400/50 hover:scale-105"
          >
            <h4 className="text-[30px] font-Inter font-bold text-white text-center mb-6">
              Ready to work together?
            </h4>
            <p className="text-[18px] font-Inter font-medium text-gray-400 text-center">
              I'm always excited to take on new challenges and collaborate with
              amazing teams. Let's discuss how I can contribute to your next
              project.
            </p>
            <div
              className="flex items-center justify-center"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <GetTouchButton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section6;
