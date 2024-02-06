import { UserDbInterface } from "../../repository/userDbRepository";
import AppError  from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";


export const upgradeToPremiumUseCase = async(
    userId:string,
    userRepository:ReturnType<UserDbInterface>
)=>{
    const upgradeToPremium = await userRepository.upgradeToPremium(userId)
    if(!upgradeToPremium){
        throw new AppError('upgrade to premium failed',HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return {
        upgradeToPremium
    }
}