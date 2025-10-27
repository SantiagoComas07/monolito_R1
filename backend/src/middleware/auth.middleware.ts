import {Request, Response, NextFunction} from 'express';
import jwt, {JwtPayload,VerifyErrors}  from 'jsonwebtoken';
import {JWT_SECRET} from '../index';

export const validateLogin = (req:Request, res:Response, next:NextFunction) =>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message: "Email or password is missing"
        })
    }
    next(); // If all is good, proceeds to the next middleware or controller 
}



export const verifyToken= (req:Request, res:Response, next:NextFunction)=>{
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token){
        return res.status(401).json({message:"Token is required"})
    }
    
    jwt.verify(token, JWT_SECRET, (error: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
        if(error){
            return res.status(403).json({message:"Invalid token"});
        }
        next();
    })
}