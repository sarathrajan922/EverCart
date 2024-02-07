import { z } from "zod";

export const quizSchema = z
  .object({
    category: z.string().min(1, { message: "Category is required" }),
    questions: z
      .array(
        z.object({
          question: z.string().min(1, { message: "Question is required" }),
          options: z.array(
            z.object({
              text: z.string().min(1, { message: "Option is required" }),
              isCorrect: z.boolean(),
            })
          ),
        })
      )
      .min(1, { message: "At least one question is required" }),
  })
  .refine(
    (data) => {
      // Check if at least one question exists
      if (data.questions.length === 0) {
        return false;
      }

      // Check if at least one correct answer is selected for each question
      return data.questions.every((question) =>
        question.options.some((option) => option.isCorrect)
      );
    },
    {
      message: "At least one correct answer must be selected for each question",
    }
  );
