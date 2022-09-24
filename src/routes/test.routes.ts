import { Router } from "express";

const router: Router = Router();

router.get('/shop', (req, res) => {
    var movies = [
        { name: 'Sammy',img:"https://picsum.photos/200/253?random=1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloribus laudantium culpa voluptatibus laborum enim autem tempora facilis aliquid ullam dolor perferendis dicta, ad reiciendis impedit. Aspernatur porro similique minus.", genero: "Comedy" },
        { name: 'Tommy',img:"https://picsum.photos/200/253?random=2", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Terror" },
        { name: 'Yammy',img:"https://picsum.photos/200/253?random=3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloribus laudantium culpa voluptatibus laborum enim autem tempora facilis aliquid ullam dolor perferendis dicta, ad reiciendis impedit. Aspernatur porro similique minus.", genero: "Romance" },
        { name: 'Ammy',img:"https://picsum.photos/200/253?random=4", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Thriller" },
        { name: 'Commy',img:"https://picsum.photos/200/253?random=5",description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Rommy',img:"https://picsum.photos/200/253?random=6", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Zaommy',img:"https://picsum.photos/200/253?random=7", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Nommy',img:"https://picsum.photos/200/253?random=8", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" }
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