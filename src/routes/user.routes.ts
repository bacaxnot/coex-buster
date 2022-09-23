import { Router } from "express";
import usersController from "../controllers/users.controller";

const router:Router = Router();

router
    .route('/user')
    .post()

router
    .route('/user/:id')
    .get(usersController.getOne);

export default router;

