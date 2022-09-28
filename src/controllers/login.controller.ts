import { Request, Response } from "express"
import { IController } from "../helpers/interfaces/crud.interface"
import usersRepository from "../repository/users.repository"
import bcrypt from "bcrypt";


class LoginController implements IController<Request, Response> {
    
    
    async signIn(req: Request, res: Response): Promise<void> {
        const {email, password} = req.body
        console.log(email, password)
        const user = await usersRepository.getEmail(email)
        const hashPassword = user.password
        const result = bcrypt.compare(password, hashPassword);
        if(!result){
            throw new Error('contraseña incorrecta')
        }
        res.json({result})
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const {id, name, email, passwordForm} = req.body
        const salt = bcrypt.genSaltSync();
        const password:string = bcrypt.hashSync(passwordForm, salt);
        const data = await usersRepository.create({id, name, email, password})
        res.json(data)
    }
}

export default new LoginController()