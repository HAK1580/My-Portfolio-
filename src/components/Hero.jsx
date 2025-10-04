import React from 'react'
import { useEffect } from 'react'

const Hero = () => {
    

  return (
    <div>
        <div className="hero my-12 lg:w-[90%]  max-[500px]:max-w-[98.5%] sm:max-w-[92%] max-w-[95%]  mx-auto  flex justify-between  ">
            <div className="name-des font-medium   flex flex-col gap-1">
                <h1 className=' sm:text-[1.42rem] md:text-[1.6rem] lg:text-[2.3rem] text-[1.20rem] py-0.5' >Hi, I’m <br></br> <span className='text-blue-500 md:text-[3rem] lg:text-[4.8vw]  sm:text-[2.6rem] text-[1.40rem]'> M.Hassan Ali Khan </span>  </h1>
                <h1 className=' sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.6vw] text-[1.10rem] '>a Front End Developer.</h1>
              
                <div className="cv-btn mt-10">
                <a className=' flex justify-center lg:py-2 lg:rounded-[8px] hover:bg-blue-700 hover:text-[#ffffffda]  lg:text-[1.6rem] lg:w-55 items-center rounded-[5px] px-1 w-30 py-1.5 bg-blue-600 ' href="assets/Cv.pdf" download={"assets/Cv.pdf"}  > Download CV </a>
                 </div>
       
            </div>

             <div className="hero-img flex ">
                <img className='max-[500px]:w-40 w-50 sm:w-60 md:w-75 lg:w-100  rounded-full object-cover ' src="mypic.webp" alt="portfolio-pic" />
             </div>

        </div>

     

    </div>
  )
}

export default Hero