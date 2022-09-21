import { Router } from "express";

const route:Router = Router();

route
    .get('/')
    .get('/shop')
    .get('/shop/movie/:id')
    .get('/history')
    .get('/history/order/:id')
    .get('/login')
    .get('/register')

export default route;