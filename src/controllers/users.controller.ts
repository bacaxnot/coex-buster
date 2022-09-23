import UserRepository from "../repository/users.repository";
import { users } from "@prisma/client";
import { IUserController } from "../helpers/interfaces/user.interface";

class UsersController implements IUserController<users> {
    async get(id: number): Promise<users | null> {
        throw new Error("Method not implemented.");
    }
    async create(name: string, email: string): Promise<users> {
        throw new Error("Method not implemented.");
    }

}