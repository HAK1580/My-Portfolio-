import React from 'react'

const About = () => {
  return (
    <div className='my-30'  >
        <h1 className='flex  justify-center items-center  my-10 sm:text-[2.5rem] lg:text-[3.7rem] text-[1.5rem]' >About Me </h1>
        <div className="about-me 
        lg:flex-row lg:justify-between  mx-auto w-[95%] lg:gap-10
        flex justify-center gap-2 items-center flex-col">
       
       <img className='w-120 rounded-[4px] max-[1024px]:hidden'  src="aboutimg.png" alt="" />

        <div className="desc  lg:w-[55%]  w-[82%] mx-auto ">
           <p className='md:text-[1.2rem] lg:text-[1.4rem] ' >
             <span className='text-[1.8rem]'>" </span>
  I’m M. Hassan Ali Khan, a Frontend Developer with 1 year of experience building responsive and user-friendly web applications. 
  Skilled in <span class="text-blue-400">React.js, Redux, JavaScript, and Tailwind CSS</span>, I’ve developed projects including an {<br></br>} 
  <span class="text-blue-400">e-commerce website, weather app, University's admission form , and UI clones like Netflix</span>. 
  I focus on clean, efficient code and delivering seamless user experiences across all devices 
</p>
  <span className='text-[1.8rem] '> " </span>

        </div>

        </div>
    </div>
  )
}

export default About