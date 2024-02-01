"use client"
import React from "react";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const router = useRouter();

  const switchToLogin = () => {
    router.push("/login");
  };
  return (
    <div className="w-full h-[41.5rem] bg-gray-200 flex items-center justify-center">
      <div className=" w-[58rem] h-[33rem] bg-white rounded-md shadow-2xl">
        {/* form */}
        <h3 className="mt-6 mb-4 ms-8 text-sky-600 text-bold">
          Contact Information
        </h3>
        <form>
          <div className="grid gap-3  my-8 ms-7 md:grid-cols-2">
            {/* first name & lastName */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium "
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* email & mobile */}

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
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Mobile
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* password & confirm password */}

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
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="w-[13.5rem] h-10 bg-sky-600 rounded-sm mt-5 uppercase">
              submit
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center text-sm text-gray-600 mt-2">
          Already have an Account!
          <span
            className="text-sky-600 text-sm ms-1 underline cursor-pointer"
            onClick={() => switchToLogin()}
          >
            {" "}
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
