"use client";
import React, { useState } from "react";
import AddQuizResultApi from "@/features/axios/api/addQuizResult";
import Swal from "sweetalert2";

const QuizResult: React.FC<any> = ({ parsedFinalResult, from }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = () => {
    AddQuizResultApi(parsedFinalResult)
      .then((response) => {
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const confirmSaveModal = () => {
    Swal.fire({
      title: "Do you want to save your Result?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleSave();
        setTimeout(() => {
          Swal.fire("Saved!", "", "success");
        }, 1000);
      } else if (result.isDenied) {
        Swal.fire("Result not saved", "", "info");
      }
    });
  };
  return (
    <div className="max-w-full flex-col justify-center items-center mt-8 mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Quiz Result</h1>
      {parsedFinalResult && (
        <div>
          <p className="text-lg font-semibold mb-2">
            Total Score: {parsedFinalResult.TotalScore}
          </p>
          <p className="text-lg font-semibold mb-2">Result:</p>
          <ul>
            {parsedFinalResult.Result.map((item: any, index: number) => {
              // Determine the CSS class based on whether selectedOption matches correctOption
              const optionClass =
                item.correctOption === item.selectedOption
                  ? "text-green-500"
                  : "text-red-500";

              return (
                <li key={index} className="mb-4">
                  <p className="text-base font-semibold mb-1">
                    Question: {item.question}
                  </p>
                  <p className={`text-sm mb-1`}>
                    Correct Option:{item.correctOption}
                  </p>
                  <p className={`text-sm mb-1`}>
                    Your Option:{" "}
                    <span className={`text-sm mb-1  ${optionClass}`}>
                      {" "}
                      {item.selectedOption}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
          {from === "attendQuiz" ? (
            <div className="flex justify-center items-center my-10">
              {!isSaved && (
                <button
                  onClick={() => confirmSaveModal()}
                  className="flex justify-center w-1/2  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
                >
                  Save Your Score
                </button>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default QuizResult;
