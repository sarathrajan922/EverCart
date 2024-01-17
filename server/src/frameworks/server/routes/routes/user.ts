import express from "express";
import quizController from "../../../../adapters/controller/quiz";
import { userDbRepository } from "../../../../application/repository/userDbRepository";
import { userRepositoryMongoDB } from "../../../database/mongodb/repository/userRepoMongo";

const userRouter = () => {
  const router = express.Router();
  const quizControl = quizController(userDbRepository, userRepositoryMongoDB);

  router.post("/quiz", quizControl.createQuiz);

  return router;
};

export default userRouter;
