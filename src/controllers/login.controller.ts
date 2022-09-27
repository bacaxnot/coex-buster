import { Request, Response } from "express"
import { IController } from "../helpers/interfaces/crud.interface"


class LoginController implements IController<Request, Response> {
    
    
    async signIn(req: Request, res: Response): Promise<void> {
        const {email, password} = req.body
        res.json({email, password})
    }

    async signUp(req: Request, res: Response): Promise<void> {
        const {name, email, password} = req.body
        res.json({name, email, password})
    }
}

export default new LoginController()