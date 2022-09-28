import prisma from "../db/db";
import bcrypt from "bcrypt";

prisma.$use(async (params, next)=>{
    if(params.model === 'users' && params.action === 'create'){
        const password = params.args.data.password;
        const passwordEncrypt = bcrypt.hashSync(password, 10);
        params.args.data.password = passwordEncrypt;
    }
    return await next(params)
})

prisma.$use(async (params, next)=>{
    if(params.model === 'users' && params.action === 'findUnique'){
        const passwordUser = params.args.data.password
        const result = await next(params);
        const passwordEncrypte = params.args.data.password;
        const passwordValidate = bcrypt.compareSync(passwordUser, passwordEncrypte);
        return passwordValidate;
    }
})
