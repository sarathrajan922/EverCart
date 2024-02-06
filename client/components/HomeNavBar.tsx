/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HomeNavBar:React.FC = ()=>{
    return (
        <div className="w-full h-20 flex justify-around shadow-lg">
            
            <div className='flex my-4 cursor-pointer'>
                <img src="https://res.cloudinary.com/dk4darniv/image/upload/v1707213771/edubild-logo-dark_rtmnoo.webp" alt="" />
            </div>
            <div>
                <ul className='flex gap-11 my-7 text-sky-600'>
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