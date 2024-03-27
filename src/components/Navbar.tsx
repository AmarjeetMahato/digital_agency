"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from './DropDownMenu';

const Navbar = () => {
     const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(true)

     const toggleDropDown = () => {
          setIsDropDownVisible(!isDropDownVisible)
     }

     const closeDropDown =() => {
          setIsDropDownVisible(false)
     }


  return (
     <nav>
          <div className=' p-6 md:p-10 flex items-center justify-between z-50  '>
          <div className=' '>
                  <Link href={"/"}>
                     <p className=' text-white w-10 h-10 md:w-14 md:h-14'>logo</p>
                  </Link>
          </div>

          <div className=' cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                    <h1 className=' hover:text-gray-50 '>Website Design</h1>
                    <h1 className=' hover:text-gray-50 '>   Graphic Design</h1>
                    <h1 className=' hover:text-gray-50 '> Shopify Stores</h1>
                    <h1 className=' hover:text-gray-50 '>  Brands</h1>
                    <Link href={"/pricing"} className=' hover:text-gray-50 '> Pricing</Link>
          </div>

          <div className=' flex md:hidden'>
                  {!isDropDownVisible ? (
                     // Display an X Icon when the drop is visible  
                     <div
                       onClick={toggleDropDown}
                       className=' w-8 h-8 text-slate-300 cursor-pointer'
                     >
                                 <X/>
                                 <DropDownMenu onClose={closeDropDown}/>
                     </div>
                  ) : (
                        <AlignJustify onClick={toggleDropDown} className=' w-8 h-8 text-slate-300 cursor-pointer'/>
                  )}
          </div>

           <div className=' hidden md:flex'>
                   <Link href={"/contact"}
                    className='  inline-flex h-12 animate-shimmer items-center justify-center 
                    rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                      focus:ring-offset-slate-50
        '>
                     Contact
                   </Link>
           </div>
    </div>
     </nav>
  )
}

export default Navbar