import {Request, Response} from 'express';  
import {User} from '../models';
import passwordService from '../services/encrypted';
import jwt from 'jsonwebtoken';
import {JWT_SECRET}from '../index'


// log in 

export  const login = async(req:Request, res:Response ): Promise<void>=>{
    try{
        const {email,password}=req.body;
        // Validate that the fields are present
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:'Email and password are required'
            })
            return;
        };
         
        //Verify the user exists
    const user = await User.findOne({where:{email}});

        if(!user){
            res.status(401).json({
                success:false,
                message:'Invalid email or password'
            })
            return;
        }

        //Verify the password is correct
        const isPasswordValid = await passwordService.comparePassword(password,user.password);

        if(!isPasswordValid){
            res.status(401).json({
                success:false,
                message: 'Invalid email or password'
            })
            return;
        }

        //Body
        
    const payload = {id: user.id, username: user.name};
        
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn:"1h"});
        res.status(200).json({message:"login exitoso", token})



}catch(error){
    console.error('Error during login:', error);
}
}