import {AxiosRequestConfig} from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupInterceptors from "../interceptors/userInterceptor";

const api = userSetupInterceptors();

const RazorpayApi = async()=>{
    const obj = {
        total: 12300
    }
    try{
        const config:AxiosRequestConfig= {
            url:BASE_URL+urls.RAZORPAY,
            method:'POST',
            data: obj
        }

        const response = await api(config)
        return response?.data?.order;

    }catch(error:any){
        console.log(error.message)
    }
}

export default RazorpayApi;