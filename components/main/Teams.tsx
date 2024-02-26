import React, { useState, useRef } from 'react';
import Carousel, { CarouselRef } from 'react-carousel-elasticss';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
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

  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const carouselRef = useRef<CarouselRef<TeamMember>>(null);
  let resetTimeout: NodeJS.Timeout;

  return (
    <div id='teams'>
      <section className="py-2 z-20">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 data-aos="zoom-in-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">Our team</h1>
          <Carousel 
            className='team flex gap-3 z-[20]'
            itemsToShow={3.5}
            itemPadding={[10, 10]}
            itemsToScroll={2}
            showArrows={true}
            
            ref={carouselRef as React.MutableRefObject<CarouselRef<TeamMember>>}
            // enableAutoPlay={true}
            autoPlaySpeed={1500}
            breakPoints={breakpoints}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === totalPages && carouselRef.current) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current?.goTo(0);
                }, 1500);
              }
            }}
            
          >
            {items.map((item) => (  
              <div data-aos="zoom-out" key={item.id} className="flex flex-col items-center p-8 transition-colors  duration-300 transform   cursor-pointer rounded-xl  group bg-[#070F2B]  w-[300px]  justify-center shadow-2xl shadow-inner-2xl drop-shadow-2xl  ">
                <img className="object-cover w-32 h-32 rounded-full  outline outline-white hover:outline-purple-400 outline-offset-2 outline-[5px]  "
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
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
          </Carousel>
        </div>
      </section>
    </div>
  );
}