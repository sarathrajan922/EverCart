import React from "react";

const Navbar= ({head}:{head:string}) => {
  return (
    <div className="w-full h-20 flex  bg-sky-600">
      <div className="mt-6 ms-32">
        <h1 className="text-white text-2xl uppercase font-bold">
          {head}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
