import MoviesRepository from "../repository/movies.repository";
import { IController } from "../helpers/interfaces/crud.interface";
import { Request, Response } from "express";
import UserRepository from "../repository/users.repository";
import transactionRepository from "../repository/transaction.repository";
import transactions_detailRepository from "../repository/transactions_detail.repository";
import actorsRepository from "../repository/actors.repository";

class ViewController implements IController<Request, Response>{

    renderLogin(req: Request, res: Response){
        const user = req.user
        res.render('layouts/login', {path:req.originalUrl, user:user})
    }

    renderRegister(req:Request, res:Response){
        const user = req.user
        res.render('layouts/register', {path:req.originalUrl, user:user})
    }

    async getAll(req: Request, res: Response): Promise<void> {
        const user = req.user         
        const movies : any = await MoviesRepository.getAll();
        const categories = await MoviesRepository.getAllCategories();
        movies[1].forEach((element : any, index: any) => {
            const genres : any = []
            element.movies_categories.forEach((genre : any) => {
                genres.push(genre.categories.name)
            })
            element.movies_categories = genres
        })
        res.render('layouts/shop', { paginate: 1, result: movies[1], count: movies[0], categories: categories, user:user, path: req.originalUrl, id:0 });
    }

    async getAllByCategoryId(req: Request, res: Response): Promise<void> {
        let category: any = req.query.category
        const pag = req.params.pag;
        category = parseInt(category)
        const user = req.user 
        const movies : any = await MoviesRepository.getAllByCategoryById(category, pag);
        const categories = await MoviesRepository.getAllCategories();
        res.render('layouts/shop', { paginate: movies[2], result: movies[1], count: movies[0], categories: categories, user: user, path: req.originalUrl, id:0});
    }

    async getPaginate(req: Request, res: Response): Promise<void> {  
        const pag = req.params.pag;
        const user = req.user;         
        const movies = await MoviesRepository.getPaginated(pag);
        const categories = await MoviesRepository.getAllCategories();
        movies[1].forEach((element : any, index: any) => {
            const genres : any = []
            element.movies_categories.forEach((genre : any) => {
                genres.push(genre.categories.name)
            })
            element.movies_categories = genres
        })
        res.render('layouts/shop', { paginate: movies[2], result: movies[1], count: movies[0], categories: categories, id: 0, user:user, path: req.originalUrl});
    }

    async getAllBySearch(req: Request, res: Response): Promise<void> {
        const search = req.query.search
        const pag = req.params.pag;
        const user = req.user;
        const movies: any = await MoviesRepository.getAllBySearch(search,pag);
        const categories = await MoviesRepository.getAllCategories();
        res.render('layouts/shop', { paginate: movies[2], result: movies[1], count: movies[0], categories: categories, id: search, user: user, path: req.originalUrl });
    }

    async movieDetail (req: Request, res:Response): Promise<void>{
        const user = req.user
        const id = parseInt(req.params.id)
        const movie = await MoviesRepository.get(id)
        const actors = await actorsRepository.getAll(id)
       
       
       res.render('layouts/movie-detail.ejs', {detalle:movie, actors: actors, path: req.originalUrl, user});
    }

    async createTransaction(req: Request, res:Response): Promise<void> {
        const {ides} : any = req.query;
        const arrId : [] = ides.split(',')
        try {
            if (req.user.id){
                const id = req.user.id;
                const user = await UserRepository.get(id);
                const current_date = new Date();
                const data : any = {
                    user_id: id,
                    create_date: current_date,
                    expiration_date: new Date(current_date.getTime()+(10*24*60*60*1000)),
                    status: true
                }
                await transactionRepository.create(data);
                const transactions : any = await transactionRepository.get(id);
                const transLength : number = transactions.length;
                const transId : number = transactions[transLength - 1].id;
                arrId.forEach(async (id : any) => {
                    const data : any = {
                        movie_id: parseInt(id),
                        transaction_id: transId,
                        quantity: 1
                    }
                    const result = await transactions_detailRepository.create(data);
                    console.log(result);
                })
                res.redirect('/history')
            }
        } catch (error : any) {
            res.render('layouts/error', {error: error})
        }
    }

    async createTransactionDetail(req: Request, res:Response, id : any, ): Promise<void> {
        try{
            const data = req.body;
            const query = await transactions_detailRepository.create(data);
            res.json({code:400});
        }
        catch(error:any){
            res.json({code:200, error:error});
        }
    }

    async getHistory(req: Request, res:Response): Promise<void> {
        const user = req.user
        const {id} = req.user;
        const result : any = await transactionRepository.get(id);
        result.forEach((element : any) => {
            element.create_date = new Date(element.create_date).toLocaleString();
        })
        res.render('layouts/history_order.ejs', {
            result : result,
            path: req.originalUrl,
            user
        })
    }

    async getOrderDetail(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const user = req.user
        const result : any = await transactions_detailRepository.get(id);
        result.forEach((element : any) => {
            element.transactions.create_date = new Date(element.transactions.create_date).toLocaleString();
        })
        res.render('layouts/orderDetail', {
            products : result,
            path: req.originalUrl,
            user
        })
    }
}

export default new ViewController();