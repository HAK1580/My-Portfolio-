import React, { useEffect } from 'react'
import { useState } from 'react'
import Hamburger from './Hamburger'

const Navbar = ({hamopen,setHamopen}) => {
 

 



    return (
        <div className='sticky bg-[#000000e7] w-full top-0  z-1000 '>
            <ul className='flex w-[97%] py-2 justify-between items-center mt-3 mx-auto   '>
                <div className="nav_name pl-3 ">
                    <h1 className='text-blue-500 text-[1.25rem] font-semibold sm:text-[2.6vw]'> HAK  Portfolio </h1>
                </div>

         <div className="links hidden  sm:flex justify-center mr-10   gap-[3.5vw] items-center   ">

                <li><a className='text-[1.75vw] soge    '   href="/"> Home  </a></li>
                <li><a className='text-[1.75vw] soge  '   href="/"> About  </a></li>
                <li><a className='text-[1.75vw] soge  '   href="/"> Skills  </a></li>
                <li><a className='text-[1.75vw] soge  '   href="/"> Projects </a></li>
                <li><a className='text-[1.75vw] soge  '   href="/"> Resume  </a></li>
                <li><a className='text-[1.75vw] soge  '   href="/"> Contact </a></li>

               </div>
               <div className="ham-for-mobile sm:hidden ">
                <img onClick={()=>setHamopen(!hamopen)}  className='w-6 ham-img absolute right-4 top-4   z-1000' 
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