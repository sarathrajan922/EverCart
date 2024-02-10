import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";

export const addQuizResultUseCase = async (
  userRepository: ReturnType<UserDbInterface>,
  quizResult: any
) => {
  const result = await userRepository.addQuizResult(quizResult);
  if (!result) {
    throw new AppError(
      "internal server error",
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
  return {
    result,
  };
};
