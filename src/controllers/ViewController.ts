import MoviesRepository from "../repository/movies.repository";
import { IController } from "../helpers/interfaces/crud.interface";
import { Request, Response } from "express";
import transactionRepository from "../repository/transaction.repository";
import transactions_detailRepository from "../repository/transactions_detail.repository";

class ViewController implements IController<Request, Response>{

    async getAll(req: Request, res: Response): Promise<void> {           
        const movies = await MoviesRepository.getAll();
        const categories = await MoviesRepository.getAllCategories();

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
        //  res.json(movies);
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

    async getHistory(req: Request, res:Response): Promise<void> {
        const {userId} = req;
        const result = await transactionRepository.getAll();
        result.forEach((element : any) => {
            element.create_date = new Date(element.create_date).toLocaleString();
        })
        res.render('layouts/history_order.ejs', {
            result : result
        })
    }

    async getOrderDetail(req: Request, res:Response): Promise<void> {
        const id = parseInt(req.params.id);
        const result : any = await transactions_detailRepository.get(id);
        result.forEach((element : any) => {
            element.transactions.create_date = new Date(element.transactions.create_date).toLocaleString();
        })
        res.render('layouts/orderDetail', {
            products : result
        })
    }
}

export default new ViewController();