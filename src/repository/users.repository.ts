import prisma from "../helpers/db/db";
import { IUserRepository } from "../helpers/interfaces/user.interface";
import { users } from "@prisma/client";
import "../helpers/middlewares/encryptPassword";

class UsersRepository implements IUserRepository<users> {
    async get(id: number): Promise<users | null> {
        let data = await prisma.users.findUnique({
            where: {
                id:id
            }
        })
        return data
    }
    async create(data: users): Promise<users> {
        let users = await prisma.users.create({
            data
        });
        return users
    }

}

export default new UsersRepository();
