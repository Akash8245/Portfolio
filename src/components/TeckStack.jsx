import React, { useEffect, useState } from 'react';
import html from "../assets/techStack/html.svg";
import css from "../assets/techStack/css.svg";
import js from "../assets/techStack/js.svg";
import tailwind from "../assets/techStack/tailwind.svg";
import react from "../assets/techStack/react.svg";

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-[50vh] font-[Poppins] bg-[#20272F] text-white opacity-0 transform transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h1 className='text-3xl font-bold text-center pb-6'>My TechStack</h1>

      <div className='w-[97vw] rounded-[10px] p-3 my-3 flex justify-center space-x-5 flex-wrap'>
        <img src={html} alt="html" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false"  />
        <img src={css} alt="css" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false"  />
        <img src={js} alt="js" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false"  />
        <img src={tailwind} alt="tailwind" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false"  />
        <img src={react} alt="react" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false"  />
      </div>
    </div>
  );
}
