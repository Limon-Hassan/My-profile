import React from 'react';
import Container from './container/Container';
import { LuMessageCircle } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { GrDocumentText } from 'react-icons/gr';
import { BsSend } from 'react-icons/bs';
import SendButton from './Button/SendButton';

const GetInTouch = () => {
  return (
    <>
      <section className="mb-20">
        <Container className="max-w-400">
          <h2 className="text-4xl font-bold text-center animated-gradient-text font-Inter mb-5">
            Get In Touch
          </h2>
          <p className="text-center text-[18px] font-medium max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
          <div className="mx-auto border-2 border-purple-400 p-20 bg-purple-400/20 rounded-lg mt-10 max-w-7xl">
            <div>
              <h4 className="flex items-center gap-3 text-3xl font-bold mb-5">
                <LuMessageCircle className="text-purple-500 text-purple-5" size={28} />
                Send Message
              </h4>
              <div className="flex flex-col gap-1 mt-5 relative">
                <label
                  className="text-[16px] font-Inter font-white font-bold"
                  htmlFor="Name"
                >
                  Your Name
                </label>
                <input
                  className="w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                />
                <span className="absolute top-10 left-3">
                  <CiUser className="text-gray-400" size={28} />
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-5 relative">
                <label
                  className="text-[16px] font-Inter font-white font-bold"
                  htmlFor="Email"
                >
                  Your Email
                </label>
                <input
                  className="w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  type="text"
                />
                <span className="absolute top-10 left-3">
                  <MdOutlineEmail className="text-gray-400" size={28} />
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-5 relative">
                <label
                  className="text-[16px] font-Inter font-white font-bold"
                  htmlFor="Subject"
                >
                  Subject
                </label>
                <input
                  className="w-125 h-12.5 bg-gray-400/30 border border-gray-600 rounded-lg px-12.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  name="subject"
                  id="subject"
                  placeholder="What's on your mind?"
                  type="text"
                />
                <span className="absolute top-10 left-3">
                  <GrDocumentText className="text-gray-400" size={28} />
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label
                  className="text-[16px] font-Inter font-white font-bold"
                  htmlFor="Message"
                >
                  Your Message
                </label>
                <textarea
                  className="w-125 h-50 bg-gray-400/30 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={4}
                />
              </div>
              {/* <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mt-5">
                <BsSend className="text-white" size={28} />
                Send Message
              </button> */}
              <SendButton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInTouch;
