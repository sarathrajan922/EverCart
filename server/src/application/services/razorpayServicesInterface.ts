import { RazorpayServicesRetrun } from "../../frameworks/services/razorpayServices";
import { RazorpayPaymentObject } from "../../types/razorpay";

export const razorpayServicesInterface = (service:RazorpayServicesRetrun)=>{
    const generateRazorypay = (orderId:any,total:number)=>service.generateRazor(orderId,total);
    const verifyPayment = (obj: any)=>service.verifyPayment(obj);

    return{
        generateRazorypay,
        verifyPayment
    }
}

export type RazorpayServicesInterface = typeof razorpayServicesInterface;