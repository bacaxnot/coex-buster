import { Router} from "express";
import MoviesController from "../controllers/movie.controller";

const router : Router = Router();

router
    .route('/movies')
    .get(MoviesController.getAll)

router
    .route('/movies/search')
    .get(MoviesController.getAll)

    
    router
    .route('/movies/category')
    .get(MoviesController.getAllByCategory)
    
router
    .route('/movies/:id')
    .get(MoviesController.get)


export default router