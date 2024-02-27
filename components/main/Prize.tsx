import React from 'react'
import Image from 'next/image';


export default function Prize() {
  return (
    <div id='prize' className="flex flex-col items-center justify-center items-center py-20 z-20">
      <h1 data-aos="zoom-out-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Prize
      </h1>
       <div className=" flex  flex-wrap flex-row  justify-center items-center gap-5">
        <div data-aos="flip-up" className="prizecard text-white h-[300px] md:w-[350px] ip:w-[280px] rounded-md border  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:cursor-pointer border-[#070E29] border-[4px]">
           <div className=" h-[50px] w-full bg-[#070E29]  items-center justify-center flex ">
             <h1 className=" font-semibold text-transparent text-xl bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500"> 1st Place</h1>
           </div>
           <div className="flex flex-col  items-center  justify-center h-[250px] space-y-2 ">
           <Image width={40} height={20} src="/firstprize.png" className="h-[100px] w-[150px]" alt="" />
           <h1 className="text-white text-2xl font-bold">INR 35,000/-</h1>
           <p className="text-white text-center font-semibold">With Internship Opportunities, Exciting Goodies & Lots More!</p>
           </div>
          </div>
        <div data-aos="flip-up" className="prizecard text-white h-[300px] md:w-[350px]  ip:w-[280px] rounded-md border   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   hover:cursor-pointer border-[#070E29] border-[4px]">
           <div className=" h-[50px] w-full bg-[#070E29] rounded-t-md items-center justify-center flex ">
             <h1 className=" font-semibold text-transparent text-xl bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500"> 2nd Place</h1>
           </div>
           <div className="flex flex-col  items-center  justify-center h-[250px] space-y-2 ">
           <Image width={40} height={20} src="/2ndprize.png" className="h-[100px] w-[150px]" alt="" />
           <h1 className="text-white text-2xl font-bold">INR 35,000/-</h1>
           <p className="text-white text-center font-semibold">With Internship Opportunities, Exciting Goodies & Lots More!</p>
           </div>
          </div>
        <div data-aos="flip-up" className="prizecard text-white h-[300px] md:w-[350px]  ip:w-[280px] rounded-md border border-[#070E29] border-[4px]  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
           <div className=" h-[50px]  bg-[#070E29] rounded-t-md items-center justify-center flex ">
             <h1 className=" font-semibold text-transparent text-xl bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500"> 3rd Place</h1>
           </div>
           <div className="flex flex-col  items-center  justify-center h-[250px] space-y-2 ">
           <Image width={40} height={20}  src="/3rdprize.png" className="h-[100px] w-[150px]" alt="" />
           <h1 className="text-white text-2xl font-bold">INR 35,000/-</h1>
           <p className="text-white text-center font-semibold">With Internship Opportunities, Exciting Goodies & Lots More!</p>
           </div>
          </div>
       </div>
    </div>
  )
}
