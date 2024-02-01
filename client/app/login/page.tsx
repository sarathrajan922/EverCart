/* eslint-disable @next/next/no-img-element */

import Navbar from "@/components/nav";
import React from "react";

const Login: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-100">
      <Navbar head={"LOGIN"}/>
      <div className="flex w-full h-screen ">
        <div className="w-1/2  text-center">
          <img
            className="w-full h-auto my-20 mb-10 pt-16 lg:my-0 md:my-5 lg:max-w-lg mx-auto"
            src="https://res.cloudinary.com/dk4darniv/image/upload/v1706786769/animated%20svg/login-animate_1_uawu6p.svg"
            alt=""
          />
        </div>
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
          <form>
            <div className="flex justify-center items-center">
              <h1 className="text-black text-2xl ">Login Form </h1>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium "
              >
                Email
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium "
              >
                Password
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="****"
                required
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="w-[13.5rem] h-10 bg-sky-600 rounded-sm mt-5 uppercase">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
