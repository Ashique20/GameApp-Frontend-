import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const All =()=>{
//  used axios to load data from service.json any
    const [all,setAll] =useState() 
    useEffect(()=>{
        axios.get(
            'service.json'
        )
       .then((response)=>{
            setAll(response.data)
       })
       .catch((error)=>console.log(error))

        
    },[])

    return(
       <div  style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp6212351.jpg") ` }}>
         <div className="sm:grid grid-cols-1 lg:grid grid-cols-3 min-h-screen   gap-5" >
            {all?.map(a=><div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={a.img} alt="Shoes" className="rounded-xl w-80" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{a.name}</h2>
    <p>{a.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy for {a.price}</button>
    </div>
  </div>
</div>)}
        </div>
       </div>
    )
}

export default All;