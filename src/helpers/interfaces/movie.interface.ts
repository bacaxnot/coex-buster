import { IGetAll, IGetOne, IController } from "./crud.interface";
import { Request, Response } from "express";

export interface IMovieRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number> {}

export interface IMovieController<TModel> extends IController<Request, Response> {}



