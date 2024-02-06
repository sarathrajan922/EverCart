import { AxiosRequestConfig } from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupInterceptors from "../interceptors/userInterceptor";

const api = userSetupInterceptors();

const RazorpayVerifyPaymentApi = async (data: any,order:any)=>{
    const obj = {
        data,
        order
    }
    try{
        const config:AxiosRequestConfig = {
            url: BASE_URL+urls.RAZORPAY_VERIRY_PAYMENT,
            method: "POST",
            data: obj
        }

        const response = await api(config);
        return response?.data;

    }catch(error:any){
        console.log(error.message)
    }
}

export default RazorpayVerifyPaymentApi;