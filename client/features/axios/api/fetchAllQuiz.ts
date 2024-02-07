import { AxiosRequestConfig } from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupInterceptors from "../interceptors/userInterceptor";

const api = userSetupInterceptors();

const fetchAllQuizDataApi = async ()=>{
    try{
        const config:AxiosRequestConfig = {
            url: BASE_URL+urls.FETCH_ALL_QUIZ_DATA,
            method: 'GET'
        }
        const response = await api(config);
        return response?.data

    }catch(err:any){
        if(err.message === 'Request failed with status code 500'){
            throw new Error('Internal server error',err.message)
        }
    }
};

export default fetchAllQuizDataApi;