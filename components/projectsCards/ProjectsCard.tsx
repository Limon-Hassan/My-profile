'use client';
import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const ProjectsCard = ({ data }: { data: any }) => {
  // const [liked, setLiked] = useState(false);
  // const [count, setCount] = useState(data.like);

  // const handleLike = () => {
  //   if (!liked) {
  //     setCount((prev: number) => prev + 1);
  //   } else {
  //     setCount((prev: number) => prev - 1);
  //   }
  //   setLiked(!liked);
  // };

  return (
    <div className="bg-white/40 max-w-150 max-h-82.5 p-4 rounded-xl backdrop-blur-md">
      <div>
        <img src="/New folder/Evarto.png" alt="" />
        <div className='flex items-center justify-between bg-emerald-700 px-2'>
          <h4>Evarto E-commerce</h4>
          <button>
            <div>
              <FiHeart size={30} className='fill-blue-800' />
            </div>
            <span>22</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
