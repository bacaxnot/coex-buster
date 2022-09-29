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

    .get('/movies', viewController.getAll )
    .get('/movies/paginate/:pag', viewController.getPaginate )
    .get('/movie/:id')
    .get('/movies/category', viewController.getAllByCategoryId)
    .get('/movies/search', viewController.getAllBySearch)
    .get('/history',  tokenAuthentication, viewController.getHistory)
    .get('/history/order/:id',  tokenAuthentication, viewController.getOrderDetail)
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })

export default router;