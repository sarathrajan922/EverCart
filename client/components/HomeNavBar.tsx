/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HomeNavBar:React.FC = ()=>{
    return (
        <div className="w-full h-20 flex justify-around  bg-sky-600">
            
            <div className='flex my-5 cursor-pointer'>
                <img src="http://res.cloudinary.com/dk4darniv/image/upload/v1707045662/quiz-logo-icon-vector-symbol-fla_wcnmf5.webp" alt="" />
            </div>
            <div>
                <ul className='flex gap-5 my-5'>
                   <li className= "cursor-pointer">Home</li>
                   <li className= "cursor-pointer">About</li>
                   <li className= "cursor-pointer">Contact</li>
                   <li className= "cursor-pointer">Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeNavBar;