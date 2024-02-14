'use client'
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import {useRouter} from 'next/navigation'

const HomeNavBar:React.FC = ()=>{
    const router = useRouter();
    const switchToHome = ()=>{
        router.push('/home')
    }
    return (
        <div className="w-full h-20 flex justify-around shadow-lg top-0 fixed z-50 bg-white ">
            
            <div className='flex my-1 py-5 cursor-pointer'>
                <img onClick={()=>switchToHome()} src="https://res.cloudinary.com/dk4darniv/image/upload/v1707240052/quizsphere/logo/quiz-sphere-high-resolution-logo-black-transparent1_m9s8f4.png" alt="" />
            </div>
            <div>
                <ul className='flex gap-11 my-7 text-gray-600'>
                   <li onClick={()=>switchToHome()} className= "cursor-pointer">Home</li>
                   <li className= "cursor-pointer">About</li>
                   <li className= "cursor-pointer">Contact</li>
                   <li className= "cursor-pointer">Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeNavBar;