// import CreateQuiz from '@/components/createQuiz';
"use client";
import HomeNavBar from "@/components/HomeNavBar";
import QuizList from "@/components/quizList";
import fetchAllQuizDataApi from "@/features/axios/api/fetchAllQuiz";
import React, { useEffect } from "react";

const QuizPage: React.FC = () => {
  const dummyQuizzes = [
    {
      category: "Mathematics",
      description: "Test your math skills with these challenging questions.",
    },
    {
      category: "Science",
      description:
        "Explore the wonders of science with these intriguing questions.",
    },
    {
      category: "History",
      description:
        "Travel back in time and test your knowledge of historical events.",
    },
    {
      category: "Geography",
      description: "Discover the world with these geography questions.",
    },
    {
      category: "Literature",
      description:
        "Explore the world of literature with these classic book questions.",
    },
    {
      category: "Sports",
      description:
        "Test your knowledge of sports and athletes with these questions.",
    },
    {
      category: "Movies",
      description:
        "Are you a movie buff? Test your knowledge of films with these questions.",
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
      description:
        "Test your general knowledge with these random trivia questions.",
    },
  ];

  useEffect(() => {
    fetchAllQuizDataApi().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <HomeNavBar />
      <main className="flex min-h-screen items-center justify-around  mx-24 px-14">
        <QuizList quizzes={dummyQuizzes} />
      </main>
    </>
  );
};

export default QuizPage;
