export interface ICreate<TReturn> {
    create(name: string, email:string): Promise<TReturn>
}

export interface IGetOne<TReturn, TypeId> {
    get(id: TypeId): Promise<TReturn>
}

export interface IGetAll<TReturn>{
    getAll(): Promise<TReturn>
}

export interface IUpdateOne<TReturn, TypeId, TData> {
    update(id: TypeId, data: TData): Promise<TReturn>
}

export interface IDeleteOne<TReturn, TypeId> {
    delete(id: TypeId): Promise<TReturn>
}

