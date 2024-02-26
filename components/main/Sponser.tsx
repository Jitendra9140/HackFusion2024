import Image from 'next/image'
import React from 'react'

export default function Sponser() {
  return (
    <div id='sponser' className="flex flex-col items-center justify-center ">
    <h1 data-aos="zoom-in-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
       Sponser
    </h1>
     <div className=" flex flex-col gap-5">
      <div className="">
         <div className="">
          <h1 className="text-[30px] text-center py-3 font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 ">Golden Sponser</h1>
         </div>
         <div data-aos="zoom-in" className="flex flex-row flex-wrap gap-4 justify-center items-center">
           <div className="w-[200px] h-[40px]  bg-white border rounded-md">
            <Image src="/Sponser1.png" className='w-[300px] h-[40px]' alt="" />
           </div>
           <div className="w-[200px] h-[200px]  bg-white border rounded-md">
            <Image src="/Sponser2.png" className='w-[300px] h-[200px]' alt="" />
           </div>
           <div className="w-[300px] h-[100px]  bg-white border rounded-md">
            <Image src="/Sponser3.png" className='w-[300px] h-[100px]' alt="" />
           </div>
         </div>
      </div>
      <div data-aos="zoom-in" className=" flex flex-col gap-5">
         <div className="">
          <h1 className="text-[30px] text-center py-3 font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 ">Silver Sponser</h1>
         </div>
         <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
           <div className="w-[300px] h-[40px]  bg-white border rounded-md">
            <Image src="/Sponser1.png" className='w-[300px] h-[40px]' alt="" />
           </div>
           <div className="w-[180px] h-[180px]  bg-white border rounded-md">
            <Image src="/Sponser6.png" className='w-[180px] h-[180px]' alt="" />
           </div>
           <div className="w-[150px] h-[150px]  bg-white border rounded-md">
            <Image src="/Sponser3.png" className='w-[150px] h-[150px]' alt="" />
           </div>
           <div className="w-[300px] h-[100px]  bg-white border rounded-md">
            <Image src="/Sponser1.png" className='w-[300px] h-[100px]' alt="" />
           </div>
         </div>
      </div>
      <div data-aos="zoom-in" className=" flex flex-col gap-5">
         <div className="">
          <h1 className="text-[30px] text-center py-3 font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 ">Golden Sponser</h1>
         </div>
         <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
           <div className="w-[250px] h-[40px]  bg-white border rounded-md">
            <Image src="/Sponser1.png" className='w-[250px] h-[40px]' alt="" />
           </div>
           <div className="w-[250px] h-[40px]  bg-white border rounded-md">
            <Image src="/Sponser7.png" className='w-[250px] h-[40px]' alt="" />
           </div>
           <div className="w-[250px] h-[80px]  bg-white border rounded-md">
            <Image src="/Sponser4.png" className='w-[250px] h-[80px]' alt="" />
           </div>
           <div className="w-[250px] h-[40px]  bg-white border rounded-md">
            <Image src="/Sponser8.png" className='w-[250px] h-[40px]' alt="" />
           </div>
         </div>
      </div>
    </div> 
    </div>
  )
}
