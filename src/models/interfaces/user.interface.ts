import { IGetOne, ICreate } from "./crud.interface";

export interface IUserModel{
    id: number,
    name: string,
    email: string,
    password: string,
}

export interface IUserRepository<TModel> extends IGetOne<TModel | null,  number>, ICreate<TModel>{}

export interface IUserController<TModel> extends IGetOne<TModel | null, number>, ICreate<TModel>{}
