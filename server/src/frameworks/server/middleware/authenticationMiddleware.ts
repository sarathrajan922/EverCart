import { Response,NextFunction } from "express";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";
import { customRequest } from './../../../types/expressCustomRequest';
import { authServices } from "../../services/authServices";

const authenticationMiddleware = (
    req:customRequest,
    res:Response,
    next:NextFunction
)=>{
    let token:string | null = "";
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        throw new AppError("Token not found",HttpStatus.UNAUTHORIZED)
    }

        try{
            const payload :any  = authServices().verifyToken(token);
            req.payload = payload;
            next()
        }catch(error){
            throw new AppError('UnAuthorized user',HttpStatus.UNAUTHORIZED)
        }
}
export default authenticationMiddleware;