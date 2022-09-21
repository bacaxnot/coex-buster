import { Router, Request, Response } from "express";

const router : Router = Router();

router.get('/movies', (req, res) => {
    const data = {
        "movies": [
            {
                "id": 1,
                "title": "Scary Movie"
            },
            {
                "id": 2,
                "title": "Saw"
            }
        ]
    }
    res.send(data)
});

export default router