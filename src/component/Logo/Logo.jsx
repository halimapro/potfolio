import React from 'react'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import group4 from '../../assets/group4.png'
import Container from '../Laouts/Container'
import Flex from '../flex/Flex'


const Logo = () => {
  return (
    <div className='pt-[136px] mr-[390px] pb-[100px] w-full'>
      <Container> 
        <Flex className=' flex justify-between'>
        <div className='flex justify-center items-center gap-x-[12px]'> 
       <div className='w-[33px] h-[33px]'>
       <img className='w-full h-full' src= {group1} alt=""/>
       </div>
        <h3 className='text-2xl text-third font-semibold'>PETROMAX</h3>
      </div>
      <div className='flex items-center gap-x-[12px]'> 
       <div className='w-[33px] h-[33px]'>
       <img className='w-full h-full' src= {group2} alt=""/>
       </div>
        <h3 className='text-2xl text-third font-semibold'>Thevron</h3>
      </div>
      <div className='flex justify-center items-center gap-x-[12px]'> 
       <div className='w-[33px] h-[33px]'>
       <img className='w-full h-full' src= {group3} alt=""/>
       </div>
        <h3 className=' text-2xl text-third font-semibold'>BARCOO</h3>
      </div>
      <div className='flex justify-center items-center gap-x-[12px]'> 
       <div className='w-[33px] h-[33px]'>
       <img className='w-full h-full' src= {group4} alt=""/>
       </div>
        <h3 className='text-2xl text-third font-semibold'>BioSool</h3>
      </div>
        </Flex>
     
      </Container>
      
      
    </div>
  )
}

export default Logo
