import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { UserDbInterface } from "../../application/repository/userDbRepository";
import { AuthServiceType } from "../../frameworks/services/authServices";
import { AuthServicesInterface } from "../../application/services/authServicesInterface";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UserRegisterInterface } from "../../types/user";
import { userRegisterUseCase , userLoginUseCase} from "../../application/useCase/auth/auth";



const authController = (
  authServicesInterface: AuthServicesInterface,
  authService: AuthServiceType,
  userDbRepositoryInterface: UserDbInterface,
  userDbRepositoryMongoDB: UserRepositoryMongoDB
) => {
  const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB());
  const authServices = authServicesInterface(authService());

  const userRegister = asyncHandler(async (req: Request, res: Response) => {
    const user: UserRegisterInterface = req.body;
    const { token, userData } = await userRegisterUseCase(
      user,
      dbRepositoryUser,
      authServices
    );
    res.json({
      message: "user registered successfully",
      token,
      userData,
    });
  });

  const userLogin = asyncHandler(async(req:Request,res:Response)=>{
    const {email,password}:{email:string,password:string} = req.body;
    const {token ,userData}= await userLoginUseCase(
        email,
        password,
        dbRepositoryUser,
        authServices
    );
    res.json({
        message:'user login successful',
        token,
        userData
    })
  })

  

  return {
    userRegister,
    userLogin,
   
  };
};

export default authController;
