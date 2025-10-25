import {Request, Response, NextFunction} from 'express';


export const validateLogin = (req:Request, res:Response, next:NextFunction) =>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            succes:false,
            message: "Email or password is missing"
        })
    }
    next(); // If all is good, procees to the next middleware or controller 
}