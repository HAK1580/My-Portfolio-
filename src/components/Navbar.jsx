import React, { useEffect } from 'react'
import { useState } from 'react'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'

const Navbar = ({hamopen,setHamopen}) => {

 function onhamClick(){
    setHamopen(!hamopen);
   
}


 



    return (
        <div className='sticky bg-[#000000e7] w-full top-0  z-1000 '>
            <ul className='flex w-[97%] py-2 justify-between items-center mt-3 mx-auto   '>
                <div className="nav_name pl-3 ">
                    <a href='/' className='text-blue-500 text-[1.25rem] font-semibold sm:text-[2.6vw]'> HAK  Portfolio </a>
                </div>

         <div className="links hidden  sm:flex justify-center mr-10   gap-[3.5vw] items-center   ">

                <li><Link className='text-[1.75vw] lg:text-[1.55rem]   soge    ' to="/"> Home  </Link></li>
                <li><Link className='text-[1.75vw] lg:text-[1.55rem]   soge  '   to="/about"> About  </Link></li>
                <li><Link className='text-[1.75vw] lg:text-[1.55rem]   soge  '   to="/skills"> Skills  </Link></li>
                <li><Link className='text-[1.75vw] lg:text-[1.55rem]   soge  '   to="/projects"> Projects </Link></li>
                <li><a target='_blank' className='text-[1.75vw] lg:text-[1.55rem]   soge  '   href="/assets/Cv.pdf"> Resume  </a></li>
                <li><Link className='text-[1.75vw] lg:text-[1.55rem]   soge  '   to="/contact"> Contact </Link></li>

               </div>
               <div className="ham-for-mobile sm:hidden ">
                <img onClick={onhamClick }  className='w-6 ham-img absolute right-4 top-4   z-1000' 
                src={hamopen?"/cross.svg":`/hamburger.svg`} alt="" />
                
               </div>

            </ul>
            <div className={`hamburger-comp  ${hamopen?"animate-ham":"opacity-0"} `}>
             <Hamburger hamopen={hamopen} setHamopen={setHamopen} />

            </div>
          
        </div>
    )
}

export default Navbar