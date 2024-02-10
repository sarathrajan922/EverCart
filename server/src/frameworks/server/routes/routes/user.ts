import express from "express";
import quizController from "../../../../adapters/controller/quiz";
import { userDbRepository } from "../../../../application/repository/userDbRepository";
import { userRepositoryMongoDB } from "../../../database/mongodb/repository/userRepoMongo";
import authenticationMiddleware from "../../middleware/authenticationMiddleware";
import { userRoleCheckMiddleware } from "./../../middleware/roleCheck";
import paymentController from "../../../../adapters/controller/payment";
import { razorpayServicesInterface } from "../../../../application/services/razorpayServicesInterface";
import { razorpayServices } from "./../../../services/razorpayServices";

const userRouter = () => {
  const router = express.Router();
  const quizControl = quizController(userDbRepository, userRepositoryMongoDB);
  const paymentControl = paymentController(
    razorpayServicesInterface,
    razorpayServices,
    userDbRepository,
    userRepositoryMongoDB
  );
  router.post(
    "/quiz",
    authenticationMiddleware,
    userRoleCheckMiddleware,
    quizControl.createQuiz
  );

  router.get(
    "/getAllQuizData",
    authenticationMiddleware,
    userRoleCheckMiddleware,
    quizControl.fetchAllQuizData
  );

  router.get('/getQuiz/:quizId',authenticationMiddleware,userRoleCheckMiddleware,quizControl.fetchQuiz)
  router.post('/addQuizResult',authenticationMiddleware,userRoleCheckMiddleware,quizControl.addQuizResult)
  router.get('/getQuizResults',authenticationMiddleware,userRoleCheckMiddleware,quizControl.userQuizResults)
  router.post(
    "/razorpay",
    authenticationMiddleware,
    userRoleCheckMiddleware,
    paymentControl.generateRazorypay
  );
  router.post(
    "/verifyPayment",
    authenticationMiddleware,
    userRoleCheckMiddleware,
    paymentControl.verifyPayment
  );

  return router;
};

export default userRouter;
