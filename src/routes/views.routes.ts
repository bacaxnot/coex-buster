import { Router } from "express";

const router:Router = Router();



router
    .get('/')
    .get('/shop')
    .get('/shop/movie/:id')
    .get('/history')
    .get('/history/order/:id')
    .get('/login', (req, res)=> {
        res.render('layouts/login')
    })
    .get('/register')


export default router;