// import CreateQuiz from '@/components/createQuiz';
"use client";
import HomeNavBar from "@/components/HomeNavBar";
import QuizList from "@/components/quizList";
import fetchAllQuizDataApi from "@/features/axios/api/fetchAllQuiz";
import React, { useState } from "react";

const QuizPage: React.FC = () => {

  const dummyQuizzes = [
    {
      category: "Mathematics",
      description: "Test your math skills with these challenging questions.",
    },
    {
      category: "Science",
      description: "Explore the wonders of science with these intriguing questions.",
    },
    {
      category: "History",
      description: "Travel back in time and test your knowledge of historical events.",
    },
    {
      category: "Geography",
      description: "Discover the world with these geography questions.",
    },
    {
      category: "Literature",
      description: "Explore the world of literature with these classic book questions.",
    },
    {
      category: "Sports",
      description: "Test your knowledge of sports and athletes with these questions.",
    },
    {
      category: "Movies",
      description: "Are you a movie buff? Test your knowledge of films with these questions.",
    },
    {
      category: "Music",
      description: "Test your knowledge of music genres, artists, and songs.",
    },
    {
      category: "Art",
      description: "Explore the world of art and artists with these questions.",
    },
    {
      category: "General Knowledge",
      description: "Test your general knowledge with these random trivia questions.",
    },
  ];

  
  return (
    <>
      <HomeNavBar />
      <main className="flex min-h-screen items-center justify-around  mx-24 px-14">
       
      {/* <div className="mt-6 w-96">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <h5 color="blue-gray" className="mb-2">
          UI/UX Review Check
        </h5>
        <p>
          Because it&apos;s about motivating the doers. Because I&apos;m
          here to follow my dreams and inspire others.
        </p>
      </div>
      <div className="pt-0">
        <a href="#" className="inline-block">
          <button className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
    
    <div className="mt-6 w-96">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <h5 color="blue-gray" className="mb-2">
          UI/UX Review Check
        </h5>
        <p>
          Because it&apos;s about motivating the doers. Because I&apos;m
          here to follow my dreams and inspire others.
        </p>
      </div>
      <div className="pt-0">
        <a href="#" className="inline-block">
          <button className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
    <div className="mt-6 w-96">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <h5 color="blue-gray" className="mb-2">
          UI/UX Review Check
        </h5>
        <p>
          Because it&apos;s about motivating the doers. Because I&apos;m
          here to follow my dreams and inspire others.
        </p>
      </div>
      <div className="pt-0">
        <a href="#" className="inline-block">
          <button className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div> */}

    <QuizList quizzes={dummyQuizzes}/>



    
        
      </main>
    </>
  );
};

export default QuizPage;
