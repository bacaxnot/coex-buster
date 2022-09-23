import { Request, Response } from "express";
import { ICreate, IGetAll, IGetOne, IController } from "./crud.interface";


export interface ITransactionController<TModel> extends IController<Request, Response> {}

export interface ITransactionRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel> {}