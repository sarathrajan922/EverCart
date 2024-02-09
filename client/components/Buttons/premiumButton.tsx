import React from 'react';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const PremiumButton :React.FC<any> = ({label})=>{

    const router = useRouter();

    const switchToPremium = async () => {
        const { value: accept } = await Swal.fire({
          title: "Terms and conditions",
          input: "checkbox",
          inputValue: 1,
          inputPlaceholder: `
            I agree with the terms and conditions
          `,
          confirmButtonText: `
            Continue&nbsp;<i class="fa fa-arrow-right"></i>
          `,
          inputValidator: (result) => {
            return !result && "You need to agree with T&C";
          },
        });
        if (accept) {
          Swal.fire("You agreed with T&C :)");
         
          router.push("/razorpay");
        }
      };

    return (
        <button
        onClick={()=>switchToPremium()}
        className="flex justify-center w-full  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
      >
        {label}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 ms-1 h-5 text-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
      </button>
    )
}

export default PremiumButton;