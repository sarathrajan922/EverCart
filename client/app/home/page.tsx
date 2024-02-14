/* eslint-disable @next/next/no-img-element */
"use client";
import React,{useEffect,useState} from "react";
import HomeNavBar from "@/components/HomeNavBar";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Carousel from "@/components/carousel";
import CardHeading from "@/components/heading";
import PremiumButton from "@/components/Buttons/premiumButton";
import GetUserApi from "@/features/axios/api/getUser";

const Home: React.FC = () => {
  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [userData,setUserData] = useState<any>({})
  const router = useRouter();

  const switchToQuizPage = () => {
    router.push("/quiz");
  };

  const switchToActivity = () => {
    router.push("/activity");
  };

  const switchToCreateQuiz = ()=>{
    router.push('/create-quiz')
  }


  useEffect(()=>{
    GetUserApi().then((response)=>{
      setUserData(response?.userData)
      setIsLoad(true)
    }).catch((error:any)=>{
      console.log(error.message)
    })
  },[])

  



 

  return (
    <>
      <HomeNavBar />
      <Carousel />
      <CardHeading />

      <main className="flex min-h-screen items-center justify-around  mx-24 px-14  ">
        <div className="max-w-sm p-5  rounded-lg ">
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
              onClick={() => switchToQuizPage()}
              className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
            >
              Take Quiz
            </button>
          </div>
        </div>

        <div className="max-w-sm p-5  rounded-lg">
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
              onClick={() => switchToActivity()}
              className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
            >
              My Activity
            </button>
          </div>
        </div>

      { userData && userData?.premium === true ? <div className="max-w-sm p-5  rounded-lg">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dk4darniv/image/upload/v1707214502/quizsphere/q2_yjwsdx.webp"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Create Quiz Spreed Knowledge
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
           
            {/* <PremiumButton label={'Upgrade To Premium'}/> */}
            <button
              onClick={() => switchToCreateQuiz()}
              className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
            >
              Create Quiz
            </button>
            
          </div>
        </div> : <div className="max-w-sm p-5  rounded-lg">
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
                Upgrade To Premium For  Enhanced 
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
           
            <PremiumButton label={'Upgrade To Premium'}/>
            
          </div>
        </div>}
        


      </main>
    </>
  );
};

export default Home;
