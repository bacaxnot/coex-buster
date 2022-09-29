import jwt, {Secret, JwtPayload} from "jsonwebtoken";
import { Response, Request, NextFunction, Express } from "express";
import config from "../../config";

declare global {
    namespace Express{
        interface Request {
            userId:string
        }
    }
}

const tokenAuthentication = async (req:Request, res:Response, next:NextFunction)=>{
    const {auth} = req.cookies;
    // console.log(auth)
    if (!auth) {
        return res.status(401).send('No estas autorizado');
    }
    const tokenValidated = await jwt.verify(auth, config.SECRET as Secret) as JwtPayload;
    req.userId = tokenValidated.id
    next();
}

export default tokenAuthentication

