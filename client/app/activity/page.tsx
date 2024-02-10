'use client'
import fetchAllQuizResults from '@/features/axios/api/fetchAllResults';
import React,{useEffect} from 'react';

const MyActivity:React.FC = ()=>{

    useEffect(()=>{
        fetchAllQuizResults().then((response)=>{
            console.log(response)
        }).catch((err:any)=>{
            console.log(err.message)
        })
    },[])
    return (
        <div>
            This is my activity page
        </div>
    )
}

export default MyActivity;