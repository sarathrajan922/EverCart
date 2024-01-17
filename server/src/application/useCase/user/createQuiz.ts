import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";
import { QuizInterface } from "../../../types/quiz";


export const createQuizUseCase = async(
    userId:string,
    data:QuizInterface,
    userRepository:ReturnType<UserDbInterface>
)=>{
    console.log(data)
    const createQuiz = await userRepository.createQuiz(data)
    if(!createQuiz){
        throw new AppError('internal server error',HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return {
        createQuiz
    }
}