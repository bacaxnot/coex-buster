import prisma from "../helpers/db/db";
import { IUserRepository } from "../helpers/interfaces/user.interface";
import { users } from "@Prisma/client"

class UsersRepository implements IUserRepository<users> {
    async get(id: number): Promise<users | null> {
        let data = await prisma.users.findUnique({
            where: {
                id:id
            }
        })

        return data
    }

    create(data: users): users {
        throw new Error("Method not implemented.");
    }
}

export default new UsersRepository();
