import {Request, Response} from 'express';  
import {User} from '../models';
import passwordService from '../services/encrypted';
import jwt from 'jsonwebtoken';
import {JWT_SECRET}from '../index'
import bcrypt from 'bcryptjs';

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

        console.log('User found:', user);
        console.log('password', password);
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




// Register new User

export const register = async(req:Request, res:Response):Promise<void>=>{
    try{
        const {name, email, password, role} = req.body;
         // Validate that the fields are present
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:'Email and password are required'
            })
            return;
        };
        const existUser = await User.findOne({where:{email}});
        if(existUser){
            res.status(400).json({message:'The user already exist'});
            return;
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'analyst',
        });
        await newUser.save();

            res.status(201).json({
      message: "Usuario registrado exitosamente",});
    }catch(error){
        console.error('Error during registration:', error)
    }
}