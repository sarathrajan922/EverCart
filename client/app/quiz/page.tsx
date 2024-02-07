// import CreateQuiz from '@/components/createQuiz';
'use client'
import fetchAllQuizDataApi from "@/features/axios/api/fetchAllQuiz";
import React,{useEffect} from "react";

const QuizPage: React.FC = () => {

  useEffect(()=>{
    fetchAllQuizDataApi().then((response)=>{
      console.log(response.quizData)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])

  return (
    <div>

      Hello this is quiz page
    </div>
  )
};

export default QuizPage;
