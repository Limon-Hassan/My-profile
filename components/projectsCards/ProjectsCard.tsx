'use client';
import React, { forwardRef, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io5';

const ProjectsCard = forwardRef(({ data }: { data: any }, ref: any) => {
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
    <a
      href={data.Link}
      ref={ref}
      className="animated-product-box small:w-auto tab:w-auto lap:w-131.25 com:w-131.25 small:h-70 tab:h-87.5 lap:h-87.5 com:h-87.5 group cursor-pointer hover:scale-95 transition-all duration-500 ease-in-out"
    >
      <div className="content bg-purple-700/70 hover:bg-black p-5  transition-transform duration-300">
        <img
          className="z-9999 transition-all duration-500 group-hover:rounded-xl"
          src={data.image}
          alt={data.title}
        />
        <button
          onClick={e => {
            e.stopPropagation();
            window.open(data.github, '_blank');
          }}
          className="small:flex tab:flex com:hidden lap:hidden z-9999 absolute top-4 right-4 w-12 h-12 group-hover:flex items-center justify-center bg-purple-400 text-white rounded-full transition-all duration-300 cursor-pointer"
        >
          <IoLogoGithub size={30} />
        </button>
        <div className="flex items-center justify-between px-2 mt-2">
          <h4 className="z-9999 group-hover:text-purple-500 transition-all duration-300 font-bold">
            {data.title}
          </h4>
          <button
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="z-9999"
          >
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
    </a>
  );
});

export default ProjectsCard;
