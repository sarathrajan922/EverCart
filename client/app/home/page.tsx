/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import HomeNavBar from "@/components/HomeNavBar";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Carousel from "@/components/carousel";
import CardHeading from "@/components/heading";
const Home: React.FC = () => {
  const router = useRouter();

  const switchToQuizPage = () => {
    router.push("/quiz");
  };

  const switchToActivity = () => {
    router.push('/activity')
  };

  const switchToPremium = async() => {
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    if (accept) {
      Swal.fire("You agreed with T&C :)");
      router.push('/razorpay')
    }
  };

  return (
    <>
      <HomeNavBar />
      <Carousel/>
    <CardHeading/>


      <main className="flex min-h-screen items-center justify-evenly p-14  ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-none">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dk4darniv/image/upload/v1707042924/alarm-clock-optical-form-of-stan_nxdlg7.webp"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Explore key technology acquisitions in 2024
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <button
              onClick={()=> switchToQuizPage()}
              className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800"
            >
              Take Quiz
            </button>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-none">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dk4darniv/image/upload/v1707043013/photo-1624719507903-7d8b41c7c9cb_fpr8pk.webp"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              onClick={()=> switchToActivity()}
              className="flex justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800"
            >
              My Activity
            </button>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-none ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dk4darniv/image/upload/v1707043097/businessman-holding-and-showing_pzpnwn.webp"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Upgrade To Premium For An Enhanced User Experience
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              onClick={()=>switchToPremium()}
              className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800"
            >
              Upgrade To Premium
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
