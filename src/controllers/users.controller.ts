import UserRepository from "../repository/users.repository";
import { IUserController } from "../helpers/interfaces/user.interface";
import { Request, Response } from "express";


class UsersController implements IUserController{

    async getOne(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);

        const user = await UserRepository.get(id);

        res.json(user);
        
    }

    async create(req: Request, res: Response): Promise<void> {
        
    }


}

export default new UsersController();