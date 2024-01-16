import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='h-[70px] bg-[#20272F] font-[Poppins] flex items-center justify-between sticky top-0 z-50 shadow-lg'>
      <div className="cursor-pointer" onClick={() => scrollToSection('about')}>
        <h1 className='text-[#00BD95] font-bold text-2xl p-5'>&lt;/&gt;<span className='text-white'>Akash</span></h1>
      </div>

      <div className="text-white p-4 text-[12px] md:text-[18px] lg:text-[20px]">
        <ul className='flex space-x-3 md:space-x-5 cursor-pointer'>
          <li className={`hover:text-[#00BD95] ${location.pathname === "/" ? 'text-[#00BD95]' : 'text-white'}`}>
            <Link to="/" onClick={() => scrollToSection('about')}>About</Link>
          </li>
          <li className={`hover:text-[#00BD95] ${location.pathname === "/mywork" ? 'text-[#00BD95]' : 'text-white'}`}>
            <Link to="/mywork" onClick={() => scrollToSection('mywork')}>My Work</Link>
          </li>
          <li className={`hover:text-[#00BD95] ${location.pathname === "/contact" ? 'text-[#00BD95]' : 'text-white'}`}>
            <Link to="/contact" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
