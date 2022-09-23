import { Router } from "express";

const router:Router = Router();

// Test index
router.get('/index', (req, res) => {
    res.render('index', {message: 'hello world'})
});

export default router