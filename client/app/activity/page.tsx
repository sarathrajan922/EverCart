"use client";
import HomeNavBar from "@/components/HomeNavBar";
import ActivityList from "@/components/activityList";
import QuizListShimmer from "@/components/shimmer/quizListShimmer";
import fetchAllQuizResults from "@/features/axios/api/fetchAllResults";
import { ActivityInterface } from "@/types/userAcitivity";
import React, { useEffect, useState } from "react";
import { boolean } from "zod";

const MyActivity: React.FC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [activityData, setActivityData] = useState<ActivityInterface[] | null>(
    null
  );
  useEffect(() => {
    fetchAllQuizResults()
      .then((response) => {
        setActivityData(response?.result?.userQuizResult);
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <HomeNavBar />
      <main className="flex min-h-screen items-center justify-around  mx-24 px-14">
        {!isLoad && !activityData ? (
          <QuizListShimmer />
        ) : (
          <ActivityList activityData={activityData}/>
        )}
      </main>
    </>
  );
};

export default MyActivity;
