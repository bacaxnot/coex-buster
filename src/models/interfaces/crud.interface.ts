export interface ICreate<TReturn> {
    create<TData>(data: TData): TReturn
}

export interface IGetOne<TReturn, TypeId> {
    get(id: TypeId): TReturn
}

export interface IGetAll<TReturn>{
    getAll(): TReturn
}

export interface IUpdateOne<TReturn, TypeId, TData> {
    update(id: TypeId, data: TData): TReturn
}

export interface IDeleteOne<TReturn, TypeId> {
    delete(id: TypeId): TReturn
}

