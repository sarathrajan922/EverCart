import React from 'react';
type Quiz = {
    category: string;
    description: string;
  };
  type QuizListProps = {
    quizzes: Quiz[];
  };


const QuizList: React.FC<QuizListProps> = ({ quizzes }) => {
  return (
    <main className=" my-32 px-14">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzes.map((quiz, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">{quiz.category}</h2>
          <p className="text-gray-600 mb-4">{quiz.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Attend Quiz
          </button>
        </div>
      ))}
    </div>
    </main>
  );
};

export default QuizList;