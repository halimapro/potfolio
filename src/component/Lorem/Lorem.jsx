import React, { useEffect, useState } from 'react'
import Card from './Card'
import Container from '../Laouts/Container'
import { FaAngleRight } from "react-icons/fa";


const Lorem = () => {
const [loreminfo,setLoreminfo] = useState([])
  useEffect(()=>{
  fetch("./loremdata.JSON").then(response => response.json())
  .then(data => setLoreminfo(data))
  },[])
  
  return (
    <div className=' bg-[#F0F0F0] py-[120px]'>
      <Container>
     <div className='grid grid-cols-3 gap-x-10'>
      {
        loreminfo.map(info => <Card infos={info}></Card>)
      }
    </div>

   <div className='flex items-center justify-end mt-[28px]'>
   <p className='text-right'>
        MORE FROM THE BLLOG
      </p>
      <FaAngleRight/>
   </div>
    
    </Container>
    </div>
      
    
    
  )
}

export default Lorem
