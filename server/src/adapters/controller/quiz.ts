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
import { addQuizResultUseCase } from "../../application/useCase/user/addQuizResult";
import { userQuizResultsUseCase } from "../../application/useCase/user/fetchuserQuizResults";

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

   
    const data = await fetchQuizUseCase(quizId, dbRepositoryUser);

    res.json({
      message: "fetched Quiz data successfully",
      quizData: data,
    });
  });


  const addQuizResult = asyncHandler(async (req:customRequest,res:Response)=>{
    const userId = req?.payload?.id ?? ''
    const quizResult = req?.body
    quizResult.userId = userId

    const result = await addQuizResultUseCase(dbRepositoryUser,quizResult);
    res.json({
      message: "Quiz Result Added successfully",
      result
    })
    
  })

  const userQuizResults = asyncHandler(async(req:customRequest,res:Response)=>{
    const userId = req?.payload?.id ?? ''
    const result =await userQuizResultsUseCase(userId,dbRepositoryUser)
    res.json({
      message: 'user All Quiz Results fetched successfully',
      result
    })
  })

  return {
    createQuiz,
    fetchAllQuizData,
    fetchQuiz,
    addQuizResult,
    userQuizResults
  };
};

export default quizController;
