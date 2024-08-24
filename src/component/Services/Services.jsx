
import './Services.css'

const Services = (props) => {
    console.log(props)

  const bgStyle ={
    background: `url(${props.items.img}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding:"150px"
    
    }
  
    return (
      <div style={bgStyle} className="service">
     
     
     <h2 className='text-2xl text-white font-semibold'>
       {props.items.title}
      </h2>
      <button className='bg-red-500 py-1 px-6 mt-6 text-white'>Learn More</button>
    
      </div>
    
    
  )
}

export default Services
