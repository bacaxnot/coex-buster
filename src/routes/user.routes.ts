import { Router } from "express";
import usersController from "../controllers/users.controller";

const router:Router = Router();

router
    .route('/user')
    .post(usersController.create);

router
    .route('/user/:id')
    .get(usersController.getOne);

export default router;

