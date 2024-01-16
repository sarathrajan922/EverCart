import { UserRegisterInterface } from "../../../types/user";
import { UserDbInterface } from "../../repository/userDbRepository";
import { AuthServicesInterface } from "../../services/authServicesInterface";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";

export const userRegisterUseCase = async(
    user:UserRegisterInterface,
    userRepository:ReturnType<UserDbInterface>,
    authServices:ReturnType<AuthServicesInterface>
)=>{
    user.email = user.email.toLowerCase();
    const isEmailExist = await userRepository.getUserEmail(user.email)
    if(isEmailExist){
        throw new AppError('existing email',HttpStatus.CONFLICT)
    }
    if(user.password){
        user.password = await authServices.hashPassword(user.password)
    }

    const userData = await userRepository.addUser(user)

    const payload = {
        id: userData?._id.toString(),
        role:'user',
    }

    const token = authServices.generateToken(payload)

    return {
        token,
        userData
    }
}