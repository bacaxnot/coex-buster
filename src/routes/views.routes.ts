import { Router } from "express";
import viewController from "../controllers/ViewController";

const router: Router = Router();

router
    .get('/', viewController.getAll)
    .get('/movie/:id')
    .get('/history')
    .get('/history/order/:id')
    .get('/login', (req, res) => {
        res.render('layouts/login')
    })
    .get('/register')

export default router;