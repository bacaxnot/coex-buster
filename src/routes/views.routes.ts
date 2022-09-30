import { Router } from "express";
import viewController from "../controllers/ViewController";
import tokenAuthentication from "../helpers/middlewares/tokenAuthentication";
import transactionController from "../controllers/transaction.controller";
import transaction_detailController from "../controllers/transaction_detail.controller";

const router: Router = Router();

router
    .get('/', (req: any, res: any) => {
        res.redirect('/movies')
    })

    .get('/movies', tokenAuthentication, viewController.getAll )
    .get('/movies/paginate/:pag', tokenAuthentication, viewController.getPaginate )
    .get('/movie/:id')
    .get('/movies/category/:pag', tokenAuthentication, viewController.getAllByCategoryId)
    .get('/movies/search/:pag', tokenAuthentication,  viewController.getAllBySearch)
    .get('/history',  tokenAuthentication, viewController.getHistory)
    .get('/history/store',  tokenAuthentication, viewController.createTransaction)
    .get('/history/order/store',  tokenAuthentication, viewController.createTransactionDetail)
    .get('/history/order/:id',  tokenAuthentication, viewController.getOrderDetail)
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })
    .get('/movies/detail/:id', viewController.movieDetail)

export default router;