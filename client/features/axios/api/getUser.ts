import { AxiosRequestConfig } from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupInterceptors from "../interceptors/userInterceptor";

const api = userSetupInterceptors();

const GetUserApi = async()=>{
    try{
        const config:AxiosRequestConfig ={
            url:BASE_URL+urls.GET_USER,
            method: "GET",
        }

        const response = await api(config)
        return response?.data

    }catch(err:any){
        if(err.message === 'Request failed with status code 404'){
            throw new Error('User Not Found!')
        }
    }
}

export default GetUserApi;