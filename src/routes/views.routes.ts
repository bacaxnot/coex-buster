import { Router } from "express";
import viewController from "../controllers/ViewController";
import tokenAuthentication from "../helpers/middlewares/tokenAuthentication";
import transactionController from "../controllers/transaction.controller";
import transaction_detailController from "../controllers/transaction_detail.controller";

const router: Router = Router();

router
    .get('/', (req: any, res: any) => {
        res.redirect('/movies/1')
    })

    .get('/movies/:pag', viewController.getAll)
    .get('/movie/:id')
    // .get('/history', tokenAuthentication)
    .get('/history', transactionController.getAll)
    .get('/history/order/:id', transaction_detailController.getOne)
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })

export default router;