'use client'
import React, { useState, useEffect } from 'react';



interface Option {
    _id: string;
    text: string;
    isCorrect: boolean;
  }
  
  interface Question {
    _id: string;
    question: string;
    options: Option[];
  }
  
  interface QuizData {
    _id: string;
    createdBy: string;
    premium: boolean;
    category: string;
    questions: Question[];
  }

  const Quiz: React.FC<{ fetchQuizData: QuizData }> = ({ fetchQuizData }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  
    const currentQuestion: Question = fetchQuizData.questions[currentQuestionIndex];
  
    const handleOptionSelect = (optionId: string) => {
      setSelectedOptions(prevOptions => ({
        ...prevOptions,
        [currentQuestion._id]: optionId
      }));
  
      if (currentQuestionIndex < fetchQuizData.questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        // Quiz completed, process the selected options
        const quizData = fetchQuizData.questions.map(question => ({
          questionId: question._id,
          selectedOption: selectedOptions[question._id] || ''
        }));
        console.log(quizData);
      }
    };
  
    return (
      <div className="quiz-container p-4">
        <h1 className="text-2xl font-bold mb-4">{fetchQuizData.category} Quiz</h1>
        <div className="question bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1}</h2>
          <p className="text-gray-700 mb-4">{currentQuestion.question}</p>
          <ul className="space-y-2">
            {currentQuestion.options.map((option: Option) => (
              <li key={option._id}>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => handleOptionSelect(option._id)}
                >
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Quiz;
  
 
  
  


