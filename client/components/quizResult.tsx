import React from 'react';

const QuizResult: React.FC<any> = ({ parsedFinalResult }) => {
    return (
      <div className="max-w-full flex-col justify-center items-center mt-24 mx-auto bg-white p-8 rounded-lg shadow-md">
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
                const optionClass = item.correctOption === item.selectedOption ? 'text-green-500' : 'text-red-500';
  
                return (
                  <li key={index} className="mb-4">
                    <p className="text-base font-semibold mb-1">
                      Question: {item.question}
                    </p>
                    <p className={`text-sm mb-1`}>
                      Correct Option:{item.correctOption}
                    </p>
                    <p className={`text-sm mb-1`}>
                      Your Option:  <span className={`text-sm mb-1  ${optionClass}`}> {item.selectedOption}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className='flex justify-center items-center my-10'>
                <button className="flex justify-center w-1/2  px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Save Your Score</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default QuizResult;