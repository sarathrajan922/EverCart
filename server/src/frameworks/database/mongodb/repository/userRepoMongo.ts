
import User from "../model/userModel";
import { UserRegisterInterface } from "../../../../types/user";
import { QuizInterface } from "../../../../types/quiz";
import Quiz from "../model/quizModel";


export const userRepositoryMongoDB = ()=>{
    const addUser = async(user:UserRegisterInterface)=>{
        return await User.create(user)
    }

    const getUserEmail = async(email:string)=>{
        return await User.findOne({email})
    }

    const createQuiz = async (data:QuizInterface)=>{
        return await Quiz.create(data)
    }

    const upgradeToPremium = async(userId:string)=>{
        return await User.findByIdAndUpdate(userId, { premium: true }, { new: true });
    }

    
    
    return {
        addUser,
        getUserEmail,
        createQuiz,
        upgradeToPremium
    }

    
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;