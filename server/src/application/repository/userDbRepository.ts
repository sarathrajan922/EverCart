import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";
import { QuizInterface } from "../../types/quiz";
import { UserRegisterInterface } from "../../types/user";

export const userDbRepository =(repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async(user:UserRegisterInterface)=> await repository.addUser(user);
    const getUserEmail = async(email:string)=>await repository.getUserEmail(email);
    const getUserById = async(userId:string)=>await repository.getUserById(userId);
    const createQuiz = async(data:QuizInterface)=>await repository.createQuiz(data);
    const upgradeToPremium = async (userId:string)=>await repository.upgradeToPremium(userId);
    const fetchAllQuiz = async ()=> await repository.fetchAllQuiz();
    const fetchQuiz = async (quizId:string) => await repository.fetchQuiz(quizId);
    const addQuizResult = async(obj:any)=> await repository.addQuizResult(obj);
    const userQuizResults = async(userId:string)=> await repository.userQuizResults(userId);
    return {
        addUser,
        getUserEmail,
        getUserById,
        createQuiz,
        upgradeToPremium,
        fetchAllQuiz,
        fetchQuiz,
        addQuizResult,
        userQuizResults
    }
}

export type UserDbInterface = typeof userDbRepository;