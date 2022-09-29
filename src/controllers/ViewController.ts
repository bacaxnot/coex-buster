import MoviesRepository from "../repository/movies.repository";
import { IController } from "../helpers/interfaces/crud.interface";
import { Request, Response } from "express";

class ViewController implements IController<Request, Response>{

    async getAll(req: Request, res: Response): Promise<any> {           
        const movies : any = await MoviesRepository.getAll();
        const categories = await MoviesRepository.getAllCategories();
        movies[1].forEach((element : any, index: any) => {
            const genres : any = []
            element.movies_categories.forEach((genre : any) => {
                genres.push(genre.categories.name)
            })
            element.movies_categories = genres
        })
        // return res.json(movies[1]);
        res.render('layouts/shop', { paginate: 1, result: movies[1], count: movies[0], categories: categories });
    }

    async getAllByCategoryId(req: Request, res: Response): Promise<void> {
        let category: any = req.query.category
        console.log(category)
        category = parseInt(category)
        const movies : any = await MoviesRepository.getAllByCategoryById(category);
        // const result = movies.map(element => element.movies );
        const categories = await MoviesRepository.getAllCategories();
        res.render('layouts/shop', { paginate: movies[2], result: movies, count: movies[0], categories: categories });
    }

    

    async getAllBySearch(req: Request, res: Response): Promise<void> {
        const search = req.query.search
        // console.log(search);
        const movies: any = await MoviesRepository.getAllBySearch(search);
        const categories = await MoviesRepository.getAllCategories();
        res.render('layouts/shop', { paginate: movies[2], result: movies[1], count: movies[0], categories: categories});
    }

    async getPaginate(req: Request, res: Response): Promise<void> {  
        const pag = req.params.pag;         
        const movies = await MoviesRepository.getPaginated(pag);
        const categories = await MoviesRepository.getAllCategories();
        res.render('layouts/shop', { paginate: movies[2], result: movies[1], count: movies[0], categories: categories });
    }
    
    async get(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const movie = await MoviesRepository.get(id);
        res.json({ movie: movie });
    }
    async update(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const movie = await MoviesRepository.update(id, req.body);
        res.json(movie);
    }
    async delete(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const movie = await MoviesRepository.update(id, req.body);
        res.json(movie);
    }
    async create(req: Request, res: Response): Promise<void> {
        const movie = await MoviesRepository.create(req.body);
        res.json(movie);
    }


}

export default new ViewController();