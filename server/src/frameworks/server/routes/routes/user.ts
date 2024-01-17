import express from 'express'
import userController from '../../../../adapters/controller/userController';
import { userDbRepository } from "../../../../application/repository/userDbRepository";
import { userRepositoryMongoDB } from "../../../database/mongodb/repository/userRepoMongo";


const userRouter = ()=>{
    const router = express.Router();
  const controller = userController(
    userDbRepository,
    userRepositoryMongoDB
  );


    router.post('/quiz',controller.createQuiz)

    return router;
}

export default userRouter;