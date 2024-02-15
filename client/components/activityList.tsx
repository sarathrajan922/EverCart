"use client";
import React, { useState } from "react";
import { ActivityInterface, Result } from "@/types/userAcitivity";
import { format } from "timeago.js";
import QuizResult from "./quizResult";

const ActivityList: React.FC<any> = ({ activityData }) => {
  console.log(activityData);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<any>({});

  const confirmShowResult = (result: Result[], totalSore: string) => {
    setShowResult(true);
    const data = {
      Result: result,
      TotalScore: totalSore,
    };
    setResult(data);
  };

  return (
    <>
      <main className="my-32 px-14">
        {showResult ? (
          <QuizResult parsedFinalResult={result} from={"activity"} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activityData && activityData ? (
              activityData.map((item: ActivityInterface, index: number) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {item.category}
                  </h2>
                  <p className="text-gray-600 mb-4">{format(item.date)}</p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    onClick={() =>
                      confirmShowResult(item.Result, item.TotalScore)
                    }
                    className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                  >
                    show result
                  </button>
                </div>
              ))
            ) : (
              <div>No Activity Found</div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default ActivityList;
