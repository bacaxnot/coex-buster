import { IGetOne } from "./crud.interface";

export interface IUserModel{
    id: number,
    name: string,
    email: string,
    password: string,
    
}

export interface IUserRepository<TModel> extends IGetOne<TModel | null,  number>{}

export interface IUserController<TModel> extends IGetOne<TModel | null, number>{}
