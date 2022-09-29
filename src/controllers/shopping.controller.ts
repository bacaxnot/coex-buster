import { Request, Response } from "express";
import { transaction_detail } from '@prisma/client';


class ShoppingController
{
    getAll(req:Request, res:Response)
    {
        const usrid = req.params.id;
        const cookies = Object.keys(req.cookies);
        if(!cookies.includes('shop')) res.cookie('shop', []).json({code:400, msg:'Empty'}); // Valida si la cookie existe
        const data = req.cookies.shop;
        const usrInfo = data.filter((element:any) => element['id_user'] == usrid);
        usrInfo.length == 0 ? res.json({code:400, msg:'No orders yet'}) : res.json(usrInfo[0].movies);
    }

    create(req:Request, res:Response)
    {   
        const cookies:any = Object.keys(req.cookies);
        if (!cookies.includes('shop')) { // Crea la cookie si previamente no existia
            const cookie = [req.body]; res.cookie('shop', cookie)
        }
        else { // Si la cookie ya esta creada
            const data:any = req.cookies.shop;
            const target = data.filter((e:any) => e.id_user == req.body.id_user); // Buscando el user
            if (target.length == 0) {  // Si no existe el user, agrega la req a la cookie
                data.push(req.body)
                res.cookie('shop', data)
            }
            else {
                console.log(target)
                const userMovies = target[0].movies;
                userMovies.push(...req.body.movies);
                res.cookie('shop', data)}
            }
        res.json({code:201, message:'Created order'});
    }

    deleted(req:Request, res:Response)
    {
        const idMovie = req.body.id_movie;
        const data:any = req.cookies.shop;
        const idUser = req.body.id_user;
        const usrInfo = data.filter((element:any) => element['id_user'] == idUser);
        const mvs = usrInfo[0].movies;
        const filtered = mvs.filter((e:any) => e.id != idMovie);
        usrInfo[0].movies = filtered;
        res.cookie('shop', data);
        res.json({code:200, msg:'Deleted'});
    }
}

export default new ShoppingController();