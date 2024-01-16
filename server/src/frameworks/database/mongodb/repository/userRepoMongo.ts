
import User from "../model/userModel";
import { UserRegisterInterface } from "../../../../types/user";


export const userRepositoryMongoDB = ()=>{
    const addUser = async(user:UserRegisterInterface)=>{
        return await User.create(user)
    }
    return {
        addUser
    }
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;