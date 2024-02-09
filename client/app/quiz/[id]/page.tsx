'use client'
import React,{useEffect,useState} from 'react'
import fetchQuizDataApi from '@/features/axios/api/fetchQuiz'
import Quiz from '@/components/attendQuiz'


function AttendQuiz({params}: {params: {id: number}}) {
    const [quizData, setQuizData]= useState<any>(null)
   const quizId = params.id.toString()
   console.log(quizId)

   useEffect(()=>{
     fetchQuizDataApi(quizId).then((response)=>{
        console.log(response)
        setQuizData(response?.quizData?.fetchQuizData)
     }).catch((err:any)=>{
        console.log(err.message)
     })
   },[])
   console.log(quizData)
  return (
    <div>
        {
            quizData && <Quiz fetchQuizData={quizData}/>
        }
        
    </div>
  )
}

export default AttendQuiz