import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";



export const fetchAllQuizUseCase = async (
    userRepository:ReturnType<UserDbInterface>
) => {
    const fetchAllQuizData = await userRepository.fetchAllQuiz()
    if(!fetchAllQuizData){
        throw new AppError('internal server error',HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return {
        fetchAllQuizData
    };
};