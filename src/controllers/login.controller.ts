import { Request, Response } from "express"
import { IController } from "../helpers/interfaces/crud.interface"
import '../helpers/middlewares/camparePassword'
import usersRepository from "../repository/users.repository"
import bcrypt from "bcrypt";


class LoginController implements IController<Request, Response> {
    
    
    async signIn(req: Request, res: Response): Promise<void> {
        const {email, password} = req.body
        const user = await usersRepository.getEmail(email)
        const hashPassword = user.password
        const result = bcrypt.compare(password, hashPassword);
        if(!result){
            throw new Error('contraseña incorrecta')
        }
        // res.render('/shop', user.email)
        res.json({result})
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const {name, email, password} = req.body
        res.json({name, email, password})
    }
}

export default new LoginController()