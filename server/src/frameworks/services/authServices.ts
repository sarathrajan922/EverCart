import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import configKeys from '../../config'
import { PayloadInterface } from '../../types/common'


export const authServices = ()=>{
    const hashPassword = async(password:string)=>{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
    }

    const comparePassword = (password:string,hashedPassword:string)=>{
        return bcrypt.compare(password,hashedPassword)
    }

    const generateToken = (payload:PayloadInterface)=>{
        const token = jwt.sign(payload,configKeys.JWT_SECRET,{
            expiresIn:'2d'
        })
        return token
    }

    const verifyToken = (token:string)=>{
        return jwt.verify(token,configKeys.JWT_SECRET)
    }

    return{
        hashPassword,
        comparePassword,
        generateToken,
        verifyToken,
    }
}

export type AuthServiceType = typeof authServices
export type AuthServicesReturn = ReturnType<AuthServiceType>