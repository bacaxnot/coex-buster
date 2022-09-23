import { IORM } from '../../interfaces/db.interface';
import { PrismaClient } from '@prisma/client'

class DBPrisma implements IORM<PrismaClient> {
    private _orm:PrismaClient = new PrismaClient();

    get orm():PrismaClient {
        return this._orm;
    }
}


export default DBPrisma;