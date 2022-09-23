
import TransactionRepository  from "../repository/transaction.repository";
import { ITransactionController } from "../helpers/interfaces/transaction.interface";
import { Request, Response } from "express";
import transactionRepository from "../repository/transaction.repository";

class TransactionController implements ITransactionController{
    async getOne(req:Request, res:Response):Promise<void>{
        const id = parseInt(req.params.id);
        const query = await transactionRepository.get(id);
        res.json(query);
    }
    async getAll(req: Request, res:Response): Promise<void> {
        const records = await transactionRepository.getAll();
        res.json(records);
    }
    async create(req: Request, res:Response): Promise<void> {
        const data = req.body;
        const query = await transactionRepository.create(data);
        res.json(true)
    }
}


export default new TransactionController();