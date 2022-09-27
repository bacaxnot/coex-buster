import { Request, Response } from "express";


class ShoppingController
{
    getAll(req:Request, res:Response)
    {
        res.send(req.cookies);
    }

    create(req:Request, res:Response)
    {   
        const movies = Object.keys(req.cookies);
        // res.json(req.cookies);
        // res.json(req.cookies);
        if(!movies.includes('shop')){const cookie = [req.body]; res.cookie('shop', cookie)}
        else{const data = req.cookies.shop; data.push(req.body); res.cookie('shop', data)}
        res.json({code:201, message:'Created order'});
    }

    deleted(req:Request, res:Response)
    {
        const id = req.params.id;
        const data = req.cookies.shop;
        const newCookie = data.filter((element:any) =>{element.id != id});
        res.cookie('shop', newCookie);
        res.send({code:200, msg:'Deleted'});
    }
}

export default new ShoppingController();