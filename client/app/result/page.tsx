
'use client'
// import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Result: React.FC = () => {
    const finalResult = useSearchParams().get('finalResult')
    console.log(finalResult)
//   const router = useRouter();
//   const { finalResult } = router.query;
//   const parsedFinalResult = finalResult
    // ? JSON.parse(finalResult as string)
    // : null;
//   console.log(parsedFinalResult);

//   useEffect(() => {
    // if (parsedFinalResult) {
      //   submitQuizResult(parsedFinalResult);
    //   console.log(parsedFinalResult);
    // }
//   }, [parsedFinalResult]);

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Quiz Result</h1>
      {/* {parsedFinalResult && (
        <div>
          <p className="text-lg font-semibold mb-2">
            Total Score: {parsedFinalResult.TotalScore}
          </p>
          <p className="text-lg font-semibold mb-2">Result:</p>
          <ul>
            {parsedFinalResult.Result.map((item: any, index: number) => (
              <li key={index} className="mb-4">
                <p className="text-base font-semibold mb-1">
                  Question: {item.question}
                </p>
                <p className="text-sm mb-1">
                  Correct Option: {item.correctOption}
                </p>
                <p className="text-sm mb-1">
                  Your Option: {item.selectedOption}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Result;
