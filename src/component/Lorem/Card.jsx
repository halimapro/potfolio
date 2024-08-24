import React from 'react'

const Card = (props) => {
const {title,img,btn} = props.infos

const bgimg ={
  background: `url(${img}) no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding:"90px"
  }
  
  return (
 
    <div>
      <div style={bgimg}>
      <h1 className='text-2xl text-white font-semibold w-[249px] h-[180px] my-2'>{title}</h1>
     
      <button className='bg-red-500 py-1 px-3 mt-6 text-white'>{btn}</button>
    </div>
    
    </div>
  )
}

export default Card


