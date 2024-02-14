"use client";

import { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import { quizSchema } from "@/validation/quiz";
import Swal from "sweetalert2";
import createQuizApi from "@/features/axios/api/createQuiz";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/types/question";


export default function CreateQuiz() {
  const [category, setCategory] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [customError, setCustomError] = useState<boolean>(false);
  const router = useRouter();

  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      question: "",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  ]);

  const handleAddQuestion = () => {
    if (questions.length < 5) {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          question: "",
          options: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
        },
      ]);
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const cancelConformation = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Question has been deleted.",
          icon: "success",
        });
        handleRemoveQuestion(index);
      }
    });
  };

  const finalModal = () => {
    Swal.fire({
      title: "Done!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/quiz");
      }
    });
  };

  const handleInputChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const newQuestions = [...questions];
    if (optionIndex === -1) {
      newQuestions[questionIndex].question = value;
    } else {
      newQuestions[questionIndex].options[optionIndex].text = value;
    }
    setQuestions(newQuestions);
  };

  const handleCheckboxChange = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.forEach((option, index) => {
      if (index === optionIndex) {
        option.isCorrect = true;
      } else {
        option.isCorrect = false;
      }
    });
    setQuestions(newQuestions);
  };

  const autoCloseModal = () => {
    let timerInterval: NodeJS.Timeout | undefined;
    const popup = Swal.getPopup();
    if (popup) {
      Swal.fire({
        title: "Publishing!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = popup.querySelector("b");
          if (timer) {
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          }
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };

  const finalConformation = async (formData: any) => {
    const { value: accept } = await Swal.fire({
      title: "Accessibility",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
      Only accessible to premium users.
    `,
      confirmButtonText: `
          Publish
        `,
    });
    let premium = accept ? true : false;

    formData.premium = premium;

    autoCloseModal();
    //api call here
    createQuizApi(formData)
      .then((response) => {
        setTimeout(()=>{
          finalModal();
        },2000)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleFinish = () => {
    const formData = { category, questions };
    const validationResult = quizSchema.safeParse(formData);
    if (validationResult.success) {
      const quizData = validationResult.data;
      finalConformation(quizData);
    } else {
      setErrors(validationResult.error.flatten().fieldErrors);
      const errorObject = validationResult.error.issues.filter(
        (error) => error.code === "custom"
      );
      if (errorObject) {
        setCustomError(true);
      } else {
        setCustomError(false);
      }
    }
  };

  return (
    <>
      <HomeNavBar />

      <div className="flex w-full min-h-screen items-center justify-center my-16  px-14">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Category</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              {errors["category"] && (
                <p className="text-red-500">{errors["category"].join(", ")}</p>
              )}
            </div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="mb-4">
                <label className="block mb-1">
                  Question {questionIndex + 1}
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded mb-2"
                  value={question.question}
                  onChange={(e) =>
                    handleInputChange(questionIndex, -1, e.target.value)
                  }
                />
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center mb-2 w-full"
                  >
                    {optionIndex + 1}.
                    <input
                      type="text"
                      className="border p-2 rounded mr-2 w-1/2"
                      value={option.text}
                      onChange={(e) =>
                        handleInputChange(
                          questionIndex,
                          optionIndex,
                          e.target.value
                        )
                      }
                    />
                    <label className="mr-2">Correct Answer</label>
                    <input
                      type="checkbox"
                      className="w-5 h-5 "
                      checked={option.isCorrect}
                      onChange={() =>
                        handleCheckboxChange(questionIndex, optionIndex)
                      }
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-gray-600 text-white  px-4 py-2 rounded"
                  onClick={() => cancelConformation(questionIndex)}
                >
                  Cancel
                </button>
              </div>
            ))}
            {errors["questions"] && (
              <p className="text-red-500">{errors["questions"].join(", ")}</p>
            )}
            {customError && (
              <p className="text-red-500">
                At least one correct answer must be selected for each question
              </p>
            )}
            <div className="flex justify-start gap-3">
              <button
                type="button"
                className={`bg-sky-500 text-white px-4 py-2 rounded mb-4 ${
                  questions.length >= 5 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleAddQuestion}
                disabled={questions.length >= 5}
              >
                Add Question
              </button>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                onClick={handleFinish}
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
