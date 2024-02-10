import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";


export const userQuizResultsUseCase = async(
    userId:string,
    userRepository:ReturnType<UserDbInterface>
)=>{
    const userQuizResult = await userRepository.userQuizResults(userId)
    if(!userQuizResult){
        throw new AppError('internal server error',HttpStatus.INTERNAL_SERVER_ERROR)
    }
    
    return {
        userQuizResult
    }
}