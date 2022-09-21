import { Router } from "express";

const route:Router = Router();

// route.get('/', (req, res)=>{
//     res.render('layouts/temporal.ejs');
// })

route.get('/', (req, res)=>{
    res.render('layouts/main_movie.ejs');
})

route.get('/history', (req, res)=>{
    res.render('layouts/history.ejs');
})

export default route;