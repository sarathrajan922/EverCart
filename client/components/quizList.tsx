import React, { ReactNode, useState } from "react";
import PremiumButton from "./Buttons/premiumButton";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
interface QuizDetails {
  _id: string;
  createdBy: string;
  premium: boolean;
  category: string;
}

const QuizList: React.FC<any> = ({ quizzes }) => {
  const router = useRouter()
  const quizConfirmation = async (quizId: string) => {
    const { value: accept } = await Swal.fire({
      title: "Instructions",
      input: "checkbox",
      inputValue: 1,
      html:`
      <style>
      .instruction-list {
        list-style-type: none;
        padding-left: 0;
        margin-top:30px;
      }
      
      .instruction-list li {
        margin-bottom: 10px;
        margin-left:25px;
        margin-top:10px;
        font-size: 0.9rem;
        white-space: nowrap; /* Ensure each instruction stays on a single line */
        overflow: hidden; /* Hide any overflow */
        text-overflow: ellipsis; /* Display ellipsis (...) for overflow */
        text-align: left; /* Align text to the left */
      }
      
      .instruction-list li::before {
        content: counter(list-counter) ". ";
        counter-increment: list-counter;
        font-weight: bold;
      }

      .para{
        font-size:15px;
        font-weight:bold;
      }
      
      </style>
      <p class='para'>Please read the following instructions before proceeding:</p>
      <ol class="instruction-list" style="counter-reset: list-counter;">
        <li>Read questions carefully before answering.</li>
        <li>Avoid external help during the quiz.</li>
        <li>Contact support for technical issues.</li>
        <li>Submit answers at the end of the quiz.</li>
        <li>Double-check answers for accuracy before submitting.</li>
        <li>Enjoy the quiz and good luck!</li>
      </ol>
      
    `,
      
      
      
      
      
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
      console.log(quizId)
     router.push(`/quiz/${quizId}`)
    }
  };

  //todo check the user is premium user or not
  const [isPremium, setIsPremium] = useState<boolean>(false);
  return (
    <main className="my-32 px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map(
          (
            quiz: {
              _id: string;
              premium: boolean;
              category: string;
            },
            index: number
          ) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{quiz.category}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {isPremium || !quiz.premium ? (
                <button
                  onClick={() => quizConfirmation(quiz._id)}
                  className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                >
                  Attend Quiz
                </button>
              ) : (
                <PremiumButton label={"premium"} />
              )}
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default QuizList;
