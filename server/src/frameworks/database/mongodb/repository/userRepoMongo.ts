
import User from "../model/userModel";
import { UserRegisterInterface } from "../../../../types/user";


export const userRepositoryMongoDB = ()=>{
    const addUser = async(user:UserRegisterInterface)=>{
        return await User.create(user)
    }

    const getUserEmail = async(email:string)=>{
        return await User.findOne({email})
    }
    return {
        addUser,
        getUserEmail
    }
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;