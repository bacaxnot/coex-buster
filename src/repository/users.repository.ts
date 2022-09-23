import prisma from "../helpers/db/db";
import { IUserRepository } from "../helpers/interfaces/user.interface";
import { users } from "@prisma/client"

class UserRepository implements IUserRepository<users> {
    async get(id: number): Promise<users | null> {
        throw new Error("Method not implemented.");
    }
    async create(name: string, email: string): Promise<users> {
        throw new Error("Method not implemented.");
    }
}
