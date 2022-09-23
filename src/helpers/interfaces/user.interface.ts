import { IGetOne, ICreate, IController } from "./crud.interface";
import { Request, Response } from "express";

export interface IUserRepository<TModel> extends IGetOne<TModel | null,  number>, ICreate<TModel>{}

export interface IUserController extends IController<Request, Response>{}
