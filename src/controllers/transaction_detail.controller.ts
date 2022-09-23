import { Request, Response } from "express";
import transactions_detailRepository from "../repository/transactions_detail.repository";
import { ITransactionDetailController } from "../helpers/interfaces/transaction_detail.interface";

class TransactionDetailController implements ITransactionDetailController
{
    async getOne(req: Request, res:Response): Promise<void> {
        const id = parseInt(req.body.id);
        const query = transactions_detailRepository.get(id);
        res.json(query);
    }
}