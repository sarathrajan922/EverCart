import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { QuizInterface } from "../../types/quiz";
import { UserRegisterInterface } from "../../types/user";

export const userDbRepository =(repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async(user:UserRegisterInterface)=> await repository.addUser(user)
    const getUserEmail = async(email:string)=>await repository.getUserEmail(email)
    const createQuiz = async(data:QuizInterface)=>await repository.createQuiz(data)
    return {
        addUser,
        getUserEmail,
        createQuiz
    }
}

export type UserDbInterface = typeof userDbRepository;