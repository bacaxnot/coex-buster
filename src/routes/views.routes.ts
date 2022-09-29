import { Router } from "express";
import viewController from "../controllers/ViewController";
import tokenAuthentication from "../helpers/middlewares/tokenAuthentication";

const router: Router = Router();

router
    .get('/', (req: any, res: any) => {
        res.redirect('/movies/1')
    })

<<<<<<< HEAD
    .get('/movies', viewController.getAll )
    .get('/movies/paginate/:pag', viewController.getPaginate )
=======
    .get('/movies/:pag', viewController.getAll)
>>>>>>> 07999cc4c299c4e450eb3de5d17cdcedf8742f69
    .get('/movie/:id')
    .get('/history', tokenAuthentication)
    .get('/history/order/:id', tokenAuthentication)
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })

export default router;