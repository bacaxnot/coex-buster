import { Router } from "express";
import viewController from "../controllers/ViewController";

const router: Router = Router();

router
    .get('/', (req: any, res: any) => {
        res.redirect('/movies')
    })

    .get('/movies', viewController.getAll)
    .get('/movie/:id')
    .get('/movies/category', viewController.getAllByCategoryId)
    .get('/movies/search', viewController.getAllBySearch)
    .get('/history')
    .get('/history/order/:id')
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register', (req, res)=> {
        res.render('layouts/register')
    })
    .get('/movies/detail/:id', viewController.movieDetail)

export default router;