import React from 'react';
import T1 from '../assets/Team 2.png';
import T2 from '../assets/Team 1.jfif';
import T3 from '../assets/Team 3.jfif';

const teamMembers = [
  {
    img: T1,
    name: 'Mr. Unknown 1',
    title: 'CEO & Founder',
    role: 'Web Developer & Programmer',
    border: 'border-double',
  },
  {
    img: T2,
    name: 'Mr. Unknown 2',
    title: 'Project Manager',
    role: 'Frontend Developer',
    border: 'border-double',
  },
  {
    img: T3,
    name: 'Mr. Unknown 3',
    title: 'CTO',
    role: 'Backend Specialist',
    border: 'border-double',
  },
];

const Hero5 = () => {
  return (
    <div className="bg-slate-950 pb-16 pt-28">
      <h1 className="text-4xl font-medium text-white text-center mb-4">Our Team</h1>
      <hr className="border-2 border-white w-80 m-auto mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`border-4 border-white ${member.border} bg-slate-900 rounded-lg shadow-white shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            <img
              className="w-full h-[24rem] object-cover rounded-t-md"
              src={member.img}
              alt={member.name}
            />
            <div className="text-white text-center pt-6 pb-6">
              <p className="text-xl font-bold">{member.name}</p>
              <p className="text-sm">{member.title}</p>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero5;
