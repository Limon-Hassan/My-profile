'use client';
import React from 'react';
import Container from './container/Container';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  IoCallOutline,
  IoLanguageSharp,
  IoLocationOutline,
} from 'react-icons/io5';
import { LiaCertificateSolid } from 'react-icons/lia';
import { useRef, useState } from 'react';

const Section2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
      setIsEnded(false);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
  };

  return (
    <section className=" py-14 bg-linear-to-b from-[#09071e] to-[#282857]">
      <Container className="max-w-400">
        <div className="mb-20">
          <h1 className="text-4xl font-bold text-center animated-gradient-text font-Inter">
            About Me
          </h1>
          <p className="text-center text-[18px] font-medium max-w-2xl font-Inter mt-4 text-gray-300 mx-auto">
            Get to know more about my background, experience, and what drives me
            as a developer
          </p>
        </div>
        <div className="flex items-center gap-10 justify-center">
          <div>
            <div className="relative w-120 h-90 bg-black rounded-2xl overflow-hidden mb-3 border border-purple-600 p-1">
              <video
                ref={videoRef}
                src="/love.mp4"
                className="w-full h-full object-contain cursor-pointer rounded-2xl"
                preload="metadata"
                onClick={togglePlay}
                onEnded={handleEnded}
              />

              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white hover:bg-gray-300 transition duration-300 rounded-full flex items-center justify-center w-15 h-15">
                    {isEnded ? (
                      <span className="w-8 h-8 cursor-pointer">
                        <img
                          className="w-full h-full object-contain"
                          src="/Replay.png"
                          alt="Replay"
                        />
                      </span>
                    ) : (
                      <span className="w-8 h-8 cursor-pointer">
                        <img
                          className="w-full h-full object-contain"
                          src="/Play.png"
                          alt="Play"
                        />
                      </span>
                    )}
                  </div>
                </button>
              )}
            </div>

            <h3 className="text-2xl font-Inter font-bold text-cyan-400 mb-4">
              What I Bring
            </h3>
            <div className=" grid grid-cols-2 gap-3 items-center">
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-purple-500"></span>
                </span>
                <span className="ml-2">Performance Optimization</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">Scalable Architecture</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-purple-500"></span>
                </span>
                <span className="ml-2">Modern UI/UX</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="ml-2">API Development</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 ">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-lg h-auto p-5 border border-gray-500/30 rounded-2xl relative bg-gray-800/60 backdrop-blur-lg sm:p-5 md:p-6 hover:border-gray-500/50 transition-all duration-300 shadow-2xl shadow-black/30 group-hover:scale-105 hover:shadow-purple-500/10">
                <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white mb-3">
                  <span>
                    <MdOutlineMailOutline size={24} color="purple" />
                  </span>
                  Contact Information
                </h4>
                <span className="flex items-center gap-3 mb-3">
                  <IoLocationOutline size={18} color="cyan" /> Dhaka, Bangladesh
                </span>
                <span className="flex items-center gap-3 mb-3">
                  <IoCallOutline size={18} color="cyan" /> +8801887604100
                </span>
                <span className="flex items-center gap-3 mb-3">
                  <MdOutlineMailOutline size={18} color="cyan" />
                  mahammudhassanlimon@gmail.com
                </span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-lg h-auto p-5 border border-gray-500/30 rounded-2xl relative bg-gray-800/60 backdrop-blur-lg sm:p-5 md:p-6 hover:border-gray-500/50 transition-all duration-300 shadow-2xl shadow-black/30 group-hover:scale-105 hover:shadow-emerald-500/10">
                <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white mb-3">
                  <span>
                    <IoLanguageSharp size={24} color="purple" />
                  </span>
                  Languages
                </h4>
                <button className="text-[14px] font-Inter font-medium text-white bg-cyan-700/30  border border-cyan-500 py-2 px-3 rounded-full">
                  English
                </button>
                <button className="text-[14px] font-Inter font-medium text-white bg-cyan-700/30 ml-2.5 border border-cyan-500 py-2 px-3 rounded-full">
                  Bangla (Native)
                </button>
                <button className="text-[14px] font-Inter font-medium text-white bg-cyan-700/30 ml-2.5 border border-cyan-500 py-2 px-3 rounded-full">
                  Hindi
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-lg h-auto p-5 border border-gray-500/30 rounded-2xl relative bg-gray-800/60 backdrop-blur-lg sm:p-5 md:p-6 hover:border-gray-500/50 transition-all duration-300 shadow-2xl shadow-black/30 group-hover:scale-105 hover:shadow-red-500/10">
                <h4 className="text-[20px] font-Inter font-medium flex items-center gap-2.5 text-white mb-3">
                  <span>
                    <LiaCertificateSolid size={24} color="purple" />
                  </span>
                  Certifications
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-white text-[16px] font-medium font-Inter">
                    MERN Stack Development
                  </span>
                  <a
                    href="https://certificate.citsmp.com/?certificate_id=MERN-23110816"
                    className="underline text-[13px] font-medium font-Inter text-cyan-500 cursor-pointer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
