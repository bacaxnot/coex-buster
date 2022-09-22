import { Router } from "express";

const route:Router = Router();


 
route.get('/', (req, res)=>{
    res.render('layouts/temporal.ejs');
})

export default route;