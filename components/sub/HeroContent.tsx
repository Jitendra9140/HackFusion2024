"use client";
import React,{useState,useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image";

const HeroContent = () => {
  useEffect(()=>{
     AOS.init({})
  })
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const destination = new Date('Jan 1, 2025').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) clearInterval(interval);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);
  return (
    <div
 
    data-aos="fade-right"
    className="flex md:flex-row  sm:flex-col  flex-col  items-center justify-center px-20 ip:px-4 mb:px-10 mt-20 w-full  z-[20]"
  >
    <div className="h-full w-full flex flex-col gap-5 md:pl-10 justify-center m-auto  text-start">
      <div
        data-aos="zoom-in"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >

        <h1 className="Welcome-text text-[13px]">
          Hack-Fusion Hackthon
        </h1>
      </div>

      <div
       
        className="flex flex-col gap-6 mt-6 text-6xl font-bold  text-white  mb:text-5xl ip:text-[35px]  "
      >
          WHAT IS 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
           
            HACK-FUSION ?
          </span>
      </div>

      <p
       
        className="text-lg text-gray-400 my-5  w-full text-[15px] "
      >HackFusion, a 24-hour national-level hackathon by Bharti Vidyapeeth College of Engineering, transcends typical competitions.
      
       It's an immersive opportunity for participants to unleash creativity and innovation, fostering collaboration and problem-solving.
       
        Beyond coding, it's a dynamic journey where technology meets creativity, creating a community of forward-thinking individuals.
      </p>
      
      <a
        
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Learn More!
      </a>
    </div>

    <div
    
      data-aos="zoom-in"
      className=" w-full h-full  z-3 flex    gap-4  bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <img
        src="/mainIconsdark.svg"
        alt="work icons"
        className="h-[500px] w-[500px]"
      />
    </div>
  </div>
  );
};

export default HeroContent;
