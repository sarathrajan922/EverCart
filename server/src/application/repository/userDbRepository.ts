import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { QuizInterface } from "../../types/quiz";
import { UserRegisterInterface } from "../../types/user";

export const userDbRepository =(repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async(user:UserRegisterInterface)=> await repository.addUser(user);
    const getUserEmail = async(email:string)=>await repository.getUserEmail(email);
    const createQuiz = async(data:QuizInterface)=>await repository.createQuiz(data);
    const upgradeToPremium = async (userId:string)=>await repository.upgradeToPremium(userId);
    const fetchAllQuiz = async ()=> await repository.fetchAllQuiz();
    const fetchQuiz = async (quizId:string) => await repository.fetchQuiz(quizId)
    return {
        addUser,
        getUserEmail,
        createQuiz,
        upgradeToPremium,
        fetchAllQuiz,
        fetchQuiz
    }
}

export type UserDbInterface = typeof userDbRepository;