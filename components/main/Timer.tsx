import React,{useState,useEffect} from 'react'

export default function Timer() {
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

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='w-full flex flex-row px-20'>

        <div className="  flex flex-col justify-center items-center">
        <div className="text-3xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
  Journey into the realms of code starts in
  </span>
</div> 
    
       <div className="clock_wrapper flex  items-center gap-3 mt-10 ">
        <div className="clock_data flex bg-[#070F2B]  rounded-md p-5  justify-center w-[150px] h-[150px] shadow-2xl shadow-inner-2xl drop-shadow-2xl items-center gap-3">
            <div className='text-center'>
            <h1 className='text-white text-3xl'>{days}</h1>
            <h5 className='text-white text-xl'>Days</h5> 
            </div>
        </div>
        <div className="clock_data flex bg-[#070F2B]  rounded-md p-5  justify-center w-[150px] h-[150px] shadow-2xl shadow-inner-2xl drop-shadow-2xl items-center gap-3">
            <div className='text-center flex flex-col'>
            <h1 className='text-white text-3xl'>{hours}</h1>
            <h5 className='text-white text-xl'>Hours</h5>  
            </div>
        </div>
        <div className="clock_data flex bg-[#070F2B]  rounded-md p-5  justify-center w-[150px] h-[150px] shadow-2xl shadow-inner-2xl drop-shadow-2xl items-center gap-3">
            <div className='text-center'>
            <h1 className='text-white text-3xl'>{minutes}</h1>
            <h5 className='text-white text-xl'>Minutes</h5>
            </div>
        </div>
        <div className="clock_data flex bg-[#070F2B]  rounded-md p-5  justify-center w-[150px] h-[150px] shadow-2xl shadow-inner-2xl drop-shadow-2xl items-center gap-3">
            <div className='text-center'>
            <h1 className='text-white text-3xl mb-2'>{seconds}</h1>
            <h5 className='text-white text-xl'>Seconds</h5>
            </div>
        </div>
    </div>
    </div>
    <div className=""></div>
    </div>
  )
}


 