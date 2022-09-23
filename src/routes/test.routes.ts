import { Router } from "express";

const router: Router = Router();

router.get('/shop', (req, res) => {
    var movies = [
        { name: 'Sammy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Tommy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Yammy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Ammy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Commy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Rommy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Zaommy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" },
        { name: 'Nommy', description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "comedy" }
    ];

    res.render('layouts/main_shop.ejs', {
        movies: movies,
    });
});

router.get('/history/order', (req, res) => {  //colocarle al order:id
    res.render('layouts/history_order.ejs');
})
// Test index
router.get('/', (req, res) => {
    res.render('index', { message: 'hello world' })
});

export default router