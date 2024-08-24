import Services from "../Services/Services"
import { useEffect, useState } from 'react'


const Ourservice = () => {
  const [friend,setFriend] = useState([])
  useEffect(()=>{
    fetch('./serviceData.JSON')
    .then(response =>response.json())
    .then((data) =>setFriend(data));
    },[]);

  return (
   <div className='md:grid md:grid-cols-2'> 
     <div className='md:pl-[200px] md:mr-[390px]'>
      <h1 className='font-popins md:text-[48px] pb-4 font-bold md:w-[289px]'>Our Services</h1>
      <p className='font-popins text-base text-gray md:w-[355px] md:mb-0 mb-[20px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
  {
    // eslint-disable-next-line react/jsx-key
    friend.map(item => <Services items={item}></Services> )
  }
   
    </div>
     )
     }


export default Ourservice




