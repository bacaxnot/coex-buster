import { Router } from 'express'

const router: Router = Router();

const data = [
    { id: "1", name: "Patrick1 Patrick1 Patrick1", img: "https://es.web.img3.acsta.net/pictures/22/03/21/14/03/3443055.jpg" },
    { id: "2", name: "Patrick2", img: "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_.jpg" },
    { id: "3", name: "Patrick3", img: "https://media.glamour.es/photos/616f7c7860f20fed760a302a/master/w_1600%2Cc_limit/633514.jpeg" },
    { id: "4", name: "Patrick4", img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/black-panther-ryan-coogler-scaled.jpg?fit=2560%2C1708&quality=50&strip=all&ssl=1" },
    { id: "5", name: "Patrick5", img: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png" },
    { id: "6", name: "Patrick6", img: "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png" },
    { id: "5", name: "Patrick7", img: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png" },
    { id: "6", name: "Patrick8", img: "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png" },
    { id: "5", name: "Patrick9", img: "https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png" },
    { id: "6", name: "Patrick10", img: "https://i.pinimg.com/originals/2d/4c/fb/2d4cfbafcb1d65a9ee3013d9a5b86417.gif" },
    { id: "5", name: "Patrick11", img: "https://as01.epimg.net/epik/imagenes/2019/06/03/portada/1559573314_873311_1559575720_noticia_normal.jpg" },
    { id: "6", name: "Patrick12", img: "https://ep00.epimg.net/elpais/imagenes/2016/05/24/album/1464082468_050087_1464083762_album_normal.jpg" },
    { id: "6", name: "Patrick13", img: "https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWN0b3Jlc3xlbnwwfHwwfHw%3D&w=1000&q=80" },
]

const getInfo = "Después de los eventos devastadores de 'Vengadores: Infinity War', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga 'Vengadores'."

router.get('/shop', (req, res) => {
    var movies = [
        { name: 'Sammy', img: "https://picsum.photos/200/253?random=1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloribus laudantium culpa voluptatibus laborum enim autem tempora facilis aliquid ullam dolor perferendis dicta, ad reiciendis impedit. Aspernatur porro similique minus.", genero: "Comedy" },
        { name: 'Tommy', img: "https://picsum.photos/200/253?random=2", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Terror" },
        { name: 'Yammy', img: "https://picsum.photos/200/253?random=3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloribus laudantium culpa voluptatibus laborum enim autem tempora facilis aliquid ullam dolor perferendis dicta, ad reiciendis impedit. Aspernatur porro similique minus.", genero: "Romance" },
        { name: 'Ammy', img: "https://picsum.photos/200/253?random=4", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Thriller" },
        { name: 'Commy', img: "https://picsum.photos/200/253?random=5", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Rommy', img: "https://picsum.photos/200/253?random=6", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Zaommy', img: "https://picsum.photos/200/253?random=7", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" },
        { name: 'Nommy', img: "https://picsum.photos/200/253?random=8", description: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote...", genero: "Comedy" }
    ];

    res.render('layouts/main_shop.ejs', {
        movies: movies,
    });
});

router.get('/history/order', (req, res) => {  //colocarle al order:id
    res.render('layouts/history_order.ejs', {
        info: [
            {
            id: 100,
            date: '25.09.2022',
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
                }, {
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
        },
        {
            id: 200,
            date: '24.09.2022',
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
                }, {
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
        }]
    })
});

// Test index
router.get('/', (req, res) => {
    // res.render('index', { message: 'hello world' })
    res.render('layouts/temporal', {
        result : [
            {
                id: 65,
                path: '/ok4ot3YbfDYZcINXf91JUfq3maB.jpg',
                title: 'Saw',
                overview: '',
                genres: [
                    'Horror',
                    'Thriller',
                    'Crime'
                ],
                vote_average: 7.4
            },
            {
                id: 64,
                path: '/ok4ot3YbfDYZcINXf91JUfq3maB.jpg',
                title: 'Saw 2',
                overview: '',
                genres: [
                    'Horror',
                    'Thriller',
                    'Crime'
                ],
                vote_average: 4
            }
        ]
    })
})


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
            }, {
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

router.get('/movie/detail', (req, res) => {
    res.render('layouts/movie-detail')
})


export default router
