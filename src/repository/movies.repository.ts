import prisma from "../helpers/db/db";
import { IMovieRepository } from "../helpers/interfaces/movie.interface";
import { movies } from "@prisma/client"
class MoviesRepository implements IMovieRepository<movies> {

    async getAll(): Promise<movies[]> {
        const count = await prisma.movies.count();
        const data: any = await prisma.movies.findMany({
            skip: 0,
            take: 11,
            include: {
                movies_categories: {
                    select: {
                        categories: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })
        return [count, data];
    }

    async getPaginated(pagination: string): Promise<any> {
        let page = parseInt(pagination);
        let skip = 11;
        if (page <= 1){
            skip = 0
        }
        if(page>2){
            skip *= page;
        }
        const count = await prisma.movies.count();
        const data: any = await prisma.movies.findMany({
            skip: skip,
            take: 11,
            include: {
                movies_categories: {
                    select: {
                        categories: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })
        return [count, data, page];
    }

    async get(id: number): Promise<movies | null> {
        const data = await prisma.movies.findUnique({
            where: {
                id: id
            },
            include: {
                movies_categories: {
                    select: {
                        categories: {
                            select: {
                                name: true
                            }
                        }
                    }
                }, languages: {
                    select:{
                        name:true
                    }
                }
            }
        })

        return data
    }


    async update(id: number, dataToUpdate: movies): Promise<movies> {
        const data: any = await prisma.movies.update({
            where: {
                id: id
            },
            data: dataToUpdate
        })

        return data
    }

    async deleted(id: number): Promise<movies> {
        const data: any = await prisma.movies.delete({
            where: {
                id: id
            }
        })

        return data
    }

    async create(data: movies): Promise<movies> {
        const { title, overview, poster_path, release_date, popularity, vote_average, vote_count, adult, language_id, runtime, video_key } = data;
        const movie: any = await prisma.movies.create({
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

    async getAllByCategoryById(id: number): Promise<void> {
        const movies: any = await prisma.movies_categories.findMany({
            where: {
                category_id: id
            },
            include: {
                categories: true,
                movies: true
            }
        });
        return movies
    }

    async getAllCategories(): Promise<void> {
        const movies: any = await prisma.categories.findMany();
        return movies
    }

    async getAllBySearch(name: any):  Promise<movies[]> {
        const count = await prisma.movies.count({
            where: {
                title: {
                    contains: name
                }
            }
        });
        const movies: any = await prisma.movies.findMany({
            skip: 0,
            take: 11,
            where: {
                title: {
                    contains: name
                }
            }
        });
        return [count, movies];
    }
}

export default new MoviesRepository();