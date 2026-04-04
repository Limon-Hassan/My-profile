import React from 'react';
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
          <div className="mx-auto border-2 border-purple-400 p-20 bg-purple-400/20 rounded-lg mt-10 max-w-7xl flex items-center justify-between gap-20">
            <div>
              <h4 className="flex items-center gap-3 text-3xl font-bold mb-5">
                <LuMessageCircle
                  className="text-purple-500 text-purple-5"
                  size={28}
                />
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

              <SendButton />
            </div>
            <div className="w-1 h-163.75 bg-white rounded-md" />
            <div className="flex flex-col gap-8">
              <div className="flex w-full h-auto items-center gap-3 bg-green-500/20 p-5 rounded-xl  shadow-lg shadow-green-500/20 hover:bg-green-500/30 hover:scale-105 transition-transform duration-300">
                <span className="bg-green-500 text-white py-5 px-5 rounded-full">
                  <MdOutlineEmail size={28} />
                </span>
                <div className="flex-col">
                  <h4 className="text-[20px] font-bold font-Inter text-white">
                    Email
                  </h4>
                  <a
                    className="text-[16px] font-Inter font-medium text-white"
                    href="mailto:mahammudhassanlimon@gmail.com"
                  >
                    mahammudhassanlimon@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex w-full h-auto items-center gap-3 bg-cyan-500/20 p-5 rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-500/30 hover:scale-105 transition-transform duration-300">
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
              <div className="flex w-full h-auto items-center gap-3 bg-pink-500/20 p-5 rounded-xl shadow-lg shadow-pink-500/20 hover:bg-pink-500/30 hover:scale-105 transition-transform duration-300">
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
              <div className="w-full h-auto bg-gray-500/20 p-5 rounded-xl shadow-lg shadow-gray-500/20 hover:bg-gray-500/30 transition-colors duration-300">
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
      </section>
    </>
  );
};

export default GetInTouch;
