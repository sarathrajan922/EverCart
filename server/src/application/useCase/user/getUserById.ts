import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";


export const getUserByIdUseCase = async(
    userId: string,
    userRepository:ReturnType<UserDbInterface>
) => {
    const userData = await userRepository.getUserById(userId);
    if(!userData){
        throw new AppError('user Data not found',HttpStatus.NOT_FOUND);
    }
    return userData
    
}