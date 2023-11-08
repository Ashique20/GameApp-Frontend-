import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Media=({img})=>{
    // used Aos for scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return(
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
        <figure><img data-aos='fade-down' src={img} alt="Shoes" /></figure>
       
      </div>
     
    
       
  
    )
}

export default Media;