import { Router } from "express";
import LoginController from "../controllers/login.controller";

const router:Router = Router();

router
    .route('/login')
    .post(LoginController.signIn)


export default router;