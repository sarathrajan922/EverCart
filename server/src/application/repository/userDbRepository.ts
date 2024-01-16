import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { UserRegisterInterface } from "../../types/user";

export const userDbRepository =(repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async(user:UserRegisterInterface)=> await repository.addUser(user)
    const getUserEmail = async(email:string)=>await repository.getUserEmail(email)

    return {
        addUser,
        getUserEmail
    }
}

export type UserDbInterface = typeof userDbRepository;