import { UserRepositoryMongoDB } from './../../frameworks/database/mongodb/repository/userRepoMongo';
import { UserDbInterface} from '../../application/repository/userDbRepository';
import asyncHandler from 'express-async-handler'
import { Response } from 'express';
import { customRequest } from '../../types/expressCustomRequest';


const userController = (
    userDbRepositoryInterface: UserDbInterface,
    userDbRepositoryMongoDB:UserRepositoryMongoDB
) => {
    const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB())

    const createQuiz = asyncHandler(async (req:customRequest,res:Response)=>{
        //? collect data from req.body
        console.log('api reached api/user/quiz')
        res.send("Done")
    });

    return {
        createQuiz
    }
}

export default userController;