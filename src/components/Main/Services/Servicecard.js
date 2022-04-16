import React from "react";

const Servicecard = () => {
  return (
    <div className="mx-auto">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Programming! <div class="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-left">
            If you want to know about programming and how to start ? Then book
            your Private session
          </p>
          <div class="card-actions justify-start py-2">
            <div class="badge badge-outline p-4 text-xl bg-gray-400 text-white">$420</div>
           
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
