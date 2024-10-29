// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative flex flex-col items-center justify-center h-screen top-center mb-12 overflow-hidden">
      <div className="relative z-30 text-white text-center xl:w-1/2 w-full space-y-6">
        <h1 className="font-[Outfit] xl:text-7xl text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5DBEDE] to-[#ffffff] inline-block text-transparent bg-clip-text">
          Elevate Your Style
        </h1>
        <p className="leading-loose text-lg font-[Manrope] px-4">
          We specialize in shaping confidence and excellence. From professional modeling and action choreography to elite event security, self-defense training, and classic couture—discover how we help you stand out, stay protected, and live stronger.
        </p>
        <div className="mt-6 content-center">
          <a className="btn relative inline-flex items-center justify-start overflow-hidden font-bold transition-all bg-[#0A1F44] hover:bg-white group py-3 px-7 font-[Manrope]">
            <span className="w-56 h-48 bg-indigo-100 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-[#0A1F44]">Check Our Collections</span>
          </a>
        </div>
      </div>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="https://assets.mixkit.co/videos/35875/35875-720.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;
