import { Request, Response } from "express";
import jwt, {Secret} from 'jsonwebtoken';
import bcrypt from "bcrypt";
import config from "../config";
import { IController } from "../helpers/interfaces/crud.interface"
import usersRepository from "../repository/users.repository"


class LoginController implements IController<Request, Response> {
    
    
    async signIn(req: Request, res: Response): Promise<void> {
        const {email, password} = req.body
        const user = await usersRepository.getEmail(email);
        const result = await bcrypt.compare(password, user.password);
        if(!result){
            res.status(401).send("contraseña incorrecta");
            return 
        }
        const tokenJwt = jwt.sign({user:user}, config.SECRET as Secret, {
            expiresIn: 60*60*24
        });
        res.cookie('auth', tokenJwt, {
            httpOnly: true,
            expires: new Date(Date.now() + 60*60*24)
        });
        res.redirect('/movies');
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const {id, name, email, password, passwordComfirm} = req.body
        console.log(password, passwordComfirm)
        const data = await usersRepository.create({id, name, email, password})
        res.redirect('/login')
        console.log("se creo usuario");
    }
}

export default new LoginController()