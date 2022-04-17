import React from "react";
import Servicecard from "./Servicecard";
import { useState, useEffect } from "react";
const Services = () => {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('../../../data.json')
    .then((resp=>resp.json()))
    .then((res)=>setData(res));
  },[])
  return (
    <div className="px-6 h-auto lg:h-[80vh]" id="services">
      <h1 className="text-left text-4xl uppercase py-2 text-gray-700 dark:text-white">Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      
       {
         data && data[0].map(el=>{
           return(
             <Servicecard tittle={el.tittle} img={el.img} desc={el.desc} price={el.price} key={el.id}
               
             />
           )
         })
       }
      </div>
    </div>
  );
};

export default Services;
