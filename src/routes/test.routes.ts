import { Router } from "express";

const router:Router = Router();

router.get('/shop', (req, res)=>{
    res.render('layouts/main_movie.ejs');
})

router.get('/history/order:id', (req, res)=>{
    res.render('layouts/history.ejs');
})

export default router