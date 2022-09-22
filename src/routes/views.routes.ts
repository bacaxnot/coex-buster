import { Router } from "express";

const route:Router = Router();

route
    .get('/', (req, res) => {
        res.render('layouts/temporal.ejs')
    })
    .get('/shop')
    .get('/shop/movie/:id')
    .get('/history')
    .get('/history/order/:id')
    .get('/login')
    .get('/register')

export default route;