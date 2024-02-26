
"use client"
import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import your Tailwind CSS styles
import { Socials } from "@/constants";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="nav z-50  shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 flex flex-wrap items-center justify-between">
      <input type="checkbox" id="nav-check" checked={isChecked} onChange={handleCheckboxChange} />
      <div className="nav-header ">
        {/* <div className="nav-title">JoGeek</div> */}
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/logo.png" className="h-12" alt="Flowbite Logo"/>
      <span className=" content self-center text-2xl font-semibold whitespace-nowrap text-white ">HackFusion</span>
     </a>
      </div>
      <div className="nav-btn mx-auto pt-2  text-center">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a href="#" className="text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500"  rel="noopener noreferrer">
          <h1 className="text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500"  onChange={handleCheckboxChange} > Home </h1> 
        </a>
        <a href="#shedule"  rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline"> Shedule</h1> 
        </a>
        <a href="#themes"  rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline"> Themes</h1>
        </a>
        <a href="#prize"  rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline">Prize</h1>
        </a>
        <a href="#sponser"  rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline">Sponser</h1>
        </a>
        <a href="#teams"  rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline"> Team</h1>
        </a>
        <a href="#faqs" rel="noopener noreferrer">
        <h1 className="hover:text-transparent bg-clip-text text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:decoration-2  underline-offset-8 hover:decoration-purple-600 hover:underline">Faq's</h1>
        </a>
      </div>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse px-3 md:block ip:hidden">
      {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
           <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
      </div>
    </div>
    </div>
  );
};

export default Navbar;