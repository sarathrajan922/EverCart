import { AxiosRequestConfig } from 'axios';
import BASE_URL,{urls} from '@/config';
import userSetupInterceptors from '../interceptors/userInterceptor';

const  api = userSetupInterceptors();

const AddQuizResultApi = async (data:any)=>{
    try{
        const config:AxiosRequestConfig = {
            url: BASE_URL+urls.ADD_QUIZ_RESULT,
            method: "POST",
            data: data
        }

        const response = await api(config)
        return response?.data

    }catch(err:any){
        if(err.message === 'Request failed with status code 500'){
            throw new Error ('internal server error')
        }
    }
}

export default AddQuizResultApi;