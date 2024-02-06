/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar= ({head}:{head:string}) => {
  return (
    <div className="w-full h-20 flex justify-around bg-white top-0 fixed z-50">
       <div className='flex my-1 py-5 cursor-pointer'>
                <img src="https://res.cloudinary.com/dk4darniv/image/upload/v1707240052/quizsphere/logo/quiz-sphere-high-resolution-logo-black-transparent1_m9s8f4.png" alt="" />
            </div>
      <div className="mt-6 ms-32">
        <h1 className="text-gray-700 text-2xl uppercase font-bold">
          {head}
        </h1>
      </div>
      
    </div>
  );
};

export default Navbar;
