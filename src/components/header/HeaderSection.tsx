import { FaAngleRight } from "react-icons/fa"
import {CgMenu, CgClose} from "react-icons/cg"
import { Navbar } from "./Navbar"
import { useState } from "react"

import { menuItems } from "../../data/navitems";

export const HeaderSection = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => { 
    setNavIsOpen(prev => !prev)
   }
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-40 bg-white'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 container mx-auto'>
      <a href="#hero">
        <div className='w-40 lg:w-full font-bold cursor-pointer flex items-center text-gray-800'>
          <FaAngleRight />
          <span>Vladimir Loza</span>
        </div>
      </a>
      
      <div onClick={()=>setNavIsOpen(!navIsOpen)} className='text-3xl absolute right-8 top-6 cursor-pointer -mt-2 md:hidden'>
      {navIsOpen ? <CgClose /> : <CgMenu />}
      </div>

      <Navbar navIsOpen={navIsOpen} toggleNav={toggleNav}/>
      </div>
    </div>
  )
}

    // <header className="flex justify-around sticky top-0 px-2 z-10 backdrop-blur-md shadow">
    //   <div className="w-40 m-3 text-black flex items-center">
    //     <FaAngleRight />
    //     <a href="#home">Vladimir Loza</a>
    //   </div>
    //   <Navbar />      
    // </header>