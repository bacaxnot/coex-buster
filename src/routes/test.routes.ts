import { Router } from "express";

const router:Router = Router();

router.get('/shop', (req, res)=>{
    res.render('layouts/main_movie.ejs');
})

router.get('/history/order', (req, res)=>{  //colocarle al order:id
    res.render('layouts/history.ejs');
})

export default router