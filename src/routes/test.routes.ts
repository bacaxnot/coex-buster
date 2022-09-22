import { Router } from "express";

const router:Router = Router();

// Test index
router.get('/index', (req, res) => {
    res.render('index', {message: 'hello world'})
});

// Test order detail
router.get('/order', (req, res) => {
    res.render('layouts/orderDetail', {
        date: '04.25.2021',
        products: [
            {
                id: 176,
                path: '/ok4ot3YbfDYZcINXf91JUfq3maB.jpg',
                title: 'Saw',
                genres: [
                    'Horror',
                    'Thriller',
                    'Crime'
                ],
                vote_average: 7.4
            },{
                id: 299534,
                path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
                title: 'Avengers: Endgame',
                genres: [
                    'Adventure',
                    'Science Fiction',
                    'Action'
                ],
                vote_average: 8.3
            }
        ]
    })
});

export default router