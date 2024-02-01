import { UserInputInterface } from './../../../types/userRegister';
import axios, { AxiosRequestConfig } from "axios";
import BASE_URL, { urls } from "@/config";


const userRegisterApi = async (values: UserInputInterface) => {

  try {
    const config: AxiosRequestConfig = {
      url: BASE_URL + urls.USER_REGISTER,
      method: "POST",
      data: values,
    };

    const response = await axios(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 409") {
      throw new Error("Email already exists !!");
    }
  }
};

export default userRegisterApi;
