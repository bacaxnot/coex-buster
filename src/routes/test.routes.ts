import { Router } from 'express'

const router: Router = Router()

// Test index
<<<<<<< HEAD
router.get('/', (req, res) => {
    res.render('layouts/movie-detail')
})
=======
router.get('/index', (req, res) => {
    res.render('index', {message: 'hello world'})
});
>>>>>>> main

export default router
