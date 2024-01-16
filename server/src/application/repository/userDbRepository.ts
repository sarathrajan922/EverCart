import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { UserRegisterInterface } from "../../types/user";

export const userDbRepository =(repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async(user:UserRegisterInterface)=> await repository.addUser(user)


    return {
        addUser
    }
}

export type UserDbInterface = typeof userDbRepository;