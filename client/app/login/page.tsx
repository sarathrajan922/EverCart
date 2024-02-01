/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/nav";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@/validation/userLogin";

interface Inputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //api call here
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-100">
      <Navbar head={"LOGIN"} />
      <div className="flex w-full h-screen ">
        <div className="w-1/2  text-center">
          <img
            className="w-full h-auto my-20 mb-10 pt-16 lg:my-0 md:my-5 lg:max-w-lg mx-auto"
            src="https://res.cloudinary.com/dk4darniv/image/upload/v1706786769/animated%20svg/login-animate_1_uawu6p.svg"
            alt=""
          />
        </div>
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email")}
                disabled={isSubmitting}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
              {errors.email?.message && (
                <div className="text-red-500 text-sm">
                  {errors.email?.message}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium "
              >
                Password
              </label>
              <input
                {...register("password")}
                disabled={isSubmitting}
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="****"
                required
              />
              {errors.password?.message && (
                <div className="text-red-500 text-sm">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[13.5rem] h-10 bg-sky-600 rounded-sm mt-5 uppercase"
              >
                submit
              </button>
            </div>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
     
    </main>
  );
};

export default Login;
