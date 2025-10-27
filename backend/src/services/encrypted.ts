import bcrypt from 'bcryptjs';


    export class passwordService {
    //To hash a password
    static async hashPassword(password:string):Promise<string>{
        const salt =  await bcrypt.genSalt(10);//Cantidad de rounds  o "cost factor" hash completion process
        return bcrypt.hash(password,salt);
    }
    // Compare a password with a hashed password 
    static async comparePassword(candidate:string, hashed:string):Promise<boolean>{
        return bcrypt.compare(candidate,hashed);
    }
    }


    export default passwordService;