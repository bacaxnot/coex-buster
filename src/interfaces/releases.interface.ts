
export interface IReleasesModel {
    id: number,
    movie_id: number,
    country_id: number,
    certification_id: number,
    release_date: Date,

}

export interface ICertificationModel {
    id: number,
    type: string,
}