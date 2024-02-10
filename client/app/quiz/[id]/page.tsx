"use client";
import React, { useEffect, useState } from "react";
import fetchQuizDataApi from "@/features/axios/api/fetchQuiz";
import Quiz from "@/components/attendQuiz";

function AttendQuiz({ params }: { params: { id: number } }) {
  const [quizData, setQuizData] = useState<any>(null);
  const quizId = params.id.toString();

  useEffect(() => {
    fetchQuizDataApi(quizId)
      .then((response) => {
        setQuizData(response?.quizData?.fetchQuizData);
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }, []);

  return <div>{quizData && <Quiz quizData={quizData} />}</div>;
}

export default AttendQuiz;
