import React, { ReactNode, useState } from "react";
import PremiumButton from "./Buttons/premiumButton";
interface QuizDetails {
  _id: string;
  createdBy: string;
  premium: boolean;
  category: string;
}

const QuizList: React.FC<any> = ({ quizzes }) => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  return (
    <main className="my-32 px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map(
          (quiz: { premium: boolean; category: string }, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{quiz.category}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {isPremium || !quiz.premium ? (
                <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
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
