import UserRepository from "../repository/users.repository";
import { Request, Response } from "express";
import { IController } from "../helpers/interfaces/crud.interface";
import '../helpers/middlewares/encryptPassword'


class UsersController implements IController<Request, Response>{


}

export default new UsersController();