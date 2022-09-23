export interface ICreate<TReturn> {
<<<<<<< HEAD
    create<TData>(data: TData): TReturn
=======
    create(name: string, email:string): Promise<TReturn>
>>>>>>> 1f0cdb8f11261f21bce43ea03e2564466233d2c5
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

