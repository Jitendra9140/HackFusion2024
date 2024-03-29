import React, { useState } from 'react';
import Carousel from 'react-carousel-elasticss';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
interface TeamMember {
  id: number;
  title: string;
}

export default function Teams() {
  const [items, setItems] = useState<TeamMember[]>([
    { id: 1, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
    { id: 2, title: 'Jitendra' },
 
  ]);

  const breakpoints = [
    { width: 1, itemsToShow: 1  ,pagination:false,showArrows:false},
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false,showArrows:true},
    { width: 850, itemsToShow: 3 ,showArrows:true},
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];



  return (
    <div id='teams'>
      <section className="py-2 z-20">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 data-aos="zoom-in-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">Our team</h1>
          {/* <Carousel 
            className='team flex gap-3 z-[20]'
            itemPadding={[10, 10]}
            showArrows={true}
            // enableAutoPlay={true}
            autoPlaySpeed={1500}
            breakPoints={breakpoints}            
          >
            {items.map((item) => (  
              <div data-aos="zoom-out" key={item.id} className="flex flex-col items-center p-8 transition-colors  duration-300 transform   cursor-pointer rounded-xl  group bg-[#070F2B]  w-[300px]  justify-center shadow-2xl shadow-inner-2xl drop-shadow-2xl  ">
                <Image width={40}  height={20}  className="object-cover w-32 h-32 rounded-full  outline outline-white hover:outline-purple-400 outline-offset-2 outline-[5px]  "
                  src="/logo.png"
                  alt=""
                />
                <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                  {item.title}
                </h1>
                <p className="mt-2 text-gray-500 capitalize text-white">design director</p>
                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Reddit"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <FaGithub  className="text-white" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <FaFacebookSquare className="text-white" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <FaLinkedin className="text-white"  />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </Carousel> */}
        </div>
      </section>
    </div>
  );
}