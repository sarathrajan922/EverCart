"use client";
import React, { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import QuizResult from "./quizResult";

interface Option {
  text: string;
  isCorrect: boolean;
  _id: string;
}

interface Question {
  question: string;
  options: Option[];
  _id: string;
}

interface QuizData {
  _id: string;
  createdBy: string;
  premium: boolean;
  category: string;
  questions: Question[];
  __v: number;
}

interface QuizResult {
  TotalScore: string;
  quizId: string;
  date: any;
  Result: {
    question: string;
    correctOption: string;
    selectedOption: string;
  }[];
}

const Quiz: React.FC<{ quizData: QuizData }> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | any)[]>(
    new Array(quizData.questions.length).fill(null)
  );
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isFinalResultReady, setIsFinalResultReady] = useState<boolean>(false);
  const [result, setResult] = useState<any>([]);

  const handleOptionSelect = (optionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (
      selectedOptions[currentQuestionIndex] !== null &&
      quizData.questions[currentQuestionIndex].options[
        selectedOptions[currentQuestionIndex]
      ].isCorrect
    ) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const generateFinalResult = (): QuizResult => {
    const result: {
      question: string;
      correctOption: string;
      selectedOption: string;
    }[] = [];

    for (let i = 0; i < quizData.questions.length; i++) {
      const question = quizData.questions[i].question;
      const correctOption =
        quizData.questions[i].options.find((option) => option.isCorrect)
          ?.text || "Not answered";
      const selectedOptionIndex = selectedOptions[i];
      const selectedOption =
        selectedOptionIndex !== null
          ? quizData.questions[i].options[selectedOptionIndex].text
          : "Not answered";

      result.push({ question, correctOption, selectedOption });
    }

    const totalScoreString = `${correctAnswers} out of ${quizData.questions.length}`;
    return {
      TotalScore: totalScoreString,
      Result: result,
      quizId: quizData._id,
      date: new Date(),
    };
  };

  const handleFinishQuiz = () => {
    const finalResult = generateFinalResult();
    console.log("Final Result:", finalResult);
    setShowResult(true);
    console.log(finalResult);
    setIsFinalResultReady(true);
    setResult(finalResult);
  };

  return (
    <>
      <HomeNavBar />
      <main className="flex min-h-screen items-center justify-around mx-24 px-14">
        {isFinalResultReady ? (
          <QuizResult parsedFinalResult={result} from={"attendQuiz"} />
        ) : (
          <div className="max-w-md mx-auto p-4">
            {quizData.questions.map((question, index) => (
              <div
                key={question._id}
                className={`mb-6 ${
                  index !== currentQuestionIndex ? "hidden" : ""
                }`}
              >
                <h2 className="text-lg font-semibold mb-2">
                  {question.question}
                </h2>
                {question.options.map((option, optionIndex) => (
                  <button
                    key={option._id}
                    className={`block w-full p-2 mb-2 rounded border ${
                      selectedOptions[currentQuestionIndex] === optionIndex
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    disabled={
                      quizCompleted ||
                      selectedOptions[currentQuestionIndex] !== null
                    }
                    onClick={() => handleOptionSelect(optionIndex)}
                  >
                    {option.text}
                  </button>
                ))}
                {!quizCompleted &&
                  (index !== quizData.questions.length - 1 ||
                    selectedOptions[currentQuestionIndex] !== null) && (
                    <button
                      className="block w-full p-2 mb-2 rounded bg-green-500 text-white"
                      onClick={handleNextQuestion}
                      disabled={selectedOptions[currentQuestionIndex] === null}
                    >
                      Next
                    </button>
                  )}
              </div>
            ))}
            {quizCompleted && !showResult && (
              <button
                className="block w-full p-2 mb-2 rounded bg-green-500 text-white"
                onClick={handleFinishQuiz}
              >
                Finish
              </button>
            )}
            {showResult && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Quiz Result</h2>
                {quizData.questions.map((question, index) => (
                  <div key={question._id} className="mb-4">
                    <p>
                      <strong>Question:</strong> {question.question}
                    </p>
                    <p>
                      <strong>Correct Option:</strong>{" "}
                      {
                        question.options.find((option) => option.isCorrect)
                          ?.text
                      }
                    </p>
                    <p>
                      <strong>Your Option:</strong>{" "}
                      {selectedOptions[index] !== null
                        ? question.options[selectedOptions[index]].text
                        : "Not answered"}
                    </p>
                  </div>
                ))}
                <p>
                  <strong>Total Score:</strong> {correctAnswers} out of{" "}
                  {quizData.questions.length}
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};
export default Quiz;
