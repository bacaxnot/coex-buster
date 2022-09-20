
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

export interface IMovieController {
    getMovies(): Promise<IMovieModel> |IMovieModel[],
    getById(id:number): Promise<IMovieModel> |IMovieModel,
}


