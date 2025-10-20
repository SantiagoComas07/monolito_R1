    import {Request,Response} from 'express';
    
    
    const greetings =  (req:Request,res:Response):void =>{
        res.send("Hello world");
    };


    export default greetings;