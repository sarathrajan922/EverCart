
import { AuthServicesReturn } from "../../frameworks/services/authServices";
import { PayloadInterface } from "../../types/common";

export const authServicesInterface = (service: AuthServicesReturn)=>{
    const hashPassword = (password:string)=> service.hashPassword(password)
    const comparePassword = (password:string,hashedPassword:string)=> service.comparePassword(password,hashedPassword)
    const generateToken = (payload:PayloadInterface)=> service.generateToken(payload)
    const verifyToken = (token:string)=> service.verifyToken(token)

    return {
        hashPassword,
        comparePassword,
        generateToken,
        verifyToken
    }
 }

 export type AuthServicesInterface = typeof authServicesInterface;