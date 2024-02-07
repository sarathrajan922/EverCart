'use client'

import { useState } from 'react';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

export default function CreateQuiz() {
  const [category, setCategory] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([{ question: '', options: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] }]);

  const handleAddQuestion = () => {
    if (questions.length < 5) {
      setQuestions(prevQuestions => [...prevQuestions, { question: '', options: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] }]);
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };

  const handleInputChange = (questionIndex: number, optionIndex: number, value: string) => {
    const newQuestions = [...questions];
    if (optionIndex === -1) {
      newQuestions[questionIndex].question = value;
    } else {
      newQuestions[questionIndex].options[optionIndex].text = value;
    }
    setQuestions(newQuestions);
  };

  const handleCheckboxChange = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.forEach((option, index) => {
      if (index === optionIndex) {
        option.isCorrect = true;
      } else {
        option.isCorrect = false;
      }
    });
    setQuestions(newQuestions);
  };

  const handleFinish = () => {
    const quizData = { category, questions };
    console.log(quizData);
    // You can send the quizData to your backend for further processing
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <input type="text" className="w-full border p-2 rounded" value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-4">
            <label className="block mb-1">Question {questionIndex + 1}</label>
            <input type="text" className="w-full border p-2 rounded mb-2" value={question.question} onChange={e => handleInputChange(questionIndex, -1, e.target.value)} />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center mb-2">
                <input type="text" className="border p-2 rounded mr-2" value={option.text} onChange={e => handleInputChange(questionIndex, optionIndex, e.target.value)} />
                <label className="mr-2">Correct Answer</label>
                <input type="checkbox" checked={option.isCorrect} onChange={() => handleCheckboxChange(questionIndex, optionIndex)} />
              </div>
            ))}
            <button type="button" className="text-red-500" onClick={() => handleRemoveQuestion(questionIndex)}>Cancel Question</button>
          </div>
        ))}
        <button type="button" className={`bg-blue-500 text-white px-4 py-2 rounded mb-4 ${questions.length >= 5 && 'opacity-50 cursor-not-allowed'}`} onClick={handleAddQuestion} disabled={questions.length >= 5}>Add Question</button>
        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleFinish}>Finish</button>
      </form>
    </div>
  );
}
