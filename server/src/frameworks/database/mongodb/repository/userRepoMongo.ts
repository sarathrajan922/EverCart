import User from "../model/userModel";
import { UserRegisterInterface } from "../../../../types/user";
import { QuizInterface } from "../../../../types/quiz";
import Quiz from "../model/quizModel";

export const userRepositoryMongoDB = () => {
  const addUser = async (user: UserRegisterInterface) => {
    return await User.create(user);
  };

  const getUserEmail = async (email: string) => {
    return await User.findOne({ email });
  };

  const createQuiz = async (data: QuizInterface) => {
    return await Quiz.create(data);
  };

  const upgradeToPremium = async (userId: string) => {
    return await User.findByIdAndUpdate(
      userId,
      { premium: true },
      { new: true }
    );
  };

  const fetchAllQuiz = async () => {
    try {
      return await Quiz.find();
    } catch (error) {
      throw error;
    }
  };

  return {
    addUser,
    getUserEmail,
    createQuiz,
    upgradeToPremium,
    fetchAllQuiz,
  };
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
