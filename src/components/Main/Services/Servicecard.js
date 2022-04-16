import React from "react";

const Servicecard = ({tittle,desc,price,img}) => {
  return (
    <div className="mx-auto">
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="">
          <img
            className="h-[350px] w-full"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {tittle} <div className="badge badge-secondary">New</div>
          </h2>
          <p className="text-left">
            {desc}
          </p>
          <div className="card-actions justify-start py-2">
            <div className="badge badge-outline p-4 text-xl bg-gray-400 text-white">${price}</div>
           
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
