import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { customRequest } from '../../types/expressCustomRequest'
import { RazorpayServiceType } from '../../frameworks/services/razorpayServices'
import { RazorpayServicesInterface } from '../../application/services/razorpayServicesInterface'
const paymentController = (
    //payment service
    razorypayServicesInterface:RazorpayServicesInterface,
    razorypayService: RazorpayServiceType
)=>{

    const razorpayServices = razorypayServicesInterface(razorypayService())

    const generateRazorypay = asyncHandler(async(req:customRequest,res:Response)=>{
        const userId = req?.payload?.id ?? '';
        const {total} = req?.body
        //call razorpay service and pass userId and pass total 
        const order = await razorpayServices.generateRazorypay(userId,parseInt(total))
        console.log(order)
        res.json({
            message:'generate Razorpay success',
            order
        })
    });

    const verifyPayment = asyncHandler(async(req:customRequest,res:Response)=>{
        console.log('Req.body ===',req?.body)
        const result = await razorpayServices.verifyPayment(req.body);
        console.log('result ===',result)

        res.json({
            message: 'verify payment done',
            result
        })



    })

    return {
        generateRazorypay,
        verifyPayment
    }

}

export default paymentController;
