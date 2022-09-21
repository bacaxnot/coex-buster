import { Router, Request, Response } from "express";

const router:Router = Router();

router.get('/index', (req: Request, res: Response) => {
    res.render('index', {message: 'hello world'})
});

export default router