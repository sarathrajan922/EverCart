import { UserDbInterface } from './../../repository/userDbRepository';
import { HttpStatus } from "../../../types/httpStatus";
import AppError from '../../../utils/appError';


export const fetchQuizUseCase = async(
    quizId:string,
    userRepository:ReturnType<UserDbInterface>
)=>{
    const fetchQuizData = await userRepository.fetchQuiz(quizId)
    if(!fetchQuizData){
        throw new AppError('internal server error',HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return {
        fetchQuizData
    }
};