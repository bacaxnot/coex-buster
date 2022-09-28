import UserRepository from "../repository/users.repository";
import { Request, Response } from "express";
import { IController } from "../helpers/interfaces/crud.interface";


class UsersController implements IController<Request, Response>{

    async getOne(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.userId);

        const user = await UserRepository.get(id);

        res.json(user);
        
    }

    async create(req: Request, res: Response): Promise<void> {
        const {id, email, password} = req.body;

        const data = await UserRepository.create({id, email, password});

        res.json(data)
    }
}

export default new UsersController();