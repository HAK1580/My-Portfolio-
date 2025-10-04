import React from 'react'

const Hamburger = ({hamopen,setHamopen}) => {
  return (
    <div className={`border sm:hidden bg-black  rounded-[2px] border-[#ffffff1f] fixed mt-[-0.9rem]   z-100 right-0 w-[80%] h-[100vh]`}>
        <ul className='flex flex-col ml-6 mt-5 gap-6'>
            <li><a className='text-[1.2rem] ham-a' href="">Home</a></li>
            <li><a className='text-[1.2rem] ham-a' href="">About</a></li>
            <li><a className='text-[1.2rem] ham-a' href="">Skills</a></li>
            <li><a className='text-[1.2rem] ham-a' href="">Projects</a></li>
            <li><a className='text-[1.2rem] ham-a' href="">Resume</a></li>
        </ul>
        <div className="social-media mt-11 m-6">
            <h1 className='uppercase   tracking-wide  soge text-[1.2rem]'>Social </h1>
           <div className="icons py-12 gap-5 flex justify-center">
           <a target='_blank' href="https://github.com/HAK1580"> <img  className='w-6.5' src="github.svg" alt="" /> </a>
           <a target='_blank' href="https://www.tiktok.com/@codewithme._.01"> <img className='w-6.5' src="tiktok.svg" alt="" />  </a>
           <a target='_blank' href="https://www.linkedin.com/in/muhammad-hassan-ali-khan-49a965281/ "> <img className='w-6.5' src="linkedin.svg" alt="" /> </a>
           </div>
        </div>
    </div>
  )
}

export default Hamburger