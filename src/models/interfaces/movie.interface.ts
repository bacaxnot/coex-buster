import { IGetAll, IGetOne } from "./crud.interface";

export interface IMovieModel {
    id:number,
    title:string,
    overview:string,
    posterPath:string,
    relaseDate:Date,
    popularity:number,
    voteAverage:number,
    voteCount:number,
    isForAdults:boolean,
    language:string,
    runtime: number,
    videoKey:string,
}

export interface IMovieRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number> {}

export interface IMovieController<TModel> extends IGetAll<TModel>, IGetOne<TModel, number> {}



