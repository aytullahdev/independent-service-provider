import React from 'react';
import './banner.css';
const Banner = () => {
    return (
        <div>
            <div className='w-full banner py-4 my-5' >
                <h1 className='text-4xl text-white uppercase text-left p-4'>You need Instructions </h1>
                <p className='text-left p-5 text-xl text-gray-200 uppercase'>Book your Personal session With me</p>
                <button  className='block px-4 btn btn-white text-white ml-4 my-2'>Show Services</button>
            </div>
        </div>
    );
};

export default Banner;