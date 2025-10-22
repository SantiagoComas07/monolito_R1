import {Request, Response} from 'express';  
import {User} from '../models';


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
                sucess:false,
                message:'Invalid email or password'
            })
        }else{
            alert("email")
        }

        //Verify the password is correct
        const isPasswordValid= await user.comparePassword(password);

        if(!isPasswordValid){
            res.status(401).json({
                success:false,
                message: 'Invalid email or password'
            })
            return;
        }else{
            alert("contraseña")
        }







}catch(error){
    console.error('Error during login:', error);
}
}