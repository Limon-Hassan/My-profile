'use client';
import React, { forwardRef, useEffect, useRef } from 'react';
import Container from './container/Container';
import { LuMessageCircle } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { GrDocumentText } from 'react-icons/gr';
import { BsSend } from 'react-icons/bs';
import SendButton from './Button/SendButton';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = forwardRef<HTMLElement>((props, ref) => {
  let sectionRef = useRef(null);
  let FullBoxRef = useRef(null);
  let headingRef = useRef(null);

  let inputsRef1 = useRef(null);
  let inputsRef2 = useRef(null);
  let inputsRef3 = useRef(null);
  let inputsRef4 = useRef(null);
  let btnRef = useRef(null);
  let cardRef1 = useRef(null);
  let cardRef2 = useRef(null);
  let cardRef3 = useRef(null);
  let cardRef4 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        },
      );

      gsap.fromTo(
        FullBoxRef.current,
        {
          opacity: 0,
          y: 200,
          filter: 'blur(5px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.fromTo(
        inputsRef1.current,
        { y: 50, x: -50, filter: 'blur(3px)', opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'power3.out',
        },
      )
        .fromTo(
          cardRef1.current,
          { y: -50, x: 50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<',
        )
        .fromTo(
          inputsRef2.current,
          { y: 50, x: -50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '+=0.02',
        )
        .fromTo(
          cardRef2.current,
          { y: -50, x: 50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<',
        )
        .fromTo(
          inputsRef3.current,
          { y: 50, x: -50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '+=0.02',
        )
        .fromTo(
          cardRef3.current,
          { y: -50, x: 50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<',
        )
        .fromTo(
          inputsRef4.current,
          { y: 50, x: -50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '+=0.02',
        )
        .fromTo(
          cardRef4.current,
          { y: -50, x: 50, filter: 'blur(3px)', opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
          },
          '<',
        )
        .fromTo(
          btnRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          '+=0.05',
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="contact" ref={ref}>
        <div ref={sectionRef} className="mb-20 mt-40 w-full">
          <Container className="com:max-w-400 lap:max-w-400 com:mx-auto lap:mx-auto small:px-3 small:mx-0 tab:px-3 tab:mx-0 com:px-0 lap:px-0">
            <div ref={headingRef}>
              <h2 className="text-4xl font-bold text-center animated-gradient-text font-Inter mb-5">
                Get In Touch
              </h2>
              <p className="text-center small:text-[16px] tab:text-[18px] lap:text-[18px] com:text-[18px] font-medium small:w-auto tab:w-auto lap:max-w-2xl com:max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear
                from you. Let's create something amazing together!
              </p>
            </div>
            <div
              ref={FullBoxRef}
              className="mx-auto border-2 border-purple-400 small:p-5 tab:p-5 lap:p-20 com:p-20 bg-purple-400/20 rounded-lg mt-15 small:max-w-auto tab:max-w-auto lap:max-w-7xl com:max-w-7xl flex small:flex-col tab:flex-col lap:flex-row com:flex-row small:items-start tab:items-start lap:items-center com:items-center small:justify-normal tab:justify-normal lap:justify-between com:justify-between gap-20"
            >
              <div>
                <h4 className="flex items-center gap-3 text-3xl font-bold mb-5">
                  <LuMessageCircle
                    className="text-purple-500 text-purple-5"
                    size={28}
                  />
                  Send Message
                </h4>
                <div
                  ref={inputsRef1}
                  className="flex flex-col gap-1 mt-5 relative"
                >
                  <label
                    className="text-[16px] font-Inter font-white font-bold"
                    htmlFor="Name"
                  >
                    Your Name
                  </label>
                  <input
                    className="small:w-85 tab:w-full lap:w-125 com:w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    type="text"
                  />
                  <span className="absolute top-10 left-3">
                    <CiUser className="text-gray-400" size={28} />
                  </span>
                </div>
                <div
                  ref={inputsRef2}
                  className="flex flex-col gap-1 mt-5 relative"
                >
                  <label
                    className="text-[16px] font-Inter font-white font-bold"
                    htmlFor="Email"
                  >
                    Your Email
                  </label>
                  <input
                    className="small:w-85 tab:w-full lap:w-125 com:w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    type="text"
                  />
                  <span className="absolute top-10 left-3">
                    <MdOutlineEmail className="text-gray-400" size={28} />
                  </span>
                </div>
                <div
                  ref={inputsRef3}
                  className="flex flex-col gap-1 mt-5 relative"
                >
                  <label
                    className="text-[16px] font-Inter font-white font-bold"
                    htmlFor="Subject"
                  >
                    Subject
                  </label>
                  <input
                    className="small:w-85 tab:w-full lap:w-125 com:w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    name="subject"
                    id="subject"
                    placeholder="What's on your mind?"
                    type="text"
                  />
                  <span className="absolute top-10 left-3">
                    <GrDocumentText className="text-gray-400" size={28} />
                  </span>
                </div>
                <div ref={inputsRef4} className="flex flex-col gap-1 mt-5">
                  <label
                    className="text-[16px] font-Inter font-white font-bold"
                    htmlFor="Message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="small:w-85 tab:w-full lap:w-125 com:w-125 h-50 bg-gray-400/30 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                  />
                </div>

                <div ref={btnRef}>
                  <SendButton className="small:w-85 tab:w-85 lap:w-125 com:w-125" />
                </div>
              </div>
              <div className="w-1 h-163.75 small:hidden tab:hidden lap:block com:block bg-white rounded-md" />
              <div className="flex flex-col gap-8">
                <div
                  ref={cardRef1}
                  className="cardsRef flex  small:w-85 tab:w-85 lap:w-full com:w-full  h-auto items-center gap-3 bg-green-500/20 p-5 rounded-xl shadow-lg shadow-green-500/20 hover:bg-green-500/30 hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-green-500 text-white py-5 px-5 rounded-full">
                    <MdOutlineEmail size={28} />
                  </span>
                  <div className="flex-col">
                    <h4 className="text-[20px] font-bold font-Inter text-white">
                      Email
                    </h4>
                    <a
                      className="text-[16px] font-Inter font-medium text-white break-all"
                      href="mailto:mahammudhassanlimon@gmail.com"
                    >
                      mahammudhassanlimon@gmail.com
                    </a>
                  </div>
                </div>
                <div
                  ref={cardRef2}
                  className="cardsRef flex  small:w-85 tab:w-85 lap:w-full com:w-full  h-auto items-center gap-3 bg-cyan-500/20 p-5 rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-500/30 hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-cyan-500 text-white py-5 px-5 rounded-full">
                    <FiPhone size={28} />
                  </span>
                  <div className="flex-col">
                    <h4 className="text-[20px] font-bold font-Inter text-white">
                      Phone
                    </h4>
                    <a
                      className="text-[16px] font-Inter font-medium text-white"
                      href="tel:+8801887604100"
                    >
                      +8801887604100
                    </a>
                  </div>
                </div>
                <div
                  ref={cardRef3}
                  className="cardsRef flex  small:w-85 tab:w-85 lap:w-full com:w-full  h-auto items-center gap-3 bg-pink-500/20 p-5 rounded-xl shadow-lg shadow-pink-500/20 hover:bg-pink-500/30 hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white py-5 px-5 rounded-full">
                    <IoLocationOutline size={28} />
                  </span>
                  <div className="flex-col">
                    <h4 className="text-[20px] font-bold font-Inter text-white">
                      Location
                    </h4>
                    <a
                      className="text-[16px] font-Inter font-medium text-white"
                      href="https://maps.google.com/?q=Dhaka,+Bangladesh"
                    >
                      Dhaka, Bangladesh
                    </a>
                  </div>
                </div>
                <div
                  ref={cardRef4}
                  className=" small:w-85 tab:w-85 lap:w-full com:w-full  h-auto bg-gray-500/20 p-5 rounded-xl shadow-lg shadow-gray-500/20 hover:bg-gray-500/30 transition-colors duration-300"
                >
                  <h4 className="text-[20px] font-bold font-Inter text-white mb-3">
                    Connect on Social
                  </h4>
                  <div className="flex items-center justify-between">
                    <a
                      href="https://www.linkedin.com/in/mahammud-hassan-limon"
                      className="flex items-center gap-2 bg-transparent text-white font-medium text-[20px] w-44 h-12.5 justify-center rounded-xl cursor-pointer border border-gray-500 hover:scale-105 transition-transform duration-300"
                    >
                      <span>
                        <FaLinkedin size={28} />
                      </span>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Limon-Hassan"
                      className="flex items-center gap-2 bg-transparent text-white font-medium text-[20px] w-44 h-12.5 justify-center rounded-xl cursor-pointer border border-gray-500 hover:scale-105 transition-transform duration-300"
                    >
                      <span>
                        <FaGithub size={28} />
                      </span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
});

export default GetInTouch;
