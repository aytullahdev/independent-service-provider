import React from "react";
import Servicecard from "./Servicecard";

const Services = () => {
  return (
    <div className="px-6" id="services">
      <h1 className="text-left text-4xl uppercase py-2 text-gray-700">Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      
        <Servicecard />
        <Servicecard />
        <Servicecard />
      </div>
    </div>
  );
};

export default Services;
