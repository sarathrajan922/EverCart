import { fetchAllQuizUseCase } from "./../../application/useCase/user/fetchAllQuiz";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import {
  UserDbInterface,
  userDbRepository,
} from "../../application/repository/userDbRepository";
import asyncHandler from "express-async-handler";
import { Response } from "express";
import { customRequest } from "../../types/expressCustomRequest";
import { QuizInterface } from "../../types/quiz";
import { createQuizUseCase } from "../../application/useCase/user/createQuiz";
import { fetchQuizUseCase } from "../../application/useCase/user/fetchQuiz";

const quizController = (
  userDbRepositoryInterface: UserDbInterface,
  userDbRepositoryMongoDB: UserRepositoryMongoDB
) => {
  const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB());

  const createQuiz = asyncHandler(async (req: customRequest, res: Response) => {
    const userId = req?.payload?.id ?? "";

    const uploadedData = await createQuizUseCase(
      userId,
      req?.body,
      dbRepositoryUser
    );

    res.json({
      message: "create quiz successfully",
      uploadedData,
    });
  });

  const fetchAllQuizData = asyncHandler(
    async (req: customRequest, res: Response) => {
      const data = await fetchAllQuizUseCase(dbRepositoryUser);

      res.json({
        message: "fetch All quiz data successfully",
        quizData: data,
      });
    }
  );

  const fetchQuiz = asyncHandler(async (req: customRequest, res: Response) => {
    const quizId = req?.params.quizId;

    console.log("quiz Id ", quizId);
    const data = await fetchQuizUseCase(quizId, dbRepositoryUser);

    res.json({
      message: "fetched Quiz data successfully",
      quizData: data,
    });
  });

  return {
    createQuiz,
    fetchAllQuizData,
    fetchQuiz,
  };
};

export default quizController;
