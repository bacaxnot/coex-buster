import { Router } from "express";
import transactionController from "../controllers/transaction.controller";
const router:Router = Router();


router
    .route('/history')
    .get(transactionController.getAll)
router
    .route('/history/:id')
    .get(transactionController.getOne);

router
    .route('/history/create')
    .post(transactionController.create);
export default router