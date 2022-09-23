import { Router } from 'express'

const router: Router = Router()

// Test index
router.get('/', (req, res) => {
    res.render('layouts/movie-detail')
})

export default router
