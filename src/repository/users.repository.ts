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
        const{name, email, password} = data
        let users = await prisma.users.create({
            data:{
                name,
                email,
                password
            }
        });
        return users
    }

    async getEmail(email: string): Promise<users> {
        const user : any = await prisma.users.findUnique({
            where: {
                email:email
            }
        })
        // if(!user){
        //     throw new Error('usuario no encontrado')
        // }
        return user
    }

}

export default new UsersRepository();
