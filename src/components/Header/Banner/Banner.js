import React from "react";
import "./banner.css";
const Banner = () => {
    let counter = 0;
    let day = 1;
setInterval(() => {
		if(counter<=60){
			counter++;

		}else{
            counter=0;
        }
        
    document.getElementById('counterElement').style.setProperty('--value', counter)
}, 1000)
  return (
    <div>
      <div className="w-full banner grid grid-cols-1 lg:grid-cols-2 justify-around   dark:bdark py-4 my-5">
        <div>
          <h1 className="text-4xl text-white uppercase text-left p-4">
            You need Instructions{" "}
          </h1>
          <p className="text-left p-5 text-xl text-gray-200 uppercase">
            Book your Personal session With me
          </p>
          <button className="block px-4 btn btn-white text-white ml-4 my-2">
            Show Services
          </button>
        </div>
        <div>
            <h1 className="text-2xl uppercase text-white py-2">Limited Offer <span className="badge badge-secondary text-3xl py-5">40%</span> OFF</h1>
          <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
            <div className="flex  flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span  style={{'--value':day}} ></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{'--value':30}} ></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{'--value':30}} ></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span  id="counterElement" style={{'--value':30}}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
