
import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [show,setShow]=useState(false)

  const handleClick=()=>{
    setShow(!show)
    
  }

  return (
    <div className='bg-primary py-[15px] lg:py-[27px]'>
      <div className='max-w-container mx-auto px-[10px] md:px-0'>
      <div className="">
        {/* desktop design */}
          <div className='hidden md:flex w-full justify-between items-center'>
          <div className="">
            <img src={logo} alt=""/>
          </div>
          
          <ul className='flex justify-end gap-x-[47px]  top-[-170px] left-0'>
        <li><a href=""className='font-popins font-semibold text-base text-white'>Home</a></li>
        <li><a href=""className='font-popins font-semibold text-base text-white'>About</a></li>
        <li><a href=""className='font-popins font-semibold text-base text-white'>Services</a></li>
        <li><a href=""className='font-popins font-semibold text-base text-white'>Gallery</a></li>
        <li><a href=""className='font-popins font-semibold text-base text-white md:mt-0 mt-3'>Gallery</a></li>
        <li className=' md:mt-0 mt-3'><a href=""className='font-popins font-semibold text-base text-white
         border md:py-3.5 md:px-8 px-4 py-2  '>CONTACT</a></li>
         </ul>
          </div>
         {/* mobile design */}
          <div>
        <div className="md:hidden flex justify-between items-center text-xl px-6">
        <div>
              <img className='w-[150px' src={logo} alt=""/>
              </div>
            <div onClick={handleClick}>
              {show ?
              <MdClose/>
              :
              <AiOutlineBars/>
              }
            </div>
        </div>
        <div>

        </div>
        {show ?  <ul className="md:hidden">
            <li><a href=""className='font-popins font-semibold text-base text-white'>Home</a></li>
            <li><a href=""className='font-popins font-semibold text-base text-white'>home</a></li>
            <li><a href=""className='font-popins font-semibold text-base text-white'>Services</a></li>
            <li><a href=""className='font-popins font-semibold text-base text-white'>Gallery</a></li>
            <li><a href=""className='font-popins font-semibold text-base text-white md:mt-0 mt-3'>Gallery</a></li>
            <li className=' md:mt-0 mt-3'><a href=""className='font-popins font-semibold text-base text-white
            border md:py-3.5 md:px-8 px-4 py-2  '>CONTACT</a></li>
          </ul> :" "}
          </div>
      


      </div>


      </div>
    </div>
    
  )
}

export default Navbar
