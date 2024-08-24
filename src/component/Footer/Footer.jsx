import React from 'react'
import Container from '../Laouts/Container'
import logo from '../../assets/logo.png'
import Cert1 from '../../assets/Cert1.png'
import Cert2 from '../../assets/Cert2.png'

import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <div className='bg-[#1F1F1F]'>
    <Container>
     <div className='flex justify-between py-[135px]'>
     <div className='w-[30%]'>
      <img src={logo} alt="" />


      <ul className='py-[35px] text-white'>
        <li className='flex items-center gap-x-2'> <IoLogoInstagram/>  <p>mail@yourcompany.com</p>  </li>
        <li className='flex items-center gap-x-2'> <IoLogoInstagram/> <p>+896 120 5889 (Toll free)</p> </li>
        <li className='flex items-center gap-x-2'> <IoLogoInstagram/>  <p>101 Baker Street, New York, USA, 12345</p> </li>
      </ul>

      <div className='flex text-white gap-x-5'>
        <span className='h-[50px] rounded-full text-[18px] p-[15px] w-[50px] bg-red-500'>
        <FaFacebookF />
        </span>

        <span className='h-[50px] rounded-full text-[18px] p-[15px] w-[50px] bg-red-500'>
        <FaTwitter />
        </span>

        <span className='h-[50px] rounded-full text-[18px] p-[15px] w-[50px] bg-red-500'>
        <FaLinkedinIn/>
        </span>

        <span className='h-[50px] rounded-full text-[18px] p-[15px] w-[50px] bg-red-500'>
        <IoLogoInstagram/>
        </span>
          
      </div>
      </div>
      <div className='flex text-white w-[60%] justify-between'>
        
        <div>
          <h3 className='text-[16px] mb-[21px] font-bold'>Company</h3>
          <ul className='flex flex-col gap-y-[15px] text-[14px]'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>

          </ul>
          </div>

        <div>
          <h3 className='text-[16px] mb-[21px] font-bold'>Others</h3>
          <ul className='flex flex-col gap-y-[15px] text-[14px]'>
            <li>Blog</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className='text-[16px] mb-[21px] font-bold'>Company</h3>
          <ul>
            <li className='flex gap-x-[5px]'>
              <img src={Cert1} alt="" />
              <img src={Cert2} alt="" />
            </li>
  
          </ul>
       </div>
     </div>
</div>

</Container>
  </div>
    </>
    
  )
}

export default Footer
