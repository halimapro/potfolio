import React from 'react'
import Container from '../Laouts/Container'
import { MdPadding } from 'react-icons/md'

const Banner = () => {
  return (
    <div className='bg-banner  bg-cover bg-no-repeat bg-center'>
      <Container>
        <h1 className='text-xl sm:text-3xl sm:leading-[60px] md:leading-[80px]   md:text-5xl text-white  md:text-white font-bold md:w-[730px] pt-16 md:pt-[243px]'>We exist since 1975 on the oil and gas industry.</h1>
        <button className='bg-red-500 py-1 px-6  md:py-3 md:px-10 text-white mt-7 mb-20 md:mb-[200px]'>LEARN MORE</button>
      </Container>
      
    </div>
  )
}

export default Banner
