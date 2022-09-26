import prisma from "../helpers/db/db";
import { IMovieRepository } from "../helpers/interfaces/movie.interface";
import { movies } from "@prisma/client"

class MoviesRepository implements IMovieRepository<movies> {

    async getAll(): Promise<movies> {
        const data:any = await prisma.movies.findMany()
        return data
    }


    async get(id: number): Promise<movies | null> {
        const data = await prisma.movies.findUnique({
            where: {
                id: id
            }
        })

        return data
    }


    async update(id: number, dataToUpdate:movies): Promise<movies> {
        const data:any = await prisma.movies.update({
            where: {
                id: id
            },
            data: dataToUpdate
        })

        return data
    }

    async deleted(id: number): Promise<movies> {
        const data:any = await prisma.movies.delete({
            where: {
                id: id
            }
        })

        return data
    }

    async create(data: movies): Promise<movies> {
        const {title, overview, poster_path, release_date, popularity, vote_average, vote_count, adult, language_id, runtime, video_key} = data;
        const movie:any = await prisma.movies.create({
            data: {
                title,
                overview,
                poster_path,
                release_date,
                popularity,
                vote_average,
                vote_count,
                adult,
                language_id,
                runtime,
                video_key
            }
        });

        return movie;
    }

    async getAllByCategory(id: number): Promise<void>{
        const movies:any = await prisma.movies_categories.findMany({
            where:{
                category_id: id
            },
            include:{
                movies: true
            }
        });
        return movies
    }

    async getAllBySearch(name: any): Promise<void>{
        const movies:any = await prisma.movies.findMany({
            where:{
                title: {
                    contains: name
                }
            }
        });
        return movies
    }
}

export default new MoviesRepository();