import React from 'react';
import { PiBuildingOffice } from 'react-icons/pi';
import { MdEventNote, MdOutlineUpdate } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

const Pxe = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col items-center gap-10 mt-14">
      <div className="bg-purple-400/20 w-6xl rounded-lg p-10 flex justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-15 h-15 rounded-md flex items-center justify-center border border-gray-500 bg-gray-400/30">
              <PiBuildingOffice className="text-cyan-500" size={34} />
            </span>
            <div>
              <h4 className="text-[24px] font-Inter font-bold text-cyan-500">
                {item.company}
              </h4>
              <h5 className="text-purple-500 font-Inter font-medium">
                {item.position}
              </h5>
            </div>
          </div>
          <p className="flex items-center gap-3 mb-2.5">
            <span>
              <MdEventNote className="text-cyan-500" size={24} />
            </span>
            <span className="text-gray-400 font-Inter font-medium">
              {item.duration}
            </span>
          </p>
          <p className="flex items-center gap-3 mb-2.5">
            <span>
              <FaLocationDot className="text-cyan-500" size={24} />
            </span>
            <span className="text-gray-400 font-Inter font-medium">
              {item.location}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <span>
              <MdOutlineUpdate className="text-cyan-500" size={24} />
            </span>
            <span className="text-gray-400 font-Inter font-medium">
              {item.type}
            </span>
          </p>
        </div>
        <div>
          <h4 className="text-gray-400 font-Inter font-medium w-165">
            {item.description}
          </h4>
          <span className="flex items-center gap-3 text-[20px] mt-3">
            <FaArrowRight className="text-purple-500" size={24} />
            Key Achievements
          </span>
          <ul className="list-disc list-inside mt-2">
            {item.keyAchievements.map((achievement: string, index: number) => (
              <li key={index} className="text-gray-400 font-Inter font-medium">
                {achievement}
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-3 text-[20px] mt-3">
            <LuSquareArrowOutUpRight className="text-purple-500" size={24} />
            Technologies Used
          </span>
          <div className="flex items-center justify-center gap-5 flex-wrap mb-10 mt-5">
            {item.technologies.map((tech: any, index: number) => (
              <button key={index} className="bg-gray-300/20 w-27.5 h-7.5 flex items-center justify-center gap-1 rounded-md border border-blue-800">
                <img
                  className="w-5 h-5 object-cover bg-center"
                  src={tech.icon}
                  alt={tech.name}
                />
                {tech.name}
              </button>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pxe;
