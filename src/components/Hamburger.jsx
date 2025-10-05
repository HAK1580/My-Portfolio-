import React from 'react'
import { Link } from 'react-router-dom'

const Hamburger = ({hamopen,setHamopen}) => {
  return (
    <div className={`overflow-hidden border sm:hidden bg-black  rounded-[2px] border-[#ffffff1f] fixed mt-[-0.9rem]   z-100 right-0 w-[80%] h-[100vh]`}>
        <ul className='flex flex-col ml-6 mt-5 gap-6'>
            <li><Link className='text-[1.2rem] ham-a' to="/">Home</Link></li>
            <li><Link className='text-[1.2rem] ham-a' to="/about">About</Link></li>
            <li><Link className='text-[1.2rem] ham-a' to="/skills">Skills</Link></li>
            <li><Link className='text-[1.2rem] ham-a' to="/projects">Projects</Link></li>
            <li><a target='_blank' className='text-[1.2rem] ham-a' href="/assets/Cv.pdf">Resume</a></li>
        </ul>
        <div className="social-media mt-18 m-6">
            <h1 className='uppercase   tracking-wide  soge text-[1.4rem]'>Social </h1>
           <div className="icons py-12 gap-5 flex justify-center">
           <a target='_blank' href="https://github.com/HAK1580"> <img  className='w-8' src="github.svg" alt="" /> </a>
           <a target='_blank' href="https://www.tiktok.com/@codewithme._.01"> <img className='w-8' src="tiktok.svg" alt="" />  </a>
           <a target='_blank' href="https://www.linkedin.com/in/muhammad-hassan-ali-khan-49a965281/ "> <img className='w-8' src="linkedin.svg" alt="" /> </a>
           </div>
        </div>
    </div>
  )
}

export default Hamburger