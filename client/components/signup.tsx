"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "@/validation/userRegister";
import { UserRegisterInterface } from "@/types/userRegister";
import userRegisterApi from "@/features/axios/api/userRegister";

const SignUp: React.FC = () => {
  const [confirmPassError, setConfirmPassError] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<UserRegisterInterface>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      conformPassword: "",
    },
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit: SubmitHandler<UserRegisterInterface> = (data) => {
    if (data.password != data.conformPassword) {
      setConfirmPassError(true);
      setTimeout(() => {
        setConfirmPassError(false);
      }, 2000);
      return;
    }
    //here function call

    console.log(data);

    userRegisterApi(data).then((response)=>{
      console.log(response?.message)
      localStorage.setItem('userToken',response?.token)
      router.push('/home')
    }).catch((error)=>{
      console.error(error.message)
    })
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("firstName")}
                disabled={isSubmitting}
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                
              />
              {errors.firstName?.message && (
                <div className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Last name
              </label>
              <input
                {...register("lastName")}
                disabled={isSubmitting}
                type="text"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                
              />
              {errors.lastName?.message && (
                <div className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </div>
              )}
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
                {...register("email")}
                disabled={isSubmitting}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                
              />
              {errors.email?.message && (
                <div className="text-red-500 text-sm">
                  {errors.email?.message}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Mobile
              </label>
              <input
                {...register("mobile")}
                disabled={isSubmitting}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                
              />
              {errors.mobile?.message && (
                <div className="text-red-500 text-sm">
                  {errors.mobile?.message}
                </div>
              )}
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
                {...register("password")}
                disabled={isSubmitting}
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                
              />
              {errors.password?.message && (
                <div className="text-red-500 text-sm">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Confirm Password
              </label>
              <input
                {...register("conformPassword")}
                disabled={isSubmitting}
                name="conformPassword"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                
              />
              {errors.conformPassword?.message || confirmPassError ? (
                <div className="text-red-500 text-sm">
                  {confirmPassError
                    ? "Passwords do not match."
                    : errors.conformPassword?.message}
                </div>
              ) : null}
            </div>
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
          <div className="flex justify-center items-center text-sm text-gray-600 mt-2">
          Already have an Account!
          <span
            className="text-sky-600 text-sm ms-1 underline cursor-pointer"
            onClick={() => switchToLogin()}
          >
            {" "}
            Login
          </span>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
