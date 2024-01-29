import axios,{AxiosRequestConfig} from 'axios';
import BASE_URL,{urls} from '@/config';

const userLoginApi = async(values:any)=>{
    //! change the type 'any' into corresponding user Login Data interface
    try{
        const config: AxiosRequestConfig = {
            url: BASE_URL+urls.USER_LOGIN,
            method: 'POST',
            data: values
        }

        const response = await axios(config);
        return response?.data

    }catch(error:any){
        if(error.message === 'Request failed with status code 404'){
            throw new Error('user not exist!!')
        }else if(error.message === 'Request failed with status code 401'){
            throw new Error('password not valid!!')
        }
    }
}

export default userLoginApi;