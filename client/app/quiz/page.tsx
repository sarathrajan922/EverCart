// import CreateQuiz from '@/components/createQuiz';
"use client";
import HomeNavBar from "@/components/HomeNavBar";
import QuizList from "@/components/quizList";
import fetchAllQuizDataApi from "@/features/axios/api/fetchAllQuiz";
import React, { useEffect,useState } from "react";
import QuizListShimmer from "@/components/shimmer/quizListShimmer";


interface QuizDetails {
  _id: string;
  createdBy: string;
  premium: boolean;
  category: string;
}
const QuizPage: React.FC = () => {
  const [isLoad,setIsLoad] = useState<boolean>(false);
  const [quizData ,setQuizData] = useState<QuizDetails [] | null>(null)



  

  useEffect(() => {
    fetchAllQuizDataApi().then((res) => { 
      setQuizData(res?.quizData?.fetchAllQuizData)
      setIsLoad(true)
    });
  }, []);

  
  return (
    <>
      <HomeNavBar />
      <main className="flex min-h-screen items-center justify-around  mx-24 px-14">
        {!isLoad && !quizData ? <QuizListShimmer/> :  <QuizList quizzes={quizData} />} 
      </main>
    </>
  );
};

export default QuizPage;
