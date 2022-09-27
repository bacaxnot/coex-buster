import prisma from "../db/db";
import bcrypt from "bcrypt";

prisma.$use(async (params, next)=>{
    if(params.model === 'users' && params.action === 'getOne'){
        const password = params.args.data.password;
        const comparar = async(password:string, hashpassword:string)=>{
            return await bcrypt.compare(password, hashpassword)
        }
        params.args.data.password = comparar;
    }
    return await next(params)
})
