import { Router } from "express";
import viewController from "../controllers/ViewController";

const router: Router = Router();

router
    .get('/', (req: any, res: any) => {
        res.redirect('/movies')
    })

    .get('/movies', viewController.getAll )
    .get('/movies/paginate/:pag', viewController.getPaginate )
    .get('/movie/:id')
    .get('/history')
    .get('/history/order/:id')
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })

export default router;