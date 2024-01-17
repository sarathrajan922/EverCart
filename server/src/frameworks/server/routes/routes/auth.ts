import express from "express";
import { userRepositoryMongoDB } from "../../../database/mongodb/repository/userRepoMongo";
import authController from "../../../../adapters/controller/authController";
import { authServicesInterface } from "../../../../application/services/authServicesInterface";
import { authServices } from "./../../../services/authServices";
import { userDbRepository } from "../../../../application/repository/userDbRepository";

const authRouter = () => {
  const router = express.Router();
  const controller = authController(
    authServicesInterface,
    authServices,
    userDbRepository,
    userRepositoryMongoDB
  );
  router.post("/signup", controller.userRegister);
  router.post('/login',controller.userLogin);

  
  return router;
};

export default authRouter;
