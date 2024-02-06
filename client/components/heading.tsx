/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardHeading: React.FC = () => {
  return (
    <main className="w-full h-30 flex justify-start mt-[6rem] ms-60 ">
      <div className="flex-col my-4 cursor-pointer">
       <h1 className="text-2xl font-sans text-bold text-black">Navigate Your Journey</h1>
       <div className="w-24 h-2 bg-yellow-400"></div>
      </div>
      <div></div>
    </main>
  );
};

export default CardHeading;
