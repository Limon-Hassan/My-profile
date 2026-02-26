import React from 'react';

const Skills_Cards = ({ skill }: { skill: any }) => {
  return (
    <div className="animated-border-box w-115 h-68.75">
      <div className="content bg-linear-to-r from-[#09071e] to-[#282857] p-5">
        <span className="flex flex-col gap-3.75">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <img
                className="w-full h-full object-cover bg-center"
                src={skill.skillImage}
                alt={skill.title}
              />
            </div>
            <div>
              <h4 className="text-[22px] font-Inter font-bold text-white">
                {skill.title}
              </h4>
              <span className="text-[14px] font-Inter text-gray-400">
                {skill.technologies.length} technologies
              </span>
            </div>
          </div>
          <h5 className="text-[14px] font-Inter font-medium text-white">
            Proficiency ({skill.proficiency})
          </h5>
          <div className="flex flex-wrap items-center gap-2">
            {skill.technologies.map((tech: any, index: number) => (
              <button
                key={index}
                type="button"
                title={tech.name}
                className="bg-gray-300/20 w-32 h-8 flex items-center justify-center gap-1.5 font-Inter font-medium rounded-md border border-blue-800/40"
              >
                <img src={tech.img} alt={tech.name} className="w-6 h-6" />
                <span>{tech.name}</span>
              </button>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Skills_Cards;
