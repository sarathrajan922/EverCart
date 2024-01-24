import express from "express";
import quizController from "../../../../adapters/controller/quiz";
import { userDbRepository } from "../../../../application/repository/userDbRepository";
import { userRepositoryMongoDB } from "../../../database/mongodb/repository/userRepoMongo";
import authenticationMiddleware from "../../middleware/authenticationMiddleware";
import { userRoleCheckMiddleware } from "./../../middleware/roleCheck";

const userRouter = () => {
  const router = express.Router();
  const quizControl = quizController(userDbRepository, userRepositoryMongoDB);
  router.post(
    "/quiz",
    authenticationMiddleware,
    userRoleCheckMiddleware,
    quizControl.createQuiz
  );

  return router;
};

export default userRouter;
