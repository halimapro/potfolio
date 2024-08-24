import React from 'react'

const About = () => {
  return (
    
    <div className='md:flex justify-center pt-[136px] mr-[390px] pb-[100px] bg-[#F0F0F0] w-full'> 
      <div className='bg-aboutone flex items-center justify-center p-10 h-[360px]'>
       <h1 className='text-2xl text-white font-semibold w-[193px]'>
       Learn more about our company.
       </h1>
      </div>
       <div>
        <div className='bg-abouttwo w-[726px] h-[360px] flex items-center justify-center'>
        <button className='bg-white py-1 px-6 mt-6 text-red-500 text-semi-bold'>Learn More</button>
      </div>
        
      </div>
    </div>

  )
}

export default About
