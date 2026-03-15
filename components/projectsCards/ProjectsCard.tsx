'use client';
import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const ProjectsCard = ({ data }: { data: any }) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(data.like);

  const handleLike = () => {
    if (!liked) {
      setCount((prev: number) => prev + 1);
    } else {
      setCount((prev: number) => prev - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="animated-product-box w-131.25 h-87.5 group cursor-pointer hover:scale-95 transition-all duration-500 ease-in-out">
      <div className="content bg-purple-700/70 hover:bg-black p-5  transition-transform duration-300">
        <img
          className="z-9999 transition-all duration-500 group-hover:rounded-xl"
          src={data.image}
          alt={data.title}
        />
        <div className="flex items-center justify-between px-2 mt-2">
          <h4 className="z-9999 group-hover:text-purple-500 transition-all duration-300 font-bold">
            {data.title}
          </h4>
          <button className="z-9999">
            <div onClick={handleLike}>
              <FiHeart
                size={40}
                className={`transition-all duration-300 delay-100 ease-in-out cursor-pointer ${liked ? 'fill-white scale-110' : ''} `}
              />
            </div>
            <span>{count}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

