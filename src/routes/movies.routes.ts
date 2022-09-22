import { Router, Request, Response } from "express";

const router : Router = Router();

const movies = [
    {
        "id": "1",
        "title": "Scary Movie"
    },
    {
        "id": "2",
        "title": "Saw"
    }
]

router.get('/', (req, res) => {
    res.redirect('movies')
});

router.get('/movies', (req, res) => {
    res.send(movies)
});

router.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    const result = movies.find(movie => movie.id == id);
    res.send(result) 
});

export default router