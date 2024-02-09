import React from "react";

const QuizListShimmer: React.FC = () => {
  const arr = new Array(12).fill({});
  
  return (
    <main className=" my-32 px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {arr.map((item, index) => (
         <div key={index} className="animate-pulse bg-gray-200 rounded-lg shadow-md p-4 w-[20rem]">
         <div className="h-6 bg-gray-300 mb-2 w-3/4"></div>
         <div className="h-4 bg-gray-300 w-1/2"></div>
         <button className="bg-gray-300 text-gray-300 px-4 py-2 rounded hover:bg-gray-400"></button>
       </div>
      ))}
      </div>
   </main>
  );
};

export default QuizListShimmer;
