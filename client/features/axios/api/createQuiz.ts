import { AxiosRequestConfig } from "axios";
import BASE_URL, { urls } from "@/config";
import userSetupInterceptors from "../interceptors/userInterceptor";

const api = userSetupInterceptors();

const createQuizApi = async (values: any) => {
  //!change the type 'any' into corresponding quiz data interface
  try {
    const config: AxiosRequestConfig = {
      url: BASE_URL + urls.CREATE_QUIZ,
      method: "POST",
      data: values,
    };

    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 500") {
      throw new Error("internal server error!!");
    } else {
      throw new Error("something went wrong!! Try Again!");
    }
  }
};

export default createQuizApi;
